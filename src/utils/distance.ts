import { useMemo } from 'react';
import { css } from 'styled-components';
import { AbsoluteSize, Distance } from '../types';
import { MarginProps, marginStyle, MarginStyleProps } from './margin';
import { PaddingProps, paddingStyle, PaddingStyleProps } from './padding';
import { useDistance } from './utils';

export type DistanceProps = MarginProps & PaddingProps;

export type DistanceStyleProps = MarginStyleProps & PaddingStyleProps;

export const useDistanceStyleProps = (data: {
	margin?: Distance | AbsoluteSize;
	marginBottom?: Distance | AbsoluteSize;
	marginLeft?: Distance | AbsoluteSize;
	marginRight?: Distance | AbsoluteSize;
	marginTop?: Distance | AbsoluteSize;
	marginHorizontal?: Distance | AbsoluteSize;
	marginVertical?: Distance | AbsoluteSize;
	padding?: Distance | AbsoluteSize;
	paddingBottom?: Distance | AbsoluteSize;
	paddingLeft?: Distance | AbsoluteSize;
	paddingRight?: Distance | AbsoluteSize;
	paddingTop?: Distance | AbsoluteSize;
	paddingHorizontal?: Distance | AbsoluteSize;
	paddingVertical?: Distance | AbsoluteSize;
}): DistanceStyleProps => {
	const distance = useDistance(data);

	return useMemo<DistanceStyleProps>(
		() => ({
			'data-margin-bottom': distance.margin.bottom,
			'data-margin-left': distance.margin.left,
			'data-margin-right': distance.margin.right,
			'data-margin-top': distance.margin.top,
			'data-padding-bottom': distance.padding.bottom,
			'data-padding-left': distance.padding.left,
			'data-padding-right': distance.padding.right,
			'data-padding-top': distance.padding.top,
		}),
		[distance]
	);
};

export const distanceStyle = css<DistanceStyleProps>`
	${marginStyle}
	${paddingStyle}
`;
