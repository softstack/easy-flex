import { useMemo } from 'react';
import { css } from 'styled-components';
import { Falsifiable, JustifySelf } from '../types';

export interface GridItemProps {
	justifySelf?: Falsifiable<JustifySelf>;
}

export interface GridItemStyleProps {
	'data-justify-self': Falsifiable<JustifySelf> | undefined;
}

export const useGridItemStyleProps = ({ justifySelf }: GridItemProps): GridItemStyleProps => {
	return useMemo<GridItemStyleProps>(
		() => ({
			'data-justify-self': justifySelf,
		}),
		[justifySelf]
	);
};

export const gridItemStyle = css<GridItemStyleProps>`
	justify-self: ${({ 'data-justify-self': justifySelf }) => justifySelf};
`;
