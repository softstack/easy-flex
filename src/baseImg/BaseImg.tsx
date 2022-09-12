import React, { forwardRef, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ObjectFit } from '../types';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledBaseImg = styled.img<
	{
		'data-object-fit'?: ObjectFit;
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

export type BaseImgProps = ImgHTMLAttributes<HTMLImageElement> &
	BorderProps &
	MarginProps &
	SizeProps & {
		objectFit?: ObjectFit;
	};

export const BaseImg = forwardRef<HTMLImageElement, BaseImgProps>(
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
			<StyledBaseImg
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

BaseImg.displayName = 'BaseImg';
