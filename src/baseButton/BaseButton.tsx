import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { AlignItems, AlignSelf, Color, CssColor, JustifyContent, Overflow, Size, Width } from '../types';
import { useColor } from '../utils/base';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledBaseButton = styled.button<
	{
		'data-align'?: AlignItems;
		'data-align-self'?: AlignSelf;
		'data-background-color': CssColor;
		'data-color'?: CssColor;
		'data-grow'?: number;
		'data-justify'?: JustifyContent;
		'data-overflow'?: Overflow;
		'data-overflow-x'?: Overflow;
		'data-overflow-y'?: Overflow;
		'data-shrink'?: number;
	} & BorderStyleProps &
		DistanceStyleProps &
		FontStyleProps &
		SizeStyleProps
>`
	display: flex;
	box-sizing: border-box;
	flex-direction: row;
	border: none;
	cursor: pointer;
	align-items: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	flex-grow: ${({ 'data-grow': grow }) => grow};
	justify-content: ${({ 'data-justify': justify }) => justify};
	overflow: ${({ 'data-overflow': overflow }) => overflow};
	overflow-x: ${({ 'data-overflow-x': overflowX }) => overflowX};
	overflow-y: ${({ 'data-overflow-y': overflowY }) => overflowY};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
	${borderStyle}
	${distanceStyle}
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
		FontProps,
		SizeProps {
	/** The alignment of the component's children on the cross axis. */
	align?: AlignItems;
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: AlignSelf;
	/** Component's background color. */
	backgroundColor?: Color;
	/** Component's color. */
	color?: Color;
	/** Component's flex grow. */
	grow?: number;
	/** Sets how the browser distributes space between and around the component's children along the main axis. */
	justify?: JustifyContent;
	/** Component's overflow behaviour. */
	overflow?: Overflow;
	/** Component's verflow behaviour on left and right edges. */
	overflowX?: Overflow;
	/** Component's overflow behaviour on top and bottom edges. */
	overflowY?: Overflow;
	/** Component's flex shrink. */
	shrink?: number;
	/** Component's width. */
	width?: Width | Size;
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
			borderColor,
			borderRadius,
			borderStyle,
			borderWidth,
			children,
			color,
			fontFamily,
			fontSize,
			fontWeight,
			fullHeight,
			fullWidth,
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
				data-align={align}
				data-align-self={alignSelf}
				data-background-color={processedBackgroundColor}
				data-color={processedColor}
				data-grow={grow}
				data-justify={justify}
				data-overflow={overflow}
				data-overflow-x={overflowX}
				data-overflow-y={overflowY}
				data-shrink={shrink}
				{...borderStyleProps}
				{...distanceStyleProps}
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
