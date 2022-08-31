import { useMemo } from 'react';
import { css } from 'styled-components';
import { AlignSelf, Flex, FlexBasis } from '../types';

export interface FlexItemProps {
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: AlignSelf;
	basis?: FlexBasis;
	flex?: Flex;
	/** Component's flex grow. */
	grow?: number;
	/** Component's flex shrink. */
	shrink?: number;
}

export interface FlexItemStyleProps {
	'data-align-self'?: AlignSelf;
	'data-basis'?: FlexBasis;
	'data-flex'?: Flex;
	'data-grow'?: number;
	'data-shrink'?: number;
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
	flex: ${({ 'data-flex': flex }) => flex};
	flex-basis: ${({ 'data-basis': basis }) => basis};
	flex-grow: ${({ 'data-grow': grow }) => grow};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
`;
