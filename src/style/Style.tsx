import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
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
	StyleElement,
} from '../types';
import { getFontSize, getFontWeight, getLineHeight, ifNotUndefined, useColor, useEasyFlexTheme } from '../utils';

const style = css<{
	'data-background-color'?: CssColor;
	'data-color'?: CssColor;
	'data-font-family'?: string;
	'data-font-size'?: Size;
	'data-font-weight'?: CssFontWeight | number;
	'data-font-style'?: FontStyle;
	'data-line-height'?: CssLineHeight;
}>`
	box-sizing: border-box;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	font-family: ${({ 'data-font-family': fontFamily }) => fontFamily};
	font-size: ${({ 'data-font-size': fontSize }) => fontSize};
	font-weight: ${({ 'data-font-weight': fontWeight }) => fontWeight};
	font-style: ${({ 'data-font-style': fontStyle }) => fontStyle};
	line-height: ${({ 'data-line-height': lineHeight }) => lineHeight};
`;

const B = styled.b`
	${style}
`;

const Cite = styled.cite`
	${style}
`;

const Code = styled.code`
	${style}
`;

const Em = styled.em`
	${style}
`;

const I = styled.i`
	${style}
`;

const Kbd = styled.kbd`
	${style}
`;

const Mark = styled.mark`
	${style}
`;

const S = styled.s`
	${style}
`;

const Samp = styled.samp`
	${style}
`;

const Small = styled.small`
	${style}
`;

const Span = styled.span`
	${style}
`;

const Strong = styled.strong`
	${style}
`;

const Sub = styled.sub`
	${style}
`;

const Sup = styled.sup`
	${style}
`;

const U = styled.u`
	${style}
`;

const Var = styled.var`
	${style}
`;

export interface StyleProps extends HTMLAttributes<HTMLSpanElement> {
	/** Component's background color. */
	backgroundColor?: Color;
	/** Component's color. */
	color?: Color;
	/** Component's html tag. */
	element?: StyleElement;
	fontFamily?: FontFamily;
	/** Component's font size. */
	fontSize?: FontSize | Size;
	/** Component's font weight. */
	fontWeight?: FontWeight | number;
	/** If true, the text style is set to italic. */
	italic?: boolean;
	lineHeight?: CssLineHeight | LineHeight;
}

export const Style: FC<StyleProps> = ({
	backgroundColor,
	children,
	color,
	element = 'span',
	fontFamily,
	fontSize,
	fontWeight,
	italic,
	lineHeight,
}) => {
	const theme = useEasyFlexTheme();

	const processedBackgroundColor = useColor(backgroundColor, undefined);

	const processedColor = useColor(color, undefined);

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

	const fontStyle = useMemo<FontStyle | undefined>(
		() => ifNotUndefined(italic, (italic) => (italic ? 'italic' : 'normal')),
		[italic]
	);

	const processedLineHeight = useMemo<CssLineHeight | undefined>(
		() => ifNotUndefined(lineHeight, (lineHeight) => getLineHeight(theme, lineHeight)),
		[lineHeight, theme]
	);

	const Element = useMemo(() => {
		switch (element) {
			case 'b':
				return B;
			case 'cite':
				return Cite;
			case 'code':
				return Code;
			case 'em':
				return Em;
			case 'i':
				return I;
			case 'kbd':
				return Kbd;
			case 'mark':
				return Mark;
			case 's':
				return S;
			case 'samp':
				return Samp;
			case 'small':
				return Small;
			case 'span':
				return Span;
			case 'strong':
				return Strong;
			case 'sub':
				return Sub;
			case 'sup':
				return Sup;
			case 'u':
				return U;
			case 'var':
				return Var;
		}
	}, [element]);

	return (
		<Element
			data-background-color={processedBackgroundColor}
			data-color={processedColor}
			data-font-family={processedFontFamily}
			data-font-size={processedFontSize}
			data-font-weight={processedFontWeight}
			data-font-wtyle={fontStyle}
			data-line-height={processedLineHeight}
		>
			{children}
		</Element>
	);
};
