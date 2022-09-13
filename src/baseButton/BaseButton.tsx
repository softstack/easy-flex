import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import {
	FlexContainerProps,
	flexContainerStyle,
	FlexContainerStyleProps,
	useFlexContainerStyleProps,
} from '../utils/flexContainer';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { OverflowProps, overflowStyle, OverflowStyleProps, useOverflowStyleProps } from '../utils/overflow';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledBaseButton = styled.button<
	BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexContainerStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		OverflowStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	display: flex;
	border: none;
	cursor: pointer;
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexContainerStyle}
	${flexItemStyle}
	${fontStyle}
	${overflowStyle}
	${sizeStyle}
	
	&:disabled {
		cursor: not-allowed;
	}

	&:focus:not(:focus-visible) {
		outline: 0;
	}
`;

export type BaseButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
	BorderProps &
	ColorProps &
	DistanceProps &
	FlexContainerProps &
	FlexItemProps &
	FontProps &
	OverflowProps &
	SizeProps;

export type ExternalBaseButtonProps = Omit<
	BaseButtonProps,
	| 'align'
	| 'backgroundColor'
	| 'borderColor'
	| 'borderRadius'
	| 'borderStyle'
	| 'borderWidth'
	| 'color'
	| 'direction'
	| 'fontFamily'
	| 'fontSize'
	| 'fontWeight'
	| 'gap'
	| 'italic'
	| 'justify'
	| 'lineHeight'
	| 'overflow'
	| 'overflowX'
	| 'overflowY'
	| 'padding'
	| 'paddingBottom'
	| 'paddingHorizontal'
	| 'paddingLeft'
	| 'paddingRight'
	| 'paddingTop'
	| 'paddingVertical'
	| 'round'
	| 'underline'
	| 'underlineColor'
>;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
	(
		{
			align,
			alignSelf,
			backgroundColor = 'transparent',
			basis,
			borderColor,
			borderRadius,
			borderStyle,
			borderWidth,
			children,
			color,
			flex,
			direction = 'row',
			fontFamily,
			fontSize,
			fontWeight,
			fullHeight,
			fullWidth,
			gap,
			grow,
			height,
			italic,
			justify,
			lineHeight,
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
			overflow,
			overflowX,
			overflowY,
			padding,
			paddingBottom,
			paddingHorizontal,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingVertical,
			round,
			shrink,
			underline,
			width,
			...props
		},
		ref
	) => {
		const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth, round });

		const colorStyleProps = useColorStyleProps({ backgroundColor, color });

		const distanceStyleProps = useDistanceStyleProps({
			margin,
			marginBottom,
			marginHorizontal,
			marginLeft,
			marginRight,
			marginTop,
			marginVertical,
			padding,
			paddingBottom,
			paddingHorizontal,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingVertical,
		});

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight, underline });

		const flexContainerStyleProps = useFlexContainerStyleProps({ align, direction, gap, justify });

		const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

		const overflowStyleProps = useOverflowStyleProps({ overflow, overflowX, overflowY });

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
			<StyledBaseButton
				{...borderStyleProps}
				{...colorStyleProps}
				{...distanceStyleProps}
				{...flexContainerStyleProps}
				{...flexItemStyleProps}
				{...fontStyleProps}
				{...overflowStyleProps}
				{...sizeStyleProps}
				ref={ref}
				{...props}
			>
				{children}
			</StyledBaseButton>
		);
	}
);

BaseButton.displayName = 'BaseButton';
