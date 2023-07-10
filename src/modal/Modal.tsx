import React, { HTMLAttributes, memo, MouseEvent, useCallback, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { AbsoluteSize, Color, CssColor, CustomName, Falsifiable } from '../types';
import { defalsify, isAbsoluteSize, useEasyFlexTheme, useModalContainer } from '../utils/base';
import { useDefaultColor } from '../utils/color';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';

const Background = styled.div<
	{
		'data-background-color': CssColor;
		'data-blur': AbsoluteSize | undefined;
	} & MiscStyleProps
>`
	align-items: center;
	box-sizing: border-box;
	flex-direction: row;
	inset: 0;
	justify-content: center;
	margin: 0;
	padding: 0;
	position: fixed;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	backdrop-filter: ${({ 'data-blur': blur }) => `blur(${blur})`};
	${miscStyle}
`;

export interface ModalProps<CustomColor extends CustomName, CustomDistance extends CustomName>
	extends HTMLAttributes<HTMLDivElement>,
		MiscProps<CustomDistance> {
	backgroundColor?: Falsifiable<Color<CustomColor>>;
	/** Sets blur for the content covered by the modal background. */
	blur?: AbsoluteSize | boolean;
	containerElementId?: Falsifiable<string>;
	/** Called if the modal background is clicked. */
	onClose: () => void;
}

export const createModal = <CustomColor extends CustomName, CustomDistance extends CustomName>() => {
	const Modal = memo<ModalProps<CustomColor, CustomDistance>>(
		({ backgroundColor, blur, children, containerElementId, display, onClose, visibility, ...props }) => {
			const theme = useEasyFlexTheme();

			const miscStyleProps = useMiscStyleProps({ display: defalsify(display) ?? 'flex', visibility });

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
