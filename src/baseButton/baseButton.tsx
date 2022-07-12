import React, { ButtonHTMLAttributes, FC, useMemo } from 'react';
import styled from 'styled-components';
import { IAlignItems, IAlignSelf, IBorderRadius, IBorderWidth, IColor, IDistance, IJustifyContent } from '../types';
import {
	getBorderRadius,
	getBorderWidth,
	ifNotUndefined,
	toPx,
	useColor,
	useDistance,
	useEasyFlexTheme,
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
	'data-full-width'?: '100%';
	'data-grow'?: number;
	'data-justify'?: IJustifyContent;
	'data-margin-bottom'?: string;
	'data-margin-left'?: string;
	'data-margin-right'?: string;
	'data-margin-top'?: string;
	'data-padding-bottom'?: string;
	'data-padding-left'?: string;
	'data-padding-right'?: string;
	'data-padding-top'?: string;
	'data-shrink'?: number;
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
	width: ${({ 'data-full-width': fullWidth }) => fullWidth};
	flex-grow: ${({ 'data-grow': grow }) => grow};
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
`;

export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	align?: IAlignItems;
	alignSelf?: IAlignSelf;
	backgroundColor?: IColor;
	borderColor?: IColor;
	borderRadius?: IBorderRadius | number;
	borderWidth?: IBorderWidth | number;
	color?: IColor;
	fullWidth?: boolean;
	grow?: number;
	justify?: IJustifyContent;
	marginBottom?: IDistance | number;
	marginLeft?: IDistance | number;
	marginRight?: IDistance | number;
	marginTop?: IDistance | number;
	marginX?: IDistance | number;
	marginY?: IDistance | number;
	paddingBottom?: IDistance | number;
	paddingLeft?: IDistance | number;
	paddingRight?: IDistance | number;
	paddingTop?: IDistance | number;
	paddingX?: IDistance | number;
	paddingY?: IDistance | number;
	shrink?: number;
}

export type IExternalBaseButtonProps = Omit<
	IBaseButtonProps,
	| 'align'
	| 'backgroundColor'
	| 'color'
	| 'justify'
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
	fullWidth = false,
	grow,
	justify,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginX,
	marginY,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
	shrink,
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

	const processedFullWidth = useMemo<'100%' | undefined>(() => (fullWidth ? '100%' : undefined), [fullWidth]);

	const { margin, padding } = useDistance({
		marginBottom,
		marginLeft,
		marginRight,
		marginTop,
		marginX,
		marginY,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingX,
		paddingY,
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
			data-full-width={processedFullWidth}
			data-grow={grow}
			data-justify={justify}
			data-margin-bottom={margin.bottom}
			data-margin-left={margin.left}
			data-margin-right={margin.right}
			data-margin-top={margin.top}
			data-padding-bottom={padding.bottom}
			data-padding-left={padding.left}
			data-padding-right={padding.right}
			data-padding-top={padding.top}
			data-shrink={shrink}
			{...props}
		>
			{children}
		</StyledBaseButton>
	);
};
