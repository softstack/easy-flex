import React, { HTMLAttributes, memo, MouseEvent, useCallback, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { AbsoluteSize, Color, CssColor, CustomName, Falsifiable } from '../types';
import { isAbsoluteSize, useEasyFlexTheme, useModalContainer } from '../utils/base';
import { useDefaultColor } from '../utils/color';
import { MiscProps, useMiscStyleProps } from '../utils/misc';

const Background = styled.div<{
	'data-background-color': CssColor;
	'data-blur': AbsoluteSize | undefined;
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
	backdrop-filter: ${({ 'data-blur': blur }) => `blur(${blur})`};
`;

export interface ModalProps<CustomColor extends CustomName> extends HTMLAttributes<HTMLDivElement>, MiscProps {
	backgroundColor?: Falsifiable<Color<CustomColor>>;
	/** Sets blur for the content covered by the modal background. */
	blur?: AbsoluteSize | boolean;
	containerElementId?: Falsifiable<string>;
	/** Called if the modal background is clicked. */
	onClose: () => void;
}

export const createModal = <CustomColor extends CustomName>() => {
	const Modal = memo<ModalProps<CustomColor>>(
		({ backgroundColor, blur, children, containerElementId, displayNone, onClose, visibility, ...props }) => {
			const theme = useEasyFlexTheme();

			const miscStyleProps = useMiscStyleProps({ displayNone, visibility });

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

			const processedBlur = useMemo(() => (isAbsoluteSize(blur) ? blur : theme.modal.blur), [blur, theme]);

			const container = useModalContainer(containerElementId);

			return createPortal(
				<Background
					ref={backgroundElement}
					data-background-color={processedBackgroundColor}
					data-blur={processedBlur}
					onClick={handleClick}
					{...miscStyleProps}
					{...props}
				>
					{children}
				</Background>,
				container
			);
		}
	);
	Modal.displayName = 'Modal';
	return Modal;
};
