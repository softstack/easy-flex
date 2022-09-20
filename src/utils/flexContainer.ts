import { useMemo } from 'react';
import { css } from 'styled-components';
import { AbsoluteSize, AlignItems, Distance, FlexDirection, JustifyContent } from '../types';
import { getDistance, useEasyFlexTheme } from './base';

export interface FlexContainerProps {
	/** The alignment of the component's children on the cross axis. */
	align?: AlignItems;
	/** Component's flex direction. */
	direction?: FlexDirection;
	/** Sets the gap between the component's children. If colum-gap or row-gap depends on direction. */
	gap?: Distance;
	/** Sets how the browser distributes space between and around the component's children along the main axis. */
	justify?: JustifyContent;
}

export interface FlexContainerStyleProps {
	'data-align'?: AlignItems;
	'data-direction'?: FlexDirection;
	'data-column-gap'?: AbsoluteSize;
	'data-row-gap'?: AbsoluteSize;
	'data-justify'?: JustifyContent;
}

export const useGap = ({
	direction,
	gap,
}: {
	direction?: FlexDirection;
	gap?: Distance;
}): { column: AbsoluteSize | undefined; row: AbsoluteSize | undefined } => {
	const theme = useEasyFlexTheme();

	const columnGap = useMemo<AbsoluteSize | undefined>(() => {
		if (gap === undefined) {
			return undefined;
		}
		if (direction === 'row' || direction === 'row-reverse') {
			return getDistance(theme, gap);
		}
		return undefined;
	}, [direction, gap, theme]);

	const rowGap = useMemo<AbsoluteSize | undefined>(() => {
		if (gap === undefined) {
			return undefined;
		}
		if (direction === 'column' || direction === 'column-reverse') {
			return getDistance(theme, gap);
		}
		return undefined;
	}, [direction, gap, theme]);

	return useMemo<{ column: AbsoluteSize | undefined; row: AbsoluteSize | undefined }>(
		() => ({
			column: columnGap,
			row: rowGap,
		}),
		[columnGap, rowGap]
	);
};

export const useFlexContainerStyleProps = ({
	align,
	direction,
	gap,
	justify,
}: FlexContainerProps): FlexContainerStyleProps => {
	const processedGap = useGap({ direction, gap });

	return useMemo<FlexContainerStyleProps>(
		() => ({
			'data-align': align,
			'data-direction': direction,
			'data-column-gap': processedGap.column,
			'data-row-gap': processedGap.row,
			'data-justify': justify,
		}),
		[align, direction, justify, processedGap]
	);
};

export const flexContainerStyle = css<FlexContainerStyleProps>`
	align-items: ${({ 'data-align': align }) => align};
	flex-direction: ${({ 'data-direction': direction }) => direction};
	column-gap: ${({ 'data-column-gap': columnGap }) => columnGap};
	row-gap: ${({ 'data-row-gap': rowGap }) => rowGap};
	justify-content: ${({ 'data-justify': justify }) => justify};
`;
