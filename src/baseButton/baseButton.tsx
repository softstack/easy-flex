import React, { ButtonHTMLAttributes, FC, useMemo } from 'react';
import styled from 'styled-components';
import {
	IAlignItems,
	IAlignSelf,
	IBorderRadius,
	IBorderWidth,
	IColor,
	IDistance,
	IHeight,
	IJustifyContent,
	IWidth,
} from '../types';
import {
	getBorderRadius,
	getBorderWidth,
	ifNotUndefined,
	toPx,
	useColor,
	useDistance,
	useEasyFlexTheme,
	useSize,
} from '../utils';

const StyledBaseButton = styled.button<{
	'data-align'?: IAlignItems;
	'data-align-self'?: IAlignSelf;
	'data-background-color': string;
	'data-border-color'?: string;
	'data-border-radius'?: string;
	'data-border-style'?: 'solid';
	'data-border-width'?: string;
	'data-color'?: string;
	'data-grow'?: number;
	'data-height'?: string;
	'data-height-max'?: string;
	'data-height-min'?: string;
	'data-justify'?: IJustifyContent;
	'data-margin-bottom': string;
	'data-margin-left': string;
	'data-margin-right': string;
	'data-margin-top': string;
	'data-padding-bottom': string;
	'data-padding-left': string;
	'data-padding-right': string;
	'data-padding-top': string;
	'data-shrink'?: number;
	'data-width'?: string;
	'data-width-max'?: string;
	'data-width-min'?: string;
}>`
	display: flex;
	box-sizing: border-box;
	flex-direction: row;
	border: none;
	cursor: pointer;
	outline: none;
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
	padding-bottom: ${({ 'data-padding-bottom': paddingBottom }) => paddingBottom};
	padding-left: ${({ 'data-padding-left': paddingLeft }) => paddingLeft};
	padding-right: ${({ 'data-padding-right': paddingRight }) => paddingRight};
	padding-top: ${({ 'data-padding-top': paddingTop }) => paddingTop};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width-max': widthMax }) => widthMax};
	min-width: ${({ 'data-width-min': widthMin }) => widthMin};
`;

export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/** The alignment of the component's children on the cross axis. */
	align?: IAlignItems;
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: IAlignSelf;
	/** Component's background color. */
	backgroundColor?: IColor;
	/** Component's border color. */
	borderColor?: IColor;
	/** Component's border radius. */
	borderRadius?: IBorderRadius | number;
	/** Component's border width. */
	borderWidth?: IBorderWidth | number;
	/** Component's color. */
	color?: IColor;
	/** Sets the component's height to 100% if true. */
	fullHeight?: boolean;
	/** Sets the component's width to 100% if true. */
	fullWidth?: boolean;
	/** Component's flex grow. */
	grow?: number;
	/** Component's height. */
	height?: IHeight | number;
	/** Sets how the browser distributes space between and around the component's children along the main axis. */
	justify?: IJustifyContent;
	/** Component's margin of all sides. */
	margin?: IDistance | number;
	/** Component's bottom margin. */
	marginBottom?: IDistance | number;
	/** Component's left margin. */
	marginLeft?: IDistance | number;
	/** Component's right margin. */
	marginRight?: IDistance | number;
	/** Component's top margin. */
	marginTop?: IDistance | number;
	/** Component's left and right margin. */
	marginX?: IDistance | number;
	/** Component's top and bottom margin. */
	marginY?: IDistance | number;
	/** Component's maximum height. */
	maxHeight?: IHeight | number;
	/** Component's maximum width. */
	maxWidth?: IWidth | number;
	/** Component's miniumum height. */
	minHeight?: IHeight | number;
	/** Component's minimum width. */
	minWidth?: IWidth | number;
	/** Component's padding of all sides. */
	padding?: IDistance | number;
	/** Component's bottom padding. */
	paddingBottom?: IDistance | number;
	/** Component's left padding. */
	paddingLeft?: IDistance | number;
	/** Component's right padding. */
	paddingRight?: IDistance | number;
	/** Component's top padding. */
	paddingTop?: IDistance | number;
	/** Component's left and right padding. */
	paddingX?: IDistance | number;
	/** Component's top and bottom padding. */
	paddingY?: IDistance | number;
	/** Component's flex shrink. */
	shrink?: number;
	/** Component's width. */
	width?: IWidth | number;
}

export type IExternalBaseButtonProps = Omit<
	IBaseButtonProps,
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
	| 'paddingX'
	| 'paddingY'
>;

export const BaseButton: FC<IBaseButtonProps> = ({
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
	marginX,
	marginY,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
	shrink,
	width,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const processedBackgroundColor = useColor(backgroundColor, 'transparent');

	const processedBorderColor = useColor(borderColor, undefined);

	const processedBorderRadius = useMemo<string | undefined>(
		() => ifNotUndefined(borderRadius, (borderRadius) => toPx(getBorderRadius(theme, borderRadius))),
		[borderRadius, theme]
	);

	const processedBorderStyle = useMemo<'solid' | undefined>(() => (borderWidth ? 'solid' : undefined), [borderWidth]);

	const processedBorderWidth = useMemo<string | undefined>(
		() => ifNotUndefined(borderWidth, (borderWidth) => toPx(getBorderWidth(theme, borderWidth))),
		[borderWidth, theme]
	);

	const processedColor = useColor(color, undefined);

	const distance = useDistance({
		margin,
		marginBottom,
		marginLeft,
		marginRight,
		marginTop,
		marginX,
		marginY,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingX,
		paddingY,
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
			data-padding-bottom={distance.padding.bottom}
			data-padding-left={distance.padding.left}
			data-padding-right={distance.padding.right}
			data-padding-top={distance.padding.top}
			data-shrink={shrink}
			data-width={size.width}
			data-width-max={size.widthMax}
			data-width-min={size.widthMin}
			{...props}
		>
			{children}
		</StyledBaseButton>
	);
};
