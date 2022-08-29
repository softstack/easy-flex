import React, { ButtonHTMLAttributes, forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import {
	AbsoluteSize,
	AlignItems,
	AlignSelf,
	BorderRadius,
	BorderWidth,
	Color,
	CssColor,
	JustifyContent,
	Overflow,
	Size,
	Width,
} from '../types';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';
import { getBorderRadius, getBorderWidth, ifNotUndefined, useColor, useEasyFlexTheme } from '../utils/utils';

const StyledBaseButton = styled.button<
	{
		'data-align'?: AlignItems;
		'data-align-self'?: AlignSelf;
		'data-background-color': CssColor;
		'data-border-color'?: CssColor;
		'data-border-radius'?: AbsoluteSize;
		'data-border-style'?: 'solid';
		'data-border-width'?: AbsoluteSize;
		'data-color'?: CssColor;
		'data-grow'?: number;
		'data-justify'?: JustifyContent;
		'data-overflow'?: Overflow;
		'data-overflow-x'?: Overflow;
		'data-overflow-y'?: Overflow;
		'data-shrink'?: number;
	} & DistanceStyleProps &
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
	border-color: ${({ 'data-border-color': borderColor }) => borderColor};
	border-radius: ${({ 'data-border-radius': borderRadius }) => borderRadius};
	border-style: ${({ 'data-border-style': borderStyle }) => borderStyle};
	border-width: ${({ 'data-border-width': borderWidth }) => borderWidth};
	color: ${({ 'data-color': color }) => color};
	flex-grow: ${({ 'data-grow': grow }) => grow};
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height-max': heightMax }) => heightMax};
	min-height: ${({ 'data-height-min': heightMin }) => heightMin};
	justify-content: ${({ 'data-justify': justify }) => justify};
	overflow: ${({ 'data-overflow': overflow }) => overflow};
	overflow-x: ${({ 'data-overflow-x': overflowX }) => overflowX};
	overflow-y: ${({ 'data-overflow-y': overflowY }) => overflowY};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width-max': widthMax }) => widthMax};
	min-width: ${({ 'data-width-min': widthMin }) => widthMin};
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

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, DistanceProps, FontProps, SizeProps {
	/** The alignment of the component's children on the cross axis. */
	align?: AlignItems;
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: AlignSelf;
	/** Component's background color. */
	backgroundColor?: Color;
	/** Component's border color. */
	borderColor?: Color;
	/** Component's border radius. */
	borderRadius?: BorderRadius | AbsoluteSize;
	/** Component's border width. */
	borderWidth?: BorderWidth | AbsoluteSize;
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
	| 'paddingLeft'
	| 'paddingRight'
	| 'paddingTop'
	| 'paddingHorizontal'
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
			marginLeft,
			marginRight,
			marginTop,
			marginHorizontal,
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
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingHorizontal,
			paddingVertical,
			shrink,
			width,
			...props
		},
		ref
	) => {
		const theme = useEasyFlexTheme();

		const processedBackgroundColor = useColor(backgroundColor, 'transparent');

		const processedBorderColor = useColor(borderColor, undefined);

		const processedBorderRadius = useMemo<AbsoluteSize | undefined>(
			() => ifNotUndefined(borderRadius, (borderRadius) => getBorderRadius(theme, borderRadius)),
			[borderRadius, theme]
		);

		const processedBorderStyle = useMemo<'solid' | undefined>(() => (borderWidth ? 'solid' : undefined), [borderWidth]);

		const processedBorderWidth = useMemo<AbsoluteSize | undefined>(
			() => ifNotUndefined(borderWidth, (borderWidth) => getBorderWidth(theme, borderWidth)),
			[borderWidth, theme]
		);

		const processedColor = useColor(color, undefined);

		const distanceStyleProps = useDistanceStyleProps({
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginHorizontal,
			marginVertical,
			padding,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingHorizontal,
			paddingVertical,
		});

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight });

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
			<StyledBaseButton
				data-align={align}
				data-align-self={alignSelf}
				data-background-color={processedBackgroundColor}
				data-border-color={processedBorderColor}
				data-border-radius={processedBorderRadius}
				data-border-style={processedBorderStyle}
				data-border-width={processedBorderWidth}
				data-color={processedColor}
				data-grow={grow}
				data-justify={justify}
				data-overflow={overflow}
				data-overflow-x={overflowX}
				data-overflow-y={overflowY}
				data-shrink={shrink}
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
