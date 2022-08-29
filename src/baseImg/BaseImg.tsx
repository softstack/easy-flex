import React, { forwardRef, ImgHTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import { AbsoluteSize, BorderRadius, Distance, Height, ObjectFit, Size, Width } from '../types';
import { getBorderRadius, ifNotUndefined, useDistance, useEasyFlexTheme, useSize } from '../utils';

const StyledBaseImg = styled.img<{
	'data-border-radius'?: AbsoluteSize;
	'data-height'?: Size;
	'data-margin-bottom': AbsoluteSize;
	'data-margin-left': AbsoluteSize;
	'data-margin-right': AbsoluteSize;
	'data-margin-top': AbsoluteSize;
	'data-object-fit'?: ObjectFit;
	'data-width'?: Size;
}>`
	display: flex;
	border-radius: ${({ 'data-border-radius': borderRadius }) => borderRadius};
	height: ${({ 'data-height': height }) => height};
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
	object-fit: ${({ 'data-object-fit': objectFit }) => objectFit};
	width: ${({ 'data-width': width }) => width};
`;

export interface BaseImgProps extends ImgHTMLAttributes<HTMLImageElement> {
	/** Component's border radius. */
	borderRadius?: BorderRadius | AbsoluteSize;
	/** Component's height. */
	height?: Height | Size;
	/** Component's margin of all sides. */
	margin?: Distance | AbsoluteSize;
	/** Component's bottom margin. */
	marginBottom?: Distance | AbsoluteSize;
	/** Component's left margin. */
	marginLeft?: Distance | AbsoluteSize;
	/** Component's right margin. */
	marginRight?: Distance | AbsoluteSize;
	/** Component's top margin. */
	marginTop?: Distance | AbsoluteSize;
	/** Component's left and right margin. */
	marginHorizontal?: Distance | AbsoluteSize;
	/** Component's top and bottom margin. */
	marginVertical?: Distance | AbsoluteSize;
	objectFit?: ObjectFit;
	round?: boolean;
	/** Component's width. */
	width?: Width | Size;
}

export const BaseImg = forwardRef<HTMLImageElement, BaseImgProps>(
	(
		{
			borderRadius,
			height,
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginHorizontal,
			marginVertical,
			objectFit,
			round = false,
			width,
			...props
		},
		ref
	) => {
		const theme = useEasyFlexTheme();

		const processedBorderRadius = useMemo<AbsoluteSize | undefined>(
			() => (round ? '100000px' : ifNotUndefined(borderRadius, (borderRadius) => getBorderRadius(theme, borderRadius))),
			[borderRadius, round, theme]
		);

		const distance = useDistance({
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginHorizontal,
			marginVertical,
		});

		const size = useSize({
			fullHeight: false,
			fullWidth: false,
			height,
			width,
		});

		return (
			<StyledBaseImg
				data-border-radius={processedBorderRadius}
				data-height={size.height}
				data-margin-bottom={distance.margin.bottom}
				data-margin-left={distance.margin.left}
				data-margin-right={distance.margin.right}
				data-margin-top={distance.margin.top}
				data-object-fit={objectFit}
				data-width={size.width}
				ref={ref}
				{...props}
			/>
		);
	}
);

BaseImg.displayName = 'BaseImg';
