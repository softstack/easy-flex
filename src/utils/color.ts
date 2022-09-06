import { useMemo } from 'react';
import { css } from 'styled-components';
import { Color, CssColor } from '../types';
import { getColor, useEasyFlexTheme } from './base';

export interface ColorProps {
	/** Component's background color. */
	backgroundColor?: Color;
	/** Component's color. */
	color?: Color;
}

export interface ColorStyleProps {
	'data-background-color'?: CssColor;
	'data-color'?: CssColor;
}

export const useColor = <T extends CssColor | undefined>(
	color: Color | undefined,
	defaultColor: T
): T extends CssColor ? CssColor : CssColor | undefined => {
	const theme = useEasyFlexTheme();

	return useMemo<CssColor | undefined>(
		() => (color === undefined ? defaultColor : getColor(theme, color)),
		[color, defaultColor, theme]
	) as T extends CssColor ? CssColor : CssColor | undefined;
};

export const useColorStyleProps = (
	props: ColorProps,
	defaultBackgroundColor: CssColor | undefined,
	defaultColor: CssColor | undefined
): {
	backgroundColor: CssColor | undefined;
	color: CssColor | undefined;
} => {
	const processedBackgroundColor = useColor(props.backgroundColor, defaultBackgroundColor);

	const processedColor = useColor(props.color, defaultColor);

	return useMemo<{
		backgroundColor: CssColor | undefined;
		color: CssColor | undefined;
	}>(
		() => ({
			backgroundColor: processedBackgroundColor,
			color: processedColor,
		}),
		[processedBackgroundColor, processedColor]
	);
};

export const colorStyle = css<ColorStyleProps>`
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
`;
