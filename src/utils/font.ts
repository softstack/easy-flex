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
	WhiteSpace,
	WordBreak
} from '../types';
import { getFontSize, getFontWeight, getLineHeight, ifNotUndefined, useEasyFlexTheme } from './base';
import { useColor } from './color';

export interface FontProps {
	fontFamily?: FontFamily;
	/** Component's font size. */
	fontSize?: FontSize;
	/** Component's font weight. */
	fontWeight?: FontWeight;
	/** If true, the text style is set to italic. */
	italic?: boolean;
	lineHeight?: LineHeight;
	underline?: boolean;
	underlineColor?: Color;
	whiteSpace?: WhiteSpace;
	/** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
	wordBreak?: WordBreak;
}

export interface FontStyleProps {
	'data-font-family'?: string;
	'data-font-size'?: Size;
	'data-font-weight'?: CssFontWeight;
	'data-font-style'?: FontStyle;
	'data-line-height'?: CssLineHeight;
	'data-text-decoration'?: TextDecoration;
	'data-text-decoration-color'?: CssColor;
	'data-white-space'?: WhiteSpace;
	'data-word-break'?: WordBreak;
}

export const useFont = ({
	fontFamily,
	fontSize,
	fontWeight,
	italic,
	lineHeight,
	underline,
	underlineColor,
	whiteSpace,
	wordBreak,
}: FontProps): {
	family: string | undefined;
	size: Size | undefined;
	weight: CssFontWeight | undefined;
	style: FontStyle | undefined;
	lineHeight: CssLineHeight | undefined;
	textDecoration: TextDecoration | undefined;
	textDecorationColor: CssColor | undefined;
	whiteSpace: WhiteSpace | undefined;
	wordBreak: WordBreak | undefined;
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

	const processedFontWeight = useMemo<CssFontWeight | undefined>(
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
		weight: CssFontWeight | undefined;
		style: FontStyle | undefined;
		lineHeight: CssLineHeight | undefined;
		textDecoration: TextDecoration | undefined;
		textDecorationColor: CssColor | undefined;
		whiteSpace: WhiteSpace | undefined;
		wordBreak: WordBreak | undefined;
	}>(
		() => ({
			family: processedFontFamily,
			size: processedFontSize,
			weight: processedFontWeight,
			style: processedItalic,
			lineHeight: processedLineHeight,
			textDecoration: processedUnderline,
			textDecorationColor: processedUnderlineColor,
			whiteSpace,
			wordBreak,
		}),
		[
			processedFontFamily,
			processedFontSize,
			processedFontWeight,
			processedItalic,
			processedLineHeight,
			processedUnderline,
			processedUnderlineColor,
			whiteSpace,
			wordBreak,
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
			'data-white-space':font.whiteSpace,
			'data-word-break': font.wordBreak,
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
	white-space: ${({ 'data-white-space': whiteSpace }) => whiteSpace};
	word-break: ${({ 'data-word-break': wordBreak }) => wordBreak};
`;
