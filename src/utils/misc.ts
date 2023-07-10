import { useMemo } from 'react';
import { css } from 'styled-components';
import { CssInset, CustomName, Display, Falsifiable, Inset, Opacity, Position, UserSelect, Visibility } from '../types';
import { defalsify, ifDefined, isThemeSize, useEasyFlexTheme } from './base';

export interface MiscProps<CustomDistance extends CustomName> {
	bottom?: Falsifiable<Inset<CustomDistance>>;
	display?: Falsifiable<Display>;
	left?: Falsifiable<Inset<CustomDistance>>;
	opacity?: Falsifiable<Opacity>;
	position?: Falsifiable<Position>;
	right?: Falsifiable<Inset<CustomDistance>>;
	top?: Falsifiable<Inset<CustomDistance>>;
	userSelect?: Falsifiable<UserSelect>;
	visibility?: Falsifiable<Visibility>;
}

export interface MiscStyleProps {
	'data-bottom': CssInset | undefined;
	'data-display': Display | undefined;
	'data-left': CssInset | undefined;
	'data-opacity': Opacity | undefined;
	'data-position': Position | undefined;
	'data-right': CssInset | undefined;
	'data-top': CssInset | undefined;
	'data-user-select': UserSelect | undefined;
	'data-visibility': Visibility | undefined;
}

export const useMiscStyleProps = <CustomDistance extends CustomName>({
	bottom,
	display,
	left,
	opacity,
	position,
	right,
	top,
	userSelect,
	visibility,
}: MiscProps<CustomDistance>): MiscStyleProps => {
	const theme = useEasyFlexTheme();

	const processedBottom = useMemo<CssInset | undefined>(
		() => ifDefined(bottom, (bottom) => (isThemeSize(bottom) ? theme.distance[bottom] : bottom)),
		[bottom, theme]
	);

	const processedDisplay = useMemo<Display | undefined>(() => defalsify(display), [display]);

	const processedLeft = useMemo<CssInset | undefined>(
		() => ifDefined(left, (left) => (isThemeSize(left) ? theme.distance[left] : left)),
		[left, theme]
	);

	const processedOpacity = useMemo<Opacity | undefined>(() => defalsify(opacity), [opacity]);

	const processedPosition = useMemo<Position | undefined>(() => defalsify(position), [position]);

	const processedRight = useMemo<CssInset | undefined>(
		() => ifDefined(right, (right) => (isThemeSize(right) ? theme.distance[right] : right)),
		[right, theme]
	);

	const processedTop = useMemo<CssInset | undefined>(
		() => ifDefined(top, (top) => (isThemeSize(top) ? theme.distance[top] : top)),
		[theme, top]
	);

	const processedUserSelect = useMemo<UserSelect | undefined>(() => defalsify(userSelect), [userSelect]);

	const processedVisibility = useMemo<Visibility | undefined>(() => defalsify(visibility), [visibility]);

	return useMemo<MiscStyleProps>(
		() => ({
			'data-bottom': processedBottom,
			'data-display': processedDisplay,
			'data-left': processedLeft,
			'data-opacity': processedOpacity,
			'data-position': processedPosition,
			'data-right': processedRight,
			'data-top': processedTop,
			'data-user-select': processedUserSelect,
			'data-visibility': processedVisibility,
		}),
		[
			processedBottom,
			processedDisplay,
			processedLeft,
			processedOpacity,
			processedPosition,
			processedRight,
			processedTop,
			processedUserSelect,
			processedVisibility,
		]
	);
};

export const miscStyle = css<MiscStyleProps>`
	bottom: ${({ 'data-bottom': bottom }) => bottom};
	display: ${({ 'data-display': display }) => display};
	left: ${({ 'data-left': left }) => left};
	opacity: ${({ 'data-opacity': opacity }) => opacity};
	position: ${({ 'data-position': position }) => position};
	right: ${({ 'data-right': right }) => right};
	top: ${({ 'data-top': top }) => top};
	user-select: ${({ 'data-user-select': userSelect }) => userSelect};
	visibility: ${({ 'data-visibility': visibility }) => visibility};
`;
