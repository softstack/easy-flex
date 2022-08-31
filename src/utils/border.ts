import { useMemo } from 'react';
import { css } from 'styled-components';
import { AbsoluteSize, BorderRadius, BorderStyle, BorderWidth, Color, CssColor } from '../types';
import { getBorderRadius, getBorderWidth, ifNotUndefined, useColor, useEasyFlexTheme } from './base';

export interface BorderProps {
	/** Component's border color. */
	borderColor?: Color;
	/** Component's border radius. */
	borderRadius?: BorderRadius | AbsoluteSize;
	borderStyle?: BorderStyle;
	/** Component's border width. */
	borderWidth?: BorderWidth | AbsoluteSize;
	round?: boolean;
}

export interface BorderStyleProps {
	'data-border-color'?: CssColor;
	'data-border-radius'?: AbsoluteSize;
	'data-border-style'?: BorderStyle;
	'data-border-width'?: AbsoluteSize;
}

export const useBorder = ({
	borderColor,
	borderRadius,
	borderStyle,
	borderWidth,
	round,
}: BorderProps): {
	color: CssColor | undefined;
	radius: AbsoluteSize | undefined;
	style: BorderStyle | undefined;
	width: AbsoluteSize | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedBorderColor = useColor(borderColor, undefined);

	const processedBorderRadius = useMemo<AbsoluteSize | undefined>(
		() => (round ? '99999px' : ifNotUndefined(borderRadius, (borderRadius) => getBorderRadius(theme, borderRadius))),
		[borderRadius, round, theme]
	);

	const processedBorderStyle = useMemo<BorderStyle | undefined>(
		() =>
			borderStyle !== undefined || borderWidth !== undefined ? borderStyle ?? theme.border.defaultStyle : undefined,
		[borderStyle, borderWidth, theme]
	);

	const processedBorderWidth = useMemo<AbsoluteSize | undefined>(
		() => ifNotUndefined(borderWidth, (borderWidth) => getBorderWidth(theme, borderWidth)),
		[borderWidth, theme]
	);

	return useMemo<{
		color: CssColor | undefined;
		radius: AbsoluteSize | undefined;
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

export const useBorderStyleProps = (props: BorderProps) => {
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