import React, { ButtonHTMLAttributes, FC, useMemo } from 'react';
import styled from 'styled-components';
import { IAlignItems, IAlignSelf, IColor, IDistance, IJustifyContent } from '../types';
import { getColor, getDistance, toPx, useEasyFlexTheme } from '../utils';

const StyledBaseButton = styled.button<{
	'data-align'?: IAlignItems;
	'data-align-self'?: IAlignSelf;
	'data-background-color': string;
	'data-color'?: string;
	'data-full-width'?: '100%';
	'data-grow'?: number;
	'data-horizontal-margin': string;
	'data-horizontal-padding': string;
	'data-justify'?: IJustifyContent;
	'data-shrink'?: number;
	'data-vertical-margin': string;
	'data-vertical-padding': string;
}>`
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	border: none;
	cursor: pointer;
	outline: none;
	align-items: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	width: ${({ 'data-full-width': fullWidth }) => fullWidth};
	flex-grow: ${({ 'data-grow': grow }) => grow};
	margin-left: ${({ 'data-horizontal-margin': horizontalMargin }) => horizontalMargin};
	margin-right: ${({ 'data-horizontal-margin': horizontalMargin }) => horizontalMargin};
	padding-left: ${({ 'data-horizontal-padding': horizontalPadding }) => horizontalPadding};
	padding-right: ${({ 'data-horizontal-padding': horizontalPadding }) => horizontalPadding};
	justify-content: ${({ 'data-justify': justify }) => justify};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
	margin-top: ${({ 'data-vertical-margin': verticalMargin }) => verticalMargin};
	margin-bottom: ${({ 'data-vertical-margin': verticalMargin }) => verticalMargin};
	padding-top: ${({ 'data-vertical-padding': verticalPadding }) => verticalPadding};
	padding-bottom: ${({ 'data-vertical-padding': verticalPadding }) => verticalPadding};
`;

export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	align?: IAlignItems;
	alignSelf?: IAlignSelf;
	backgroundColor?: IColor;
	color?: IColor;
	fullWidth?: boolean;
	grow?: number;
	horizontalMargin?: IDistance | number;
	horizontalPadding?: IDistance | number;
	justify?: IJustifyContent;
	shrink?: number;
	verticalMargin?: IDistance | number;
	verticalPadding?: IDistance | number;
}

export type IExternalBaseButtonProps = Omit<
	IBaseButtonProps,
	'align' | 'backgroundColor' | 'color' | 'horizontalPadding' | 'verticalPadding' | 'justify'
>;

export const BaseButton: FC<IBaseButtonProps> = ({
	align,
	alignSelf,
	backgroundColor,
	children,
	color,
	fullWidth = false,
	grow,
	horizontalMargin = 0,
	horizontalPadding = 0,
	justify,
	shrink,
	verticalMargin = 0,
	verticalPadding = 0,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const processedBackgroundColor = useMemo<string>(
		() => (backgroundColor === undefined ? 'transparent' : getColor(theme, backgroundColor)),
		[theme, backgroundColor]
	);

	const processedColor = useMemo<string | undefined>(
		() => (color === undefined ? undefined : getColor(theme, color)),
		[theme, color]
	);

	const processedFullWidth = useMemo<'100%' | undefined>(() => (fullWidth ? '100%' : undefined), [fullWidth]);

	const processedHorizontalMargin = useMemo<string>(
		() => toPx(getDistance(theme, horizontalMargin)),
		[theme, horizontalMargin]
	);

	const processedHorizontalPadding = useMemo<string>(
		() => toPx(getDistance(theme, horizontalPadding)),
		[theme, horizontalPadding]
	);

	const processedVerticalMargin = useMemo<string>(
		() => toPx(getDistance(theme, verticalMargin)),
		[theme, verticalMargin]
	);

	const processedVerticalPadding = useMemo<string>(
		() => toPx(getDistance(theme, verticalPadding)),
		[theme, verticalPadding]
	);

	return (
		<StyledBaseButton
			data-align={align}
			data-align-self={alignSelf}
			data-background-color={processedBackgroundColor}
			data-color={processedColor}
			data-full-width={processedFullWidth}
			data-grow={grow}
			data-horizontal-margin={processedHorizontalMargin}
			data-horizontal-padding={processedHorizontalPadding}
			data-justify={justify}
			data-shrink={shrink}
			data-vertical-margin={processedVerticalMargin}
			data-vertical-padding={processedVerticalPadding}
			{...props}
		>
			{children}
		</StyledBaseButton>
	);
};
