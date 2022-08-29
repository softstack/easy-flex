import React, { forwardRef, ImgHTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import { AbsoluteSize, BorderRadius, ObjectFit, Size } from '../types';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';
import { getBorderRadius, ifNotUndefined, useEasyFlexTheme } from '../utils/utils';

const StyledBaseImg = styled.img<
	{
		'data-border-radius'?: AbsoluteSize;
		'data-height'?: Size;
		'data-object-fit'?: ObjectFit;
		'data-width'?: Size;
	} & MarginStyleProps &
		SizeStyleProps
>`
	display: flex;
	border-radius: ${({ 'data-border-radius': borderRadius }) => borderRadius};
	object-fit: ${({ 'data-object-fit': objectFit }) => objectFit};
	${marginStyle}
	${sizeStyle}
`;

export type BaseImgProps = ImgHTMLAttributes<HTMLImageElement> &
	MarginProps &
	SizeProps & {
		/** Component's border radius. */
		borderRadius?: BorderRadius | AbsoluteSize;
		objectFit?: ObjectFit;
		round?: boolean;
	};

export const BaseImg = forwardRef<HTMLImageElement, BaseImgProps>(
	(
		{
			borderRadius,
			fullHeight,
			fullWidth,
			height,
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginHorizontal,
			marginVertical,
			maxHeight,
			maxWidth,
			minHeight,
			minWidth,
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

		const marginStyleProps = useMarginStyleProps({
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginHorizontal,
			marginVertical,
		});

		const sizeStyleProps = useSizeStyleProps({
			fullHeight,
			fullWidth,
			height,
			heightMax: maxHeight,
			heightMin: minHeight,
			width,
			widthMax: maxWidth,
			widthMin: minWidth,
		});

		return (
			<StyledBaseImg
				data-border-radius={processedBorderRadius}
				data-object-fit={objectFit}
				{...marginStyleProps}
				{...sizeStyleProps}
				ref={ref}
				{...props}
			/>
		);
	}
);

BaseImg.displayName = 'BaseImg';
