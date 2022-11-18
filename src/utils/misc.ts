import { useMemo } from 'react';
import { css } from 'styled-components';
import { Falsifiable, Visibility } from '../types';
import { ifDefined } from './base';

export interface MiscProps {
	displayNone?: boolean;
	visibility?: Falsifiable<Visibility>;
}

export interface MiscStyleProps {
	'data-display-none': string | undefined;
	'data-visibility': Visibility | undefined;
}

export const useMiscStyleProps = ({ displayNone, visibility }: MiscProps): MiscStyleProps => {
	const processedDisplayNone = useMemo<'none' | undefined>(() => (displayNone ? 'none' : undefined), [displayNone]);

	const processedVisibility = useMemo<Visibility | undefined>(
		() => ifDefined(visibility, (visibility) => visibility),
		[visibility]
	);

	return useMemo<MiscStyleProps>(
		() => ({ 'data-display-none': processedDisplayNone, 'data-visibility': processedVisibility }),
		[processedDisplayNone, processedVisibility]
	);
};

export const miscStyle = css<MiscStyleProps>`
	display: ${({ 'data-display-none': displayNone }) => displayNone};
	visibility: ${({ 'data-visibility': visibility }) => visibility};
`;
