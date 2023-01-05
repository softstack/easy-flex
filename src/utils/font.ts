import { useMemo } from 'react';
import { css } from 'styled-components';
import {
	Color,
	CssColor,
	CssFontWeight,
	CssLineHeight,
	CustomName,
	ExtSize,
	Falsifiable,
	FontFamily,
	FontSize,
	FontStyle,
	FontWeight,
	LineHeight,
	TextDecoration,
	WhiteSpace,
	WordBreak,
} from '../types';
import { getFontSize, getFontWeight, getLineHeight, ifDefined, useEasyFlexTheme } from './base';
import { useColor } from './color';

export interface FontProps<
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomLineHeight extends CustomName
> {
	fontFamily?: Falsifiable<FontFamily<CustomFontFamily>>;
	/** Component's font size. */
	fontSize?: Falsifiable<FontSize<CustomFontSize>>;
	/** Component's font weight. */
	fontWeight?: Falsifiable<FontWeight<CustomFontWeight>>;
	/** If true, the text style is set to italic. */
	italic?: boolean;
	lineHeight?: Falsifiable<LineHeight<CustomLineHeight>>;
	underline?: boolean;
	underlineColor?: Falsifiable<Color<CustomColor>>;
	whiteSpace?: Falsifiable<WhiteSpace>;
	/** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
	wordBreak?: Falsifiable<WordBreak>;
}

export interface FontStyleProps {
	'data-font-family': string | undefined;
	'data-font-size': ExtSize | undefined;
	'data-font-weight': CssFontWeight | undefined;
	'data-font-style': FontStyle | undefined;
	'data-line-height': CssLineHeight | undefined;
	'data-text-decoration': TextDecoration | undefined;
	'data-text-decoration-color': CssColor | undefined;
	'data-white-space': Falsifiable<WhiteSpace> | undefined;
	'data-word-break': Falsifiable<WordBreak> | undefined;
}

export const useFont = <
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomLineHeight extends CustomName
>({
	fontFamily,
	fontSize,
	fontWeight,
	italic,
	lineHeight,
	underline,
	underlineColor,
	whiteSpace,
	wordBreak,
}: FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>): {
	family: string | undefined;
	size: ExtSize | undefined;
	weight: CssFontWeight | undefined;
	style: FontStyle | undefined;
	lineHeight: CssLineHeight | undefined;
	textDecoration: TextDecoration | undefined;
	textDecorationColor: CssColor | undefined;
	whiteSpace: Falsifiable<WhiteSpace> | undefined;
	wordBreak: Falsifiable<WordBreak> | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedFontFamily = useMemo<string | undefined>(
		() => ifDefined(fontFamily, (fontFamily) => theme.font.family[fontFamily]),
		[fontFamily, theme]
	);

	const processedFontSize = useMemo<ExtSize | undefined>(
		() => ifDefined(fontSize, (fontSize) => getFontSize(theme, fontSize)),
		[fontSize, theme]
	);

	const processedFontWeight = useMemo<CssFontWeight | undefined>(
		() => ifDefined(fontWeight, (fontWeight) => getFontWeight(theme, fontWeight)),
		[fontWeight, theme]
	);

	const processedItalic = useMemo<FontStyle | undefined>(
		() => ifDefined(italic, (italic) => (italic ? 'italic' : 'normal')),
		[italic]
	);

	const processedLineHeight = useMemo<CssLineHeight | undefined>(
		() => ifDefined(lineHeight, (lineHeight) => getLineHeight(theme, lineHeight)),
		[lineHeight, theme]
	);

	const processedUnderline = useMemo<TextDecoration | undefined>(
		() => ifDefined(underline, (underline) => (underline ? 'underline' : 'none')),
		[underline]
	);

	const processedUnderlineColor = useColor(underlineColor);

	return useMemo<{
		family: string | undefined;
		size: ExtSize | undefined;
		weight: CssFontWeight | undefined;
		style: FontStyle | undefined;
		lineHeight: CssLineHeight | undefined;
		textDecoration: TextDecoration | undefined;
		textDecorationColor: CssColor | undefined;
		whiteSpace: Falsifiable<WhiteSpace> | undefined;
		wordBreak: Falsifiable<WordBreak> | undefined;
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

export const useFontStyleProps = <
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomLineHeight extends CustomName
>(
	props: FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>
): FontStyleProps => {
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
			'data-white-space': font.whiteSpace,
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
