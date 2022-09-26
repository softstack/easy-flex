import { useMemo } from 'react';
import { css } from 'styled-components';
import { AlignSelf, Falsifiable, Flex, FlexBasis } from '../types';

export interface FlexItemProps {
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: Falsifiable<AlignSelf>;
	basis?: Falsifiable<FlexBasis>;
	flex?: Falsifiable<Flex>;
	/** Component's flex grow. */
	grow?: Falsifiable<number>;
	/** Component's flex shrink. */
	shrink?: Falsifiable<number>;
}

export interface FlexItemStyleProps {
	'data-align-self'?: Falsifiable<AlignSelf>;
	'data-basis'?: Falsifiable<FlexBasis>;
	'data-flex'?: Falsifiable<Flex>;
	'data-grow'?: Falsifiable<number>;
	'data-shrink'?: Falsifiable<number>;
}

export const useFlexItemStyleProps = ({ alignSelf, basis, flex, grow, shrink }: FlexItemProps): FlexItemStyleProps => {
	return useMemo<FlexItemStyleProps>(
		() => ({
			'data-align-self': alignSelf,
			'data-basis': basis,
			'data-flex': flex,
			'data-grow': grow,
			'data-shrink': shrink,
		}),
		[alignSelf, basis, flex, grow, shrink]
	);
};

export const flexItemStyle = css<FlexItemStyleProps>`
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	flex: ${({ 'data-flex': flex }) => flex};
	flex-basis: ${({ 'data-basis': basis }) => basis};
	flex-grow: ${({ 'data-grow': grow }) => grow};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
`;
