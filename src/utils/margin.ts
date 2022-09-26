import { useMemo } from 'react';
import { css } from 'styled-components';
import { AbsoluteSize, Distance, Falsifiable } from '../types';
import { defalsify, getDistance, useEasyFlexTheme } from './base';

export interface MarginProps {
	/** Component's margin of all sides. */
	margin?: Falsifiable<Distance>;
	/** Component's bottom margin. */
	marginBottom?: Falsifiable<Distance>;
	/** Component's left and right margin. */
	marginHorizontal?: Falsifiable<Distance>;
	/** Component's left margin. */
	marginLeft?: Falsifiable<Distance>;
	/** Component's right margin. */
	marginRight?: Falsifiable<Distance>;
	/** Component's top margin. */
	marginTop?: Falsifiable<Distance>;
	/** Component's top and bottom margin. */
	marginVertical?: Falsifiable<Distance>;
}

export interface MarginStyleProps {
	'data-margin-bottom': AbsoluteSize;
	'data-margin-left': AbsoluteSize;
	'data-margin-right': AbsoluteSize;
	'data-margin-top': AbsoluteSize;
}

export const useMargin = ({
	margin,
	marginBottom,
	marginHorizontal,
	marginLeft,
	marginRight,
	marginTop,
	marginVertical,
}: MarginProps): {
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

export const useMarginStyleProps = (props: MarginProps): MarginStyleProps => {
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
