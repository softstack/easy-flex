import { useMemo } from 'react';
import { css } from 'styled-components';
import { Falsifiable, Overflow } from '../types';

export interface OverflowProps {
	/** Component's overflow behaviour. */
	overflow?: Falsifiable<Overflow>;
	/** Component's verflow behaviour on left and right edges. */
	overflowX?: Falsifiable<Overflow>;
	/** Component's overflow behaviour on top and bottom edges. */
	overflowY?: Falsifiable<Overflow>;
}

export interface OverflowStyleProps {
	'data-overflow'?: Falsifiable<Overflow>;
	'data-overflow-x'?: Falsifiable<Overflow>;
	'data-overflow-y'?: Falsifiable<Overflow>;
}

export const useOverflowStyleProps = (props: OverflowProps): OverflowStyleProps => {
	return useMemo<OverflowStyleProps>(
		() => ({
			'data-overflow': props.overflow,
			'data-overflow-x': props.overflowX,
			'data-overflow-y': props.overflowY,
		}),
		[props]
	);
};

export const overflowStyle = css<OverflowStyleProps>`
	overflow: ${({ 'data-overflow': overflow }) => overflow};
	overflow-x: ${({ 'data-overflow-x': overflowX }) => overflowX};
	overflow-y: ${({ 'data-overflow-y': overflowY }) => overflowY};
`;
