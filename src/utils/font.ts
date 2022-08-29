import { useMemo } from 'react';
import { css } from 'styled-components';
import { CssFontWeight, CssLineHeight, FontFamily, FontSize, FontStyle, FontWeight, LineHeight, Size } from '../types';
import { useFont } from './utils';

export interface FontProps {
	fontFamily?: FontFamily;
	/** Component's font size. */
	fontSize?: FontSize | Size;
	/** Component's font weight. */
	fontWeight?: FontWeight | number;
	/** If true, the text style is set to italic. */
	italic?: boolean;
	lineHeight?: CssLineHeight | LineHeight;
}

export interface FontStyleProps {
	'data-font-family'?: string;
	'data-font-size'?: Size;
	'data-font-weight'?: CssFontWeight | number;
	'data-font-style'?: FontStyle;
	'data-line-height'?: CssLineHeight;
}

export const useFontStyleProps = (data: {
	fontFamily?: FontFamily;
	fontSize?: FontSize | Size;
	fontWeight?: FontWeight | number;
	italic?: boolean;
	lineHeight?: CssLineHeight | LineHeight;
}): FontStyleProps => {
	const font = useFont(data);

	return useMemo<FontStyleProps>(
		() => ({
			'data-font-family': font.family,
			'data-font-size': font.size,
			'data-font-weight': font.weight,
			'data-font-style': font.style,
			'data-line-height': font.lineHeight,
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
`;
