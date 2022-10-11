import { useMemo } from 'react';
import { css } from 'styled-components';
import {
	AbsoluteSize,
	BorderRadius,
	BorderStyle,
	BorderWidth,
	Color,
	CssColor,
	Falsifiable,
	Size,
	ThemeColor,
} from '../types';
import { defalsify, getBorderRadius, getBorderWidth, ifDefined, useEasyFlexTheme } from './base';
import { useColor } from './color';

export interface BorderProps<T extends ThemeColor> {
	/** Component's border color. */
	borderColor?: Falsifiable<Color<T>>;
	/** Component's border radius. */
	borderRadius?: Falsifiable<BorderRadius>;
	borderStyle?: Falsifiable<BorderStyle>;
	/** Component's border width. */
	borderWidth?: Falsifiable<BorderWidth>;
	round?: boolean;
}

export interface BorderStyleProps {
	'data-border-color'?: CssColor;
	'data-border-radius'?: Size;
	'data-border-style'?: BorderStyle;
	'data-border-width'?: AbsoluteSize;
}

export const useBorder = <T extends ThemeColor>({
	borderColor,
	borderRadius,
	borderStyle,
	borderWidth,
	round,
}: BorderProps<T>): {
	color: CssColor | undefined;
	radius: Size | undefined;
	style: BorderStyle | undefined;
	width: AbsoluteSize | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedBorderColor = useColor(borderColor);

	const processedBorderRadius = useMemo<Size | undefined>(
		() => (round ? '99999px' : ifDefined(borderRadius, (borderRadius) => getBorderRadius(theme, borderRadius))),
		[borderRadius, round, theme]
	);

	const processedBorderStyle = useMemo<BorderStyle | undefined>(
		() =>
			(borderStyle !== false && borderStyle !== undefined) || (borderWidth !== false && borderWidth !== undefined)
				? defalsify(borderStyle) ?? theme.border.defaultStyle
				: undefined,
		[borderStyle, borderWidth, theme]
	);

	const processedBorderWidth = useMemo<AbsoluteSize | undefined>(
		() => ifDefined(borderWidth, (borderWidth) => getBorderWidth(theme, borderWidth)),
		[borderWidth, theme]
	);

	return useMemo<{
		color: CssColor | undefined;
		radius: Size | undefined;
		style: BorderStyle | undefined;
		width: AbsoluteSize | undefined;
	}>(
		() => ({
			color: processedBorderColor,
			radius: processedBorderRadius,
			style: processedBorderStyle,
			width: processedBorderWidth,
		}),
		[processedBorderColor, processedBorderRadius, processedBorderStyle, processedBorderWidth]
	);
};

export const useBorderStyleProps = <T extends ThemeColor>(props: BorderProps<T>): BorderStyleProps => {
	const border = useBorder(props);

	return useMemo<BorderStyleProps>(
		() => ({
			'data-border-color': border.color,
			'data-border-radius': border.radius,
			'data-border-style': border.style,
			'data-border-width': border.width,
		}),
		[border]
	);
};

export const borderStyle = css<BorderStyleProps>`
	border-color: ${({ 'data-border-color': borderColor }) => borderColor};
	border-radius: ${({ 'data-border-radius': borderRadius }) => borderRadius};
	border-style: ${({ 'data-border-style': borderStyle }) => borderStyle};
	border-width: ${({ 'data-border-width': borderWidth }) => borderWidth};
`;
