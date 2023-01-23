import { useMemo } from 'react';
import { css } from 'styled-components';
import { Falsifiable, Inset, Opacity, Position, UserSelect, Visibility } from '../types';
import { ifDefined } from './base';

export interface MiscProps {
	bottom?: Falsifiable<Inset>;
	displayNone?: boolean;
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
	'data-display-none': string | undefined;
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
	displayNone,
	left,
	opacity,
	position,
	right,
	top,
	userSelect,
	visibility,
}: MiscProps): MiscStyleProps => {
	const processedBottom = useMemo<Inset | undefined>(() => ifDefined(bottom, (bottom) => bottom), [bottom]);

	const processedDisplayNone = useMemo<'none' | undefined>(() => (displayNone ? 'none' : undefined), [displayNone]);

	const processedLeft = useMemo<Inset | undefined>(() => ifDefined(left, (left) => left), [left]);

	const processedOpacity = useMemo<Opacity | undefined>(() => ifDefined(opacity, (opacity) => opacity), [opacity]);

	const processedPosition = useMemo<Position | undefined>(
		() => ifDefined(position, (position) => position),
		[position]
	);

	const processedRight = useMemo<Inset | undefined>(() => ifDefined(right, (right) => right), [right]);

	const processedTop = useMemo<Inset | undefined>(() => ifDefined(top, (top) => top), [top]);

	const processedUserSelect = useMemo<UserSelect | undefined>(
		() => ifDefined(userSelect, (userSelect) => userSelect),
		[userSelect]
	);

	const processedVisibility = useMemo<Visibility | undefined>(
		() => ifDefined(visibility, (visibility) => visibility),
		[visibility]
	);

	return useMemo<MiscStyleProps>(
		() => ({
			'data-bottom': processedBottom,
			'data-display-none': processedDisplayNone,
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
			processedDisplayNone,
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
	display: ${({ 'data-display-none': displayNone }) => displayNone};
	left: ${({ 'data-left': left }) => left};
	opacity: ${({ 'data-opacity': opacity }) => opacity};
	position: ${({ 'data-position': position }) => position};
	right: ${({ 'data-right': right }) => right};
	top: ${({ 'data-top': top }) => top};
	user-select: ${({ 'data-user-select': userSelect }) => userSelect};
	visibility: ${({ 'data-visibility': visibility }) => visibility};
`;
