import React, { FC, HTMLAttributes, MouseEvent, useCallback, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { AbsoluteSize, Color, CssColor } from '../types';
import { isAbsoluteSize, useEasyFlexTheme } from '../utils/base';
import { useDefaultColor } from '../utils/color';

const Background = styled.div<{
	'data-background-color': CssColor;
}>`
	box-sizing: border-box;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
`;

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	backgroundColor?: Color;
	/** Sets blur for the content covered by the modal background. */
	blur?: boolean | AbsoluteSize;
	blurElementId?: string;
	containerElementId?: string;
	/** Called if the modal background is clicked. */
	onClose: () => void;
}

export const Modal: FC<ModalProps> = ({
	children,
	backgroundColor,
	blur,
	blurElementId,
	containerElementId,
	onClose,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const backgroundElement = useRef<HTMLDivElement>(null);

	const handleClick = useCallback(
		(event: MouseEvent<HTMLDivElement>) => {
			if (event.target === backgroundElement.current) {
				onClose();
			}
		},
		[onClose]
	);

	const processedBackgroundColor = useDefaultColor(backgroundColor, theme.modal.backgroundColor);

	useEffect(() => {
		if (
			(blurElementId ?? theme.modal.blurElementId) &&
			(isAbsoluteSize(blur) || (blur !== false && theme.modal.blur))
		) {
			const styleElement = document.createElement('style');
			styleElement.textContent = `
				#${blurElementId ?? theme.modal.blurElementId} {
					filter: blur(${isAbsoluteSize(blur) ? blur : theme.modal.blur});
				}
			`;
			document.head.append(styleElement);

			return () => {
				document.head.removeChild(styleElement);
			};
		}
	}, [blur, blurElementId, theme]);

	const container = useMemo<HTMLElement>(
		() => document.getElementById(containerElementId ?? theme.modal.containerElementId) ?? document.body,
		[containerElementId, theme]
	);

	return createPortal(
		<Background
			ref={backgroundElement}
			data-background-color={processedBackgroundColor}
			onClick={handleClick}
			{...props}
		>
			{children}
		</Background>,
		container
	);
};
