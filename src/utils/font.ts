import { useMemo } from 'react';
import { css } from 'styled-components';
import {
	Color,
	CssColor,
	CssFontWeight,
	CssLineHeight,
	FontFamily,
	FontSize,
	FontStyle,
	FontWeight,
	LineHeight,
	Size,
	TextDecoration,
} from '../types';
import { getFontSize, getFontWeight, getLineHeight, ifNotUndefined, useEasyFlexTheme } from './base';
import { useColor } from './color';

export interface FontProps {
	fontFamily?: FontFamily;
	/** Component's font size. */
	fontSize?: FontSize | Size;
	/** Component's font weight. */
	fontWeight?: FontWeight | number;
	/** If true, the text style is set to italic. */
	italic?: boolean;
	lineHeight?: CssLineHeight | LineHeight;
	underline?: boolean;
	underlineColor?: Color;
}

export interface FontStyleProps {
	'data-font-family'?: string;
	'data-font-size'?: Size;
	'data-font-weight'?: CssFontWeight | number;
	'data-font-style'?: FontStyle;
	'data-line-height'?: CssLineHeight;
	'data-text-decoration'?: TextDecoration;
	'data-text-decoration-color'?: CssColor;
}

export const useFont = ({
	fontFamily,
	fontSize,
	fontWeight,
	italic,
	lineHeight,
	underline,
	underlineColor,
}: FontProps): {
	family: string | undefined;
	size: Size | undefined;
	weight: number | CssFontWeight | undefined;
	style: FontStyle | undefined;
	lineHeight: CssLineHeight | undefined;
	textDecoration: TextDecoration | undefined;
	textDecorationColor: CssColor | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedFontFamily = useMemo<string | undefined>(
		() => ifNotUndefined(fontFamily, (fontFamily) => theme.font.family[fontFamily]),
		[fontFamily, theme]
	);

	const processedFontSize = useMemo<Size | undefined>(
		() => ifNotUndefined(fontSize, (fontSize) => getFontSize(theme, fontSize)),
		[fontSize, theme]
	);

	const processedFontWeight = useMemo<CssFontWeight | number | undefined>(
		() => ifNotUndefined(fontWeight, (fontWeight) => getFontWeight(theme, fontWeight)),
		[fontWeight, theme]
	);

	const processedItalic = useMemo<FontStyle | undefined>(
		() => ifNotUndefined(italic, (italic) => (italic ? 'italic' : 'normal')),
		[italic]
	);

	const processedLineHeight = useMemo<CssLineHeight | undefined>(
		() => ifNotUndefined(lineHeight, (lineHeight) => getLineHeight(theme, lineHeight)),
		[lineHeight, theme]
	);

	const processedUnderline = useMemo<TextDecoration | undefined>(
		() => ifNotUndefined(underline, (underline) => (underline ? 'underline' : 'none')),
		[underline]
	);

	const processedUnderlineColor = useColor(underlineColor);

	return useMemo<{
		family: string | undefined;
		size: Size | undefined;
		weight: number | CssFontWeight | undefined;
		style: FontStyle | undefined;
		lineHeight: CssLineHeight | undefined;
		textDecoration: TextDecoration | undefined;
		textDecorationColor: CssColor | undefined;
	}>(
		() => ({
			family: processedFontFamily,
			size: processedFontSize,
			weight: processedFontWeight,
			style: processedItalic,
			lineHeight: processedLineHeight,
			textDecoration: processedUnderline,
			textDecorationColor: processedUnderlineColor,
		}),
		[
			processedFontFamily,
			processedFontSize,
			processedFontWeight,
			processedItalic,
			processedLineHeight,
			processedUnderline,
			processedUnderlineColor,
		]
	);
};

export const useFontStyleProps = (props: FontProps): FontStyleProps => {
	const font = useFont(props);

	return useMemo<FontStyleProps>(
		() => ({
			'data-font-family': font.family,
			'data-font-size': font.size,
			'data-font-weight': font.weight,
			'data-font-style': font.style,
			'data-line-height': font.lineHeight,
			'data-text-decoration': font.textDecoration,
			'data-text-decoration-color': font.textDecorationColor,
		}),
		[font]
	);
};

export const fontStyle = css<FontStyleProps>`
	font-family: ${({ 'data-font-family': fontFamily }) => fontFamily};
	font-size: ${({ 'data-font-size': fontSize }) => fontSize};
	font-weight: ${({ 'data-font-weight': fontWeight }) => fontWeight};
	font-style: ${({ 'data-font-style': fontStyle }) => fontStyle};
	line-height: ${({ 'data-line-height': lineHeight }) => lineHeight};
	text-decoration: ${({ 'data-text-decoration': textDecoration }) => textDecoration};
	text-decoration-color: ${({ 'data-text-decoration-color': textDecorationColor }) => textDecorationColor};
`;
