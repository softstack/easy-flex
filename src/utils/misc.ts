import { useMemo } from 'react';
import { css } from 'styled-components';
import { Falsifiable, Opacity, Visibility } from '../types';
import { ifDefined } from './base';

export interface MiscProps {
	displayNone?: boolean;
	opacity?: Falsifiable<Opacity>;
	visibility?: Falsifiable<Visibility>;
}

export interface MiscStyleProps {
	'data-display-none': string | undefined;
	'data-opacity': Opacity | undefined;
	'data-visibility': Visibility | undefined;
}

export const useMiscStyleProps = ({ displayNone, opacity, visibility }: MiscProps): MiscStyleProps => {
	const processedDisplayNone = useMemo<'none' | undefined>(() => (displayNone ? 'none' : undefined), [displayNone]);

	const processedOpacity = useMemo<Opacity | undefined>(() => ifDefined(opacity, (opacity) => opacity), [opacity]);

	const processedVisibility = useMemo<Visibility | undefined>(
		() => ifDefined(visibility, (visibility) => visibility),
		[visibility]
	);

	return useMemo<MiscStyleProps>(
		() => ({
			'data-display-none': processedDisplayNone,
			'data-opacity': processedOpacity,
			'data-visibility': processedVisibility,
		}),
		[processedDisplayNone, processedOpacity, processedVisibility]
	);
};

export const miscStyle = css<MiscStyleProps>`
	display: ${({ 'data-display-none': displayNone }) => displayNone};
	opacity: ${({ 'data-opacity': opacity }) => opacity};
	visibility: ${({ 'data-visibility': visibility }) => visibility};
`;
