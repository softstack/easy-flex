import { useMemo } from 'react';
import { css } from 'styled-components';
import {
	AbsoluteSize,
	AlignItems,
	CustomName,
	Distance,
	Falsifiable,
	FlexDirection,
	FlexWrap,
	JustifyContent,
} from '../types';
import { getDistance, ifDefined, useEasyFlexTheme } from './base';

export interface FlexContainerProps<CustomDistance extends CustomName> {
	/** The alignment of the component's children on the cross axis. */
	align?: Falsifiable<AlignItems>;
	/** Component's flex direction. */
	direction?: Falsifiable<FlexDirection>;
	/** Sets the gap between the component's children. If colum-gap or row-gap depends on direction. */
	gap?: Falsifiable<Distance<CustomDistance>>;
	/** Sets how the browser distributes space between and around the component's children along the main axis. */
	justify?: Falsifiable<JustifyContent>;
	wrap?: Falsifiable<FlexWrap>;
	wrapGap?: Falsifiable<Distance<CustomDistance>>;
}

export interface FlexContainerStyleProps {
	'data-align': Falsifiable<AlignItems> | undefined;
	'data-direction': Falsifiable<FlexDirection> | undefined;
	'data-column-gap': Falsifiable<AbsoluteSize> | undefined;
	'data-row-gap': Falsifiable<AbsoluteSize> | undefined;
	'data-justify': Falsifiable<JustifyContent> | undefined;
	'data-wrap': Falsifiable<FlexWrap> | undefined;
}

export const useGap = <CustomDistance extends CustomName>({
	direction,
	gap,
	wrapGap,
}: {
	direction?: Falsifiable<FlexDirection>;
	gap?: Falsifiable<Distance<CustomDistance>>;
	wrapGap?: Falsifiable<Distance<CustomDistance>>;
}): { column: AbsoluteSize | undefined; row: AbsoluteSize | undefined } => {
	const theme = useEasyFlexTheme();

	const columnGap = useMemo<AbsoluteSize | undefined>(
		() =>
			ifDefined(gap, (gap) =>
				direction === 'row' || direction === 'row-reverse' ? getDistance(theme, gap) : undefined
			) ??
			ifDefined(wrapGap, (wrapGap) =>
				direction === 'column' || direction === 'column-reverse' ? getDistance(theme, wrapGap) : undefined
			),
		[direction, gap, theme, wrapGap]
	);

	const rowGap = useMemo<AbsoluteSize | undefined>(
		() =>
			ifDefined(gap, (gap) =>
				direction === 'column' || direction === 'column-reverse' ? getDistance(theme, gap) : undefined
			) ??
			ifDefined(wrapGap, (wrapGap) =>
				direction === 'row' || direction === 'row-reverse' ? getDistance(theme, wrapGap) : undefined
			),
		[direction, gap, theme, wrapGap]
	);

	return useMemo<{ column: AbsoluteSize | undefined; row: AbsoluteSize | undefined }>(
		() => ({
			column: columnGap,
			row: rowGap,
		}),
		[columnGap, rowGap]
	);
};

export const useFlexContainerStyleProps = <CustomDistance extends CustomName>({
	align,
	direction,
	gap,
	justify,
	wrap,
	wrapGap,
}: FlexContainerProps<CustomDistance>): FlexContainerStyleProps => {
	const processedGap = useGap({ direction, gap, wrapGap });

	return useMemo<FlexContainerStyleProps>(
		() => ({
			'data-align': align,
			'data-direction': direction,
			'data-column-gap': processedGap.column,
			'data-row-gap': processedGap.row,
			'data-justify': justify,
			'data-wrap': wrap,
		}),
		[align, direction, justify, processedGap, wrap]
	);
};

export const flexContainerStyle = css<FlexContainerStyleProps>`
	align-items: ${({ 'data-align': align }) => align};
	flex-direction: ${({ 'data-direction': direction }) => direction};
	column-gap: ${({ 'data-column-gap': columnGap }) => columnGap};
	row-gap: ${({ 'data-row-gap': rowGap }) => rowGap};
	justify-content: ${({ 'data-justify': justify }) => justify};
	flex-wrap: ${({ 'data-wrap': wrap }) => wrap};
`;
