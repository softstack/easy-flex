import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
	IAlignSelf,
	IColor,
	IDistance,
	IFontSize,
	IFontStyle,
	IFontWeight,
	ITextAlign,
	ITextElement,
	IWordBreak,
} from '../types';
import { getColor, getDistance, getFontSize, getFontWeight, toPx, toRem, useEasyFlexTheme } from '../utils';

const style = css<{
	'data-align'?: ITextAlign;
	'data-align-self'?: IAlignSelf;
	'data-color'?: string;
	'data-font-size': string;
	'data-font-weight': string | number;
	'data-full-width'?: '100%';
	'data-horizontal-margin': string;
	'data-horizontal-padding': string;
	'data-font-style'?: IFontStyle;
	'data-vertical-margin': string;
	'data-vertical-padding': string;
	'data-word-break'?: IWordBreak;
}>`
	display: flex;
	box-sizing: border-box;
	text-align: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	font-size: ${({ 'data-font-size': fontSize }) => fontSize};
	font-weight: ${({ 'data-font-weight': fontWeight }) => fontWeight};
	width: ${({ 'data-full-width': fullWidth }) => fullWidth};
	margin-left: ${({ 'data-horizontal-margin': horizontalMargin }) => horizontalMargin};
	margin-right: ${({ 'data-horizontal-margin': horizontalMargin }) => horizontalMargin};
	padding-left: ${({ 'data-horizontal-padding': horizontalPadding }) => horizontalPadding};
	padding-right: ${({ 'data-horizontal-padding': horizontalPadding }) => horizontalPadding};
	font-style: ${({ 'data-font-style': fontStyle }) => fontStyle};
	margin-top: ${({ 'data-vertical-margin': verticalMargin }) => verticalMargin};
	margin-bottom: ${({ 'data-vertical-margin': verticalMargin }) => verticalMargin};
	padding-top: ${({ 'data-vertical-padding': verticalPadding }) => verticalPadding};
	padding-bottom: ${({ 'data-vertical-padding': verticalPadding }) => verticalPadding};
	word-break: ${({ 'data-word-break': wordBreak }) => wordBreak};
`;

const H1 = styled.h1`
	${style}
`;

const H2 = styled.h2`
	${style}
`;

const H3 = styled.h3`
	${style}
`;

const H4 = styled.h4`
	${style}
`;

const H5 = styled.h5`
	${style}
`;

const H6 = styled.h6`
	${style}
`;

const P = styled.p`
	${style}
`;

export interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
	align?: ITextAlign;
	alignSelf?: IAlignSelf;
	color?: IColor;
	element?: ITextElement;
	fontSize?: number | IFontSize;
	fontWeight?: number | IFontWeight;
	fullWidth?: boolean;
	horizontalMargin?: IDistance | number;
	horizontalPadding?: IDistance | number;
	italic?: boolean;
	verticalMargin?: IDistance | number;
	verticalPadding?: IDistance | number;
	wordBreak?: IWordBreak;
}

export const Text: FC<ITextProps> = ({
	align,
	alignSelf,
	children,
	color = 'primaryText',
	element = 'p',
	fontSize = 'm',
	fontWeight = 'normal',
	fullWidth,
	horizontalMargin = 0,
	horizontalPadding = 0,
	italic,
	verticalMargin = 0,
	verticalPadding = 0,
	wordBreak,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const processedColor = useMemo<string>(() => getColor(theme, color), [color, theme]);

	const processedFontSize = useMemo<string>(() => {
		const fontSizeValue = getFontSize(theme, fontSize);
		if (theme.fontSizeType === 'rem') {
			return toRem(fontSizeValue);
		}
		return toPx(fontSizeValue);
	}, [fontSize, theme]);

	const processedFontWeight = useMemo<string | number>(() => getFontWeight(theme, fontWeight), [fontWeight, theme]);

	const processedFullWidth = useMemo<'100%' | undefined>(() => (fullWidth ? '100%' : undefined), [fullWidth]);

	const processedHorizontalMargin = useMemo<string>(
		() => toPx(getDistance(theme, horizontalMargin)),
		[horizontalMargin, theme]
	);

	const processedHorizontalPadding = useMemo<string>(
		() => toPx(getDistance(theme, horizontalPadding)),
		[horizontalPadding, theme]
	);

	const fontStyle = useMemo<IFontStyle | undefined>(
		() => (italic === undefined ? undefined : italic ? 'italic' : 'normal'),
		[italic]
	);

	const processedVerticalMargin = useMemo<string>(
		() => toPx(getDistance(theme, verticalMargin)),
		[theme, verticalMargin]
	);

	const processedVerticalPadding = useMemo<string>(
		() => toPx(getDistance(theme, verticalPadding)),
		[theme, verticalPadding]
	);

	const Element = useMemo(() => {
		switch (element) {
			case 'h1':
				return H1;
			case 'h2':
				return H2;
			case 'h3':
				return H3;
			case 'h4':
				return H4;
			case 'h5':
				return H5;
			case 'h6':
				return H6;
			case 'p':
				return P;
		}
	}, [element]);

	return (
		<Element
			data-align={align}
			data-align-self={alignSelf}
			data-color={processedColor}
			data-font-size={processedFontSize}
			data-font-weight={processedFontWeight}
			data-full-width={processedFullWidth}
			data-horizontal-margin={processedHorizontalMargin}
			data-horizontal-padding={processedHorizontalPadding}
			data-font-style={fontStyle}
			data-vertical-margin={processedVerticalMargin}
			data-vertical-padding={processedVerticalPadding}
			data-word-break={wordBreak}
			{...props}
		>
			{children}
		</Element>
	);
};
