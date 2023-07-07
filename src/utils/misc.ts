import { useMemo } from 'react';
import { css } from 'styled-components';
import { Display, Falsifiable, Inset, Opacity, Position, UserSelect, Visibility } from '../types';
import { defalsify } from './base';

export interface MiscProps {
	bottom?: Falsifiable<Inset>;
	display?: Falsifiable<Display>;
	left?: Falsifiable<Inset>;
	opacity?: Falsifiable<Opacity>;
	position?: Falsifiable<Position>;
	right?: Falsifiable<Inset>;
	top?: Falsifiable<Inset>;
	userSelect?: Falsifiable<UserSelect>;
	visibility?: Falsifiable<Visibility>;
}

export interface MiscStyleProps {
	'data-bottom': Inset | undefined;
	'data-display': Display | undefined;
	'data-left': Inset | undefined;
	'data-opacity': Opacity | undefined;
	'data-position': Position | undefined;
	'data-right': Inset | undefined;
	'data-top': Inset | undefined;
	'data-user-select': UserSelect | undefined;
	'data-visibility': Visibility | undefined;
}

export const useMiscStyleProps = ({
	bottom,
	display,
	left,
	opacity,
	position,
	right,
	top,
	userSelect,
	visibility,
}: MiscProps): MiscStyleProps => {
	const processedBottom = useMemo<Inset | undefined>(() => defalsify(bottom), [bottom]);

	const processedDisplay = useMemo<Display | undefined>(() => defalsify(display), [display]);

	const processedLeft = useMemo<Inset | undefined>(() => defalsify(left), [left]);

	const processedOpacity = useMemo<Opacity | undefined>(() => defalsify(opacity), [opacity]);

	const processedPosition = useMemo<Position | undefined>(() => defalsify(position), [position]);

	const processedRight = useMemo<Inset | undefined>(() => defalsify(right), [right]);

	const processedTop = useMemo<Inset | undefined>(() => defalsify(top), [top]);

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
