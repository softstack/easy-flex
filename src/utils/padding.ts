import { useMemo } from 'react';
import { css } from 'styled-components';
import { AbsoluteSize, Distance } from '../types';
import { getDistance, useEasyFlexTheme } from './base';

export interface PaddingProps {
	/** Padding of all sides. */
	padding?: Distance | AbsoluteSize;
	/** Component's bottom padding. */
	paddingBottom?: Distance | AbsoluteSize;
	/** Component's left and right padding. */
	paddingHorizontal?: Distance | AbsoluteSize;
	/** Component's left padding. */
	paddingLeft?: Distance | AbsoluteSize;
	/** Component's right padding. */
	paddingRight?: Distance | AbsoluteSize;
	/** Component's top padding. */
	paddingTop?: Distance | AbsoluteSize;
	/** Component's top and bottom padding. */
	paddingVertical?: Distance | AbsoluteSize;
}

export interface PaddingStyleProps {
	'data-padding-bottom': AbsoluteSize;
	'data-padding-left': AbsoluteSize;
	'data-padding-right': AbsoluteSize;
	'data-padding-top': AbsoluteSize;
}

export const usePadding = ({
	padding,
	paddingBottom,
	paddingHorizontal,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingVertical,
}: PaddingProps): {
	bottom: AbsoluteSize;
	left: AbsoluteSize;
	right: AbsoluteSize;
	top: AbsoluteSize;
} => {
	const theme = useEasyFlexTheme();

	const processedPaddingBottom = useMemo<AbsoluteSize>(
		() => getDistance(theme, paddingBottom ?? paddingVertical ?? padding ?? '0px'),
		[padding, paddingBottom, paddingVertical, theme]
	);

	const processedPaddingLeft = useMemo<AbsoluteSize>(
		() => getDistance(theme, paddingLeft ?? paddingHorizontal ?? padding ?? '0px'),
		[padding, paddingHorizontal, paddingLeft, theme]
	);

	const processedPaddingRight = useMemo<AbsoluteSize>(
		() => getDistance(theme, paddingRight ?? paddingHorizontal ?? padding ?? '0px'),
		[padding, paddingHorizontal, paddingRight, theme]
	);

	const processedPaddingTop = useMemo<AbsoluteSize>(
		() => getDistance(theme, paddingTop ?? paddingVertical ?? padding ?? '0px'),
		[padding, paddingTop, paddingVertical, theme]
	);

	return useMemo<{
		bottom: AbsoluteSize;
		left: AbsoluteSize;
		right: AbsoluteSize;
		top: AbsoluteSize;
	}>(
		() => ({
			bottom: processedPaddingBottom,
			left: processedPaddingLeft,
			right: processedPaddingRight,
			top: processedPaddingTop,
		}),
		[processedPaddingBottom, processedPaddingLeft, processedPaddingRight, processedPaddingTop]
	);
};

export const usePaddingStyleProps = (props: PaddingProps): PaddingStyleProps => {
	const padding = usePadding(props);

	return useMemo<PaddingStyleProps>(
		() => ({
			'data-padding-bottom': padding.bottom,
			'data-padding-left': padding.left,
			'data-padding-right': padding.right,
			'data-padding-top': padding.top,
		}),
		[padding]
	);
};

export const paddingStyle = css<PaddingStyleProps>`
	padding-bottom: ${({ 'data-padding-bottom': paddingBottom }) => paddingBottom};
	padding-left: ${({ 'data-padding-left': paddingLeft }) => paddingLeft};
	padding-right: ${({ 'data-padding-right': paddingRight }) => paddingRight};
	padding-top: ${({ 'data-padding-top': paddingTop }) => paddingTop};
`;
