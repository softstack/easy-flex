import { useMemo } from 'react';
import { css } from 'styled-components';
import { Color, CssColor, Falsifiable } from '../types';
import { getColor, ifDefined, useEasyFlexTheme } from './base';

export interface ColorProps {
	/** Component's background color. */
	backgroundColor?: Falsifiable<Color>;
	/** Component's color. */
	color?: Falsifiable<Color>;
}

export interface ColorStyleProps {
	'data-background-color'?: CssColor;
	'data-color'?: CssColor;
}

export const useColor = (color: Falsifiable<Color> | undefined): CssColor | undefined => {
	const theme = useEasyFlexTheme();

	return useMemo<CssColor | undefined>(() => ifDefined(color, (color) => getColor(theme, color)), [color, theme]);
};

export const useDefaultColor = <T extends CssColor | undefined>(
	color: Falsifiable<Color> | undefined,
	defaultColor: T
): T extends CssColor ? CssColor : CssColor | undefined => {
	const theme = useEasyFlexTheme();

	return useMemo<CssColor | undefined>(
		() => (color === false || color === undefined ? defaultColor : getColor(theme, color)),
		[color, defaultColor, theme]
	) as T extends CssColor ? CssColor : CssColor | undefined;
};

export const useColorStyleProps = ({ backgroundColor, color }: ColorProps): ColorStyleProps => {
	const processedBackgroundColor = useColor(backgroundColor);

	const processedColor = useColor(color);

	return useMemo<ColorStyleProps>(
		() => ({
			'data-background-color': processedBackgroundColor,
			'data-color': processedColor,
		}),
		[processedBackgroundColor, processedColor]
	);
};

export const colorStyle = css<ColorStyleProps>`
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
`;
