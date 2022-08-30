import { useMemo } from 'react';
import { css } from 'styled-components';
import { AbsoluteSize } from '../types';
import { MarginProps, marginStyle, MarginStyleProps, useMargin } from './margin';
import { PaddingProps, paddingStyle, PaddingStyleProps, usePadding } from './padding';

export type DistanceProps = MarginProps & PaddingProps;

export type DistanceStyleProps = MarginStyleProps & PaddingStyleProps;

export const useDistance = ({
	margin,
	marginBottom,
	marginHorizontal,
	marginLeft,
	marginRight,
	marginTop,
	marginVertical,
	padding,
	paddingBottom,
	paddingHorizontal,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingVertical,
}: DistanceProps): {
	margin: {
		bottom: AbsoluteSize;
		left: AbsoluteSize;
		right: AbsoluteSize;
		top: AbsoluteSize;
	};
	padding: {
		bottom: AbsoluteSize;
		left: AbsoluteSize;
		right: AbsoluteSize;
		top: AbsoluteSize;
	};
} => {
	const processedMargin = useMargin({
		margin,
		marginBottom,
		marginHorizontal,
		marginLeft,
		marginRight,
		marginTop,
		marginVertical,
	});

	const processedPadding = usePadding({
		padding,
		paddingBottom,
		paddingHorizontal,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingVertical,
	});

	return useMemo(() => ({ margin: processedMargin, padding: processedPadding }), [processedMargin, processedPadding]);
};

export const useDistanceStyleProps = (props: DistanceProps): DistanceStyleProps => {
	const distance = useDistance(props);

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
