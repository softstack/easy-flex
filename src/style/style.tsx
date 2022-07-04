import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import { IColor, IFontSize, IFontStyle, IFontWeight } from '../types';
import { getColor, getFontSize, getFontWeight, toPx, toRem, useEasyFlexTheme } from '../utils';

const StyledStyle = styled.span<{
	'data-background-color'?: string;
	'data-color'?: string;
	'data-font-size'?: string;
	'data-font-weight'?: string | number;
	'data-font-style'?: IFontStyle;
}>`
	display: flex;
	box-sizing: border-box;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	font-size: ${({ 'data-font-size': fontSize }) => fontSize};
	font-weight: ${({ 'data-font-weight': fontWeight }) => fontWeight};
	font-style: ${({ 'data-font-style': fontStyle }) => fontStyle};
`;

export interface IStyleProps extends HTMLAttributes<HTMLSpanElement> {
	backgroundColor?: IColor;
	color?: IColor;
	fontSize?: number | IFontSize;
	fontWeight?: number | IFontWeight;
	italic?: boolean;
}

export const Style: FC<IStyleProps> = ({ backgroundColor, color, fontSize, fontWeight, italic, children }) => {
	const theme = useEasyFlexTheme();

	const processedBackgroundColor = useMemo<string | undefined>(
		() => (backgroundColor === undefined ? undefined : getColor(theme, backgroundColor)),
		[backgroundColor, theme]
	);

	const processedColor = useMemo<string | undefined>(
		() => (color === undefined ? undefined : getColor(theme, color)),
		[color, theme]
	);

	const processedFontSize = useMemo<string | undefined>(() => {
		if (fontSize === undefined) {
			return fontSize;
		}
		const fontSizeValue = getFontSize(theme, fontSize);
		if (theme.fontSizeType === 'rem') {
			return toRem(fontSizeValue);
		}
		return toPx(fontSizeValue);
	}, [fontSize, theme]);

	const processedFontWeight = useMemo<string | number | undefined>(
		() => (fontWeight === undefined ? undefined : getFontWeight(theme, fontWeight)),
		[fontWeight, theme]
	);

	const fontStyle = useMemo<IFontStyle | undefined>(
		() => (italic === undefined ? undefined : italic ? 'italic' : 'normal'),
		[italic]
	);

	return (
		<StyledStyle
			data-background-color={processedBackgroundColor}
			data-color={processedColor}
			data-font-size={processedFontSize}
			data-font-weight={processedFontWeight}
			data-font-wtyle={fontStyle}
		>
			{children}
		</StyledStyle>
	);
};
