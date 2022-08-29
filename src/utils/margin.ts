import { useMemo } from 'react';
import { css } from 'styled-components';
import { AbsoluteSize, Distance } from '../types';
import { useDistance } from './utils';

export interface MarginProps {
	/** Component's margin of all sides. */
	margin?: Distance | AbsoluteSize;
	/** Component's bottom margin. */
	marginBottom?: Distance | AbsoluteSize;
	/** Component's left margin. */
	marginLeft?: Distance | AbsoluteSize;
	/** Component's right margin. */
	marginRight?: Distance | AbsoluteSize;
	/** Component's top margin. */
	marginTop?: Distance | AbsoluteSize;
	/** Component's left and right margin. */
	marginHorizontal?: Distance | AbsoluteSize;
	/** Component's top and bottom margin. */
	marginVertical?: Distance | AbsoluteSize;
}

export interface MarginStyleProps {
	'data-margin-bottom': AbsoluteSize;
	'data-margin-left': AbsoluteSize;
	'data-margin-right': AbsoluteSize;
	'data-margin-top': AbsoluteSize;
}

export const useMarginStyleProps = (data: {
	margin?: Distance | AbsoluteSize;
	marginBottom?: Distance | AbsoluteSize;
	marginLeft?: Distance | AbsoluteSize;
	marginRight?: Distance | AbsoluteSize;
	marginTop?: Distance | AbsoluteSize;
	marginHorizontal?: Distance | AbsoluteSize;
	marginVertical?: Distance | AbsoluteSize;
}): MarginStyleProps => {
	const distance = useDistance(data);

	return useMemo<MarginStyleProps>(
		() => ({
			'data-margin-bottom': distance.margin.bottom,
			'data-margin-left': distance.margin.left,
			'data-margin-right': distance.margin.right,
			'data-margin-top': distance.margin.top,
		}),
		[distance]
	);
};

export const marginStyle = css<MarginStyleProps>`
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
`;
