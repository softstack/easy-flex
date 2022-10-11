import React, { forwardRef, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { CustomName, Falsifiable, ObjectFit } from '../types';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledImg = styled.img<
	{
		'data-object-fit'?: Falsifiable<ObjectFit>;
	} & BorderStyleProps &
		MarginStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	display: flex;
	object-fit: ${({ 'data-object-fit': objectFit }) => objectFit};
	${borderStyle}
	${marginStyle}
	${sizeStyle}
`;

export interface ImgProps<
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
> extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'>,
		BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>,
		MarginProps<CustomDistance>,
		SizeProps<CustomHeight, CustomWidth> {
	objectFit?: Falsifiable<ObjectFit>;
}

export const createImg = <
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
>() => {
	const Img = forwardRef<
		HTMLImageElement,
		ImgProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomHeight, CustomWidth>
	>(
		(
			{
				borderColor,
				borderRadius,
				borderStyle,
				borderWidth,
				fullHeight,
				fullWidth,
				height,
				margin,
				marginBottom,
				marginHorizontal,
				marginLeft,
				marginRight,
				marginTop,
				marginVertical,
				maxHeight,
				maxWidth,
				minHeight,
				minWidth,
				objectFit,
				round,
				width,
				...props
			},
			ref
		) => {
			const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth, round });

			const marginStyleProps = useMarginStyleProps({
				margin,
				marginBottom,
				marginHorizontal,
				marginLeft,
				marginRight,
				marginTop,
				marginVertical,
			});

			const sizeStyleProps = useSizeStyleProps({
				fullHeight,
				fullWidth,
				height,
				maxHeight,
				maxWidth,
				minHeight,
				minWidth,
				width,
			});

			return (
				<StyledImg
					data-object-fit={objectFit}
					{...borderStyleProps}
					{...marginStyleProps}
					{...sizeStyleProps}
					ref={ref}
					{...props}
				/>
			);
		}
	);
	Img.displayName = 'Img';
	return Img;
};
