import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import { IColor, IFontSize, IFontStyle, IFontWeight } from '../types';
import { getColor, getFontSize, getFontWeight, toRem, useEasyFlexTheme } from '../utils';

const StyledStyle = styled.span<{
	'data-color'?: string;
	'data-font-size'?: string;
	'data-font-weight'?: string | number;
	'data-font-style'?: IFontStyle;
}>`
	color: ${({ 'data-color': color }) => color};
	font-size: ${({ 'data-font-size': fontSize }) => fontSize};
	font-weight: ${({ 'data-font-weight': fontWeight }) => fontWeight};
	font-style: ${({ 'data-font-style': fontStyle }) => fontStyle};
`;

export interface IStyleProps extends HTMLAttributes<HTMLSpanElement> {
	color?: IColor;
	fontSize?: number | IFontSize;
	fontWeight?: number | IFontWeight;
	italic?: boolean;
}

export const Style: FC<IStyleProps> = ({ color, fontSize, fontWeight, italic, children }) => {
	const theme = useEasyFlexTheme();

	const processedColor = useMemo<string | undefined>(
		() => (color === undefined ? undefined : getColor(theme, color)),
		[theme, color]
	);

	const processedFontSize = useMemo<string | undefined>(
		() => (fontSize === undefined ? undefined : toRem(getFontSize(theme, fontSize))),
		[theme, fontSize]
	);

	const processedFontWeight = useMemo<string | number | undefined>(
		() => (fontWeight === undefined ? undefined : getFontWeight(theme, fontWeight)),
		[theme, fontWeight]
	);

	const fontStyle = useMemo<IFontStyle | undefined>(
		() => (italic === undefined ? undefined : italic ? 'italic' : 'normal'),
		[italic]
	);

	return (
		<StyledStyle
			data-color={processedColor}
			data-font-size={processedFontSize}
			data-font-weight={processedFontWeight}
			data-font-wtyle={fontStyle}
		>
			{children}
		</StyledStyle>
	);
};
