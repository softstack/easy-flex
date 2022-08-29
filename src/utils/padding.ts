import { useMemo } from 'react';
import { css } from 'styled-components';
import { AbsoluteSize, Distance } from '../types';
import { useDistance } from './utils';

export interface PaddingProps {
	/** Padding of all sides. */
	padding?: Distance | AbsoluteSize;
	/** Component's bottom padding. */
	paddingBottom?: Distance | AbsoluteSize;
	/** Component's left padding. */
	paddingLeft?: Distance | AbsoluteSize;
	/** Component's right padding. */
	paddingRight?: Distance | AbsoluteSize;
	/** Component's top padding. */
	paddingTop?: Distance | AbsoluteSize;
	/** Component's left and right padding. */
	paddingHorizontal?: Distance | AbsoluteSize;
	/** Component's top and bottom padding. */
	paddingVertical?: Distance | AbsoluteSize;
}

export interface PaddingStyleProps {
	'data-padding-bottom': AbsoluteSize;
	'data-padding-left': AbsoluteSize;
	'data-padding-right': AbsoluteSize;
	'data-padding-top': AbsoluteSize;
}

export const usePaddingStyleProps = (data: {
	padding?: Distance | AbsoluteSize;
	paddingBottom?: Distance | AbsoluteSize;
	paddingLeft?: Distance | AbsoluteSize;
	paddingRight?: Distance | AbsoluteSize;
	paddingTop?: Distance | AbsoluteSize;
	paddingHorizontal?: Distance | AbsoluteSize;
	paddingVertical?: Distance | AbsoluteSize;
}): PaddingStyleProps => {
	const distance = useDistance(data);

	return useMemo<PaddingStyleProps>(
		() => ({
			'data-padding-bottom': distance.padding.bottom,
			'data-padding-left': distance.padding.left,
			'data-padding-right': distance.padding.right,
			'data-padding-top': distance.padding.top,
		}),
		[distance]
	);
};

export const paddingStyle = css<PaddingStyleProps>`
	padding-bottom: ${({ 'data-padding-bottom': paddingBottom }) => paddingBottom};
	padding-left: ${({ 'data-padding-left': paddingLeft }) => paddingLeft};
	padding-right: ${({ 'data-padding-right': paddingRight }) => paddingRight};
	padding-top: ${({ 'data-padding-top': paddingTop }) => paddingTop};
`;
