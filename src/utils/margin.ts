import { useMemo } from 'react';
import { css } from 'styled-components';
import { AbsoluteSize, CustomName, Distance, Falsifiable } from '../types';
import { defalsify, getDistance, useEasyFlexTheme } from './base';

export interface MarginProps<CustomDistance extends CustomName> {
	/** Component's margin of all sides. */
	margin?: Falsifiable<Distance<CustomDistance>>;
	/** Component's bottom margin. */
	marginBottom?: Falsifiable<Distance<CustomDistance>>;
	/** Component's left and right margin. */
	marginHorizontal?: Falsifiable<Distance<CustomDistance>>;
	/** Component's left margin. */
	marginLeft?: Falsifiable<Distance<CustomDistance>>;
	/** Component's right margin. */
	marginRight?: Falsifiable<Distance<CustomDistance>>;
	/** Component's top margin. */
	marginTop?: Falsifiable<Distance<CustomDistance>>;
	/** Component's top and bottom margin. */
	marginVertical?: Falsifiable<Distance<CustomDistance>>;
}

export interface MarginStyleProps {
	'data-margin-bottom': AbsoluteSize;
	'data-margin-left': AbsoluteSize;
	'data-margin-right': AbsoluteSize;
	'data-margin-top': AbsoluteSize;
}

export const useMargin = <CustomDistance extends CustomName>({
	margin,
	marginBottom,
	marginHorizontal,
	marginLeft,
	marginRight,
	marginTop,
	marginVertical,
}: MarginProps<CustomDistance>): {
	bottom: AbsoluteSize;
	left: AbsoluteSize;
	right: AbsoluteSize;
	top: AbsoluteSize;
} => {
	const theme = useEasyFlexTheme();

	const processedMarginBottom = useMemo<AbsoluteSize>(
		() => getDistance(theme, defalsify(marginBottom) ?? defalsify(marginVertical) ?? defalsify(margin) ?? '0px'),
		[margin, marginBottom, marginVertical, theme]
	);

	const processedMarginLeft = useMemo<AbsoluteSize>(
		() => getDistance(theme, defalsify(marginLeft) ?? defalsify(marginHorizontal) ?? defalsify(margin) ?? '0px'),
		[margin, marginHorizontal, marginLeft, theme]
	);

	const processedMarginRight = useMemo<AbsoluteSize>(
		() => getDistance(theme, defalsify(marginRight) ?? defalsify(marginHorizontal) ?? defalsify(margin) ?? '0px'),
		[margin, marginHorizontal, marginRight, theme]
	);

	const processedMarginTop = useMemo<AbsoluteSize>(
		() => getDistance(theme, defalsify(marginTop) ?? defalsify(marginVertical) ?? defalsify(margin) ?? '0px'),
		[margin, marginTop, marginVertical, theme]
	);

	return useMemo<{
		bottom: AbsoluteSize;
		left: AbsoluteSize;
		right: AbsoluteSize;
		top: AbsoluteSize;
	}>(
		() => ({
			bottom: processedMarginBottom,
			left: processedMarginLeft,
			right: processedMarginRight,
			top: processedMarginTop,
		}),
		[processedMarginBottom, processedMarginLeft, processedMarginRight, processedMarginTop]
	);
};

export const useMarginStyleProps = <CustomDistance extends CustomName>(
	props: MarginProps<CustomDistance>
): MarginStyleProps => {
	const margin = useMargin(props);

	return useMemo<MarginStyleProps>(
		() => ({
			'data-margin-bottom': margin.bottom,
			'data-margin-left': margin.left,
			'data-margin-right': margin.right,
			'data-margin-top': margin.top,
		}),
		[margin]
	);
};

export const marginStyle = css<MarginStyleProps>`
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
`;
