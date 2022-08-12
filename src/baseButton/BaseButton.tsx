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
	Distance,
	Height,
	JustifyContent,
	Overflow,
	Size,
	Width,
} from '../types';
import {
	getBorderRadius,
	getBorderWidth,
	ifNotUndefined,
	useColor,
	useDistance,
	useEasyFlexTheme,
	useSize,
} from '../utils';

const StyledBaseButton = styled.button<{
	'data-align'?: AlignItems;
	'data-align-self'?: AlignSelf;
	'data-background-color': CssColor;
	'data-border-color'?: CssColor;
	'data-border-radius'?: AbsoluteSize;
	'data-border-style'?: 'solid';
	'data-border-width'?: AbsoluteSize;
	'data-color'?: CssColor;
	'data-grow'?: number;
	'data-height'?: Size;
	'data-height-max'?: Size;
	'data-height-min'?: Size;
	'data-justify'?: JustifyContent;
	'data-margin-bottom': AbsoluteSize;
	'data-margin-left': AbsoluteSize;
	'data-margin-right': AbsoluteSize;
	'data-margin-top': AbsoluteSize;
	'data-overflow'?: Overflow;
	'data-overflow-x'?: Overflow;
	'data-overflow-y'?: Overflow;
	'data-padding-bottom': AbsoluteSize;
	'data-padding-left': AbsoluteSize;
	'data-padding-right': AbsoluteSize;
	'data-padding-top': AbsoluteSize;
	'data-shrink'?: number;
	'data-width'?: Size;
	'data-width-max'?: Size;
	'data-width-min'?: Size;
}>`
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
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
	overflow: ${({ 'data-overflow': overflow }) => overflow};
	overflow-x: ${({ 'data-overflow-x': overflowX }) => overflowX};
	overflow-y: ${({ 'data-overflow-y': overflowY }) => overflowY};
	padding-bottom: ${({ 'data-padding-bottom': paddingBottom }) => paddingBottom};
	padding-left: ${({ 'data-padding-left': paddingLeft }) => paddingLeft};
	padding-right: ${({ 'data-padding-right': paddingRight }) => paddingRight};
	padding-top: ${({ 'data-padding-top': paddingTop }) => paddingTop};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width-max': widthMax }) => widthMax};
	min-width: ${({ 'data-width-min': widthMin }) => widthMin};

	&:disabled {
		cursor: not-allowed;
	}

	&:focus:not(:focus-visible) {
		outline: 0;
	}
`;

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
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
	/** Sets the component's height to 100% if true. */
	fullHeight?: boolean;
	/** Sets the component's width to 100% if true. */
	fullWidth?: boolean;
	/** Component's flex grow. */
	grow?: number;
	/** Component's height. */
	height?: Height | Size;
	/** Sets how the browser distributes space between and around the component's children along the main axis. */
	justify?: JustifyContent;
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
	/** Component's maximum height. */
	maxHeight?: Height | Size;
	/** Component's maximum width. */
	maxWidth?: Width | Size;
	/** Component's miniumum height. */
	minHeight?: Height | Size;
	/** Component's minimum width. */
	minWidth?: Width | Size;
	/** Component's overflow behaviour. */
	overflow?: Overflow;
	/** Component's verflow behaviour on left and right edges. */
	overflowX?: Overflow;
	/** Component's overflow behaviour on top and bottom edges. */
	overflowY?: Overflow;
	/** Padding of all sides. */
	/** Component's padding of all sides. */
	padding?: Distance | AbsoluteSize;
	/** Component's bottom padding. */
	paddingBottom?: Distance | AbsoluteSize;
	/** Component's left padding. */
	paddingLeft?: Distance | AbsoluteSize;
	/** Component's right padding. */
	paddingRight?: Distance | AbsoluteSize;
	/** Component's top padding. */
	paddingTop?: Distance | AbsoluteSize;
	/** Component's left and right padding. */
	paddingHorizontal?: Distance | AbsoluteSize;
	/** Component's top and bottom padding. */
	paddingVertical?: Distance | AbsoluteSize;
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
			fullHeight = false,
			fullWidth = false,
			grow,
			height,
			justify,
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

		const distance = useDistance({
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

		const size = useSize({
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
				data-height={size.height}
				data-height-max={size.heightMax}
				data-height-min={size.heightMin}
				data-justify={justify}
				data-margin-bottom={distance.margin.bottom}
				data-margin-left={distance.margin.left}
				data-margin-right={distance.margin.right}
				data-margin-top={distance.margin.top}
				data-overflow={overflow}
				data-overflow-x={overflowX}
				data-overflow-y={overflowY}
				data-padding-bottom={distance.padding.bottom}
				data-padding-left={distance.padding.left}
				data-padding-right={distance.padding.right}
				data-padding-top={distance.padding.top}
				data-shrink={shrink}
				data-width={size.width}
				data-width-max={size.widthMax}
				data-width-min={size.widthMin}
				ref={ref}
				{...props}
			>
				{children}
			</StyledBaseButton>
		);
	}
);

BaseButton.displayName = 'BaseButton';
