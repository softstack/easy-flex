import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { Color, CssColor, Overflow } from '../types';
import { useColor } from '../utils/base';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import {
	FlexContainerProps,
	flexContainerStyle,
	FlexContainerStyleProps,
	useFlexContainerStyleProps,
} from '../utils/flexContainer';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledBaseButton = styled.button<
	{
		'data-background-color': CssColor;
		'data-color'?: CssColor;
		'data-overflow'?: Overflow;
		'data-overflow-x'?: Overflow;
		'data-overflow-y'?: Overflow;
	} & BorderStyleProps &
		DistanceStyleProps &
		FlexContainerStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		SizeStyleProps
>`
	display: flex;
	box-sizing: border-box;
	border: none;
	cursor: pointer;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	overflow: ${({ 'data-overflow': overflow }) => overflow};
	overflow-x: ${({ 'data-overflow-x': overflowX }) => overflowX};
	overflow-y: ${({ 'data-overflow-y': overflowY }) => overflowY};
	${borderStyle}
	${distanceStyle}
	${flexContainerStyle}
	${flexItemStyle}
	${fontStyle}
	${sizeStyle}
	
	&:disabled {
		cursor: not-allowed;
	}

	&:focus:not(:focus-visible) {
		outline: 0;
	}
`;

export interface BaseButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		BorderProps,
		DistanceProps,
		FlexContainerProps,
		FlexItemProps,
		FontProps,
		SizeProps {
	/** Component's background color. */
	backgroundColor?: Color;
	/** Component's color. */
	color?: Color;
	/** Component's overflow behaviour. */
	overflow?: Overflow;
	/** Component's verflow behaviour on left and right edges. */
	overflowX?: Overflow;
	/** Component's overflow behaviour on top and bottom edges. */
	overflowY?: Overflow;
}

export type ExternalBaseButtonProps = Omit<
	BaseButtonProps,
	| 'align'
	| 'backgroundColor'
	| 'borderColor'
	| 'borderRadius'
	| 'borderWidth'
	| 'color'
	| 'justify'
	| 'padding'
	| 'paddingBottom'
	| 'paddingHorizontal'
	| 'paddingLeft'
	| 'paddingRight'
	| 'paddingTop'
	| 'paddingVertical'
>;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
	(
		{
			align,
			alignSelf,
			backgroundColor,
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
			width,
			...props
		},
		ref
	) => {
		const processedBackgroundColor = useColor(backgroundColor, 'transparent');

		const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth, round });

		const processedColor = useColor(color, undefined);

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

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight });

		const flexContainerStyleProps = useFlexContainerStyleProps({ align, direction, gap, justify });

		const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

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
				data-background-color={processedBackgroundColor}
				data-color={processedColor}
				data-overflow={overflow}
				data-overflow-x={overflowX}
				data-overflow-y={overflowY}
				{...borderStyleProps}
				{...distanceStyleProps}
				{...flexContainerStyleProps}
				{...flexItemStyleProps}
				{...fontStyleProps}
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
