import { useMemo } from 'react';
import { css } from 'styled-components';
import { Color, CssColor, CustomName, Falsifiable, Opacity } from '../types';
import { getColor, ifDefined, useEasyFlexTheme } from './base';

export interface ColorProps<CustomColor extends CustomName> {
	/** Component's background color. */
	backgroundColor?: Falsifiable<Color<CustomColor>>;
	/** Component's color. */
	color?: Falsifiable<Color<CustomColor>>;
	opacity?: Falsifiable<Opacity>;
}

export interface ColorStyleProps {
	'data-background-color': CssColor | undefined;
	'data-color': CssColor | undefined;
	'data-opacity': Opacity | undefined;
}

export const useColor = <CustomColor extends CustomName>(
	color: Falsifiable<Color<CustomColor>> | undefined
): CssColor | undefined => {
	const theme = useEasyFlexTheme();

	return useMemo<CssColor | undefined>(() => ifDefined(color, (color) => getColor(theme, color)), [color, theme]);
};

export const useDefaultColor = <T extends CssColor | undefined, CustomColor extends CustomName>(
	color: Falsifiable<Color<CustomColor>> | undefined,
	defaultColor: T
): T extends CssColor ? CssColor : CssColor | undefined => {
	const theme = useEasyFlexTheme();

	return useMemo<CssColor | undefined>(
		() => (color === false || color === undefined ? defaultColor : getColor(theme, color)),
		[color, defaultColor, theme]
	) as T extends CssColor ? CssColor : CssColor | undefined;
};

export const useColorStyleProps = <CustomColor extends CustomName>({
	backgroundColor,
	color,
	opacity,
}: ColorProps<CustomColor>): ColorStyleProps => {
	const processedBackgroundColor = useColor(backgroundColor);

	const processedColor = useColor(color);

	const processedOpacity = useMemo<Opacity | undefined>(() => ifDefined(opacity, (opacity) => opacity), [opacity]);

	return useMemo<ColorStyleProps>(
		() => ({
			'data-background-color': processedBackgroundColor,
			'data-color': processedColor,
			'data-opacity': processedOpacity,
		}),
		[processedBackgroundColor, processedColor, processedOpacity]
	);
};

export const colorStyle = css<ColorStyleProps>`
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	opacity: ${({ 'data-opacity': opacity }) => opacity};
`;
