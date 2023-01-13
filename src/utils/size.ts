import { useMemo } from 'react';
import { css } from 'styled-components';
import { AspectRatio, CssAspectRatio, CustomName, ElementSize, Falsifiable, Height, Width } from '../types';
import { getAspectRatio, getHeight, getWidth, ifDefined, useEasyFlexTheme } from './base';

export interface SizeProps<
	CustomAspectRatio extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
> {
	aspectRatio?: Falsifiable<AspectRatio<CustomAspectRatio>>;
	/** Component's height. */
	height?: Falsifiable<Height<CustomHeight>>;
	/** Component's maximum height. */
	maxHeight?: Falsifiable<Height<CustomHeight>>;
	/** Component's maximum width. */
	maxWidth?: Falsifiable<Width<CustomWidth>>;
	/** Component's miniumum height. */
	minHeight?: Falsifiable<Height<CustomHeight>>;
	/** Component's minimum width. */
	minWidth?: Falsifiable<Width<CustomWidth>>;
	/** Component's width. */
	width?: Falsifiable<Width<CustomWidth>>;
}

export interface SizeStyleProps {
	'data-aspect-ratio': CssAspectRatio | undefined;
	'data-height': ElementSize | undefined;
	'data-height-max': ElementSize | undefined;
	'data-height-min': ElementSize | undefined;
	'data-width': ElementSize | undefined;
	'data-width-max': ElementSize | undefined;
	'data-width-min': ElementSize | undefined;
}

export const useSize = <
	CustomAspectRatio extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
>({
	aspectRatio,
	height,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	width,
}: SizeProps<CustomAspectRatio, CustomHeight, CustomWidth>): {
	aspectRatio: CssAspectRatio | undefined;
	height: ElementSize | undefined;
	maxHeight: ElementSize | undefined;
	maxWidth: ElementSize | undefined;
	minHeight: ElementSize | undefined;
	minWidth: ElementSize | undefined;
	width: ElementSize | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedAspectRatio = useMemo<CssAspectRatio | undefined>(
		() => ifDefined(aspectRatio, (aspectRatio) => getAspectRatio(theme, aspectRatio)),
		[aspectRatio, theme]
	);

	const processedHeight = useMemo<ElementSize | undefined>(
		() => ifDefined(height, (height) => getHeight(theme, height)),
		[height, theme]
	);

	const processedMaxHeight = useMemo<ElementSize | undefined>(
		() => ifDefined(maxHeight, (maxHeight) => getHeight(theme, maxHeight)),
		[maxHeight, theme]
	);

	const processedMaxWidth = useMemo<ElementSize | undefined>(
		() => ifDefined(maxWidth, (maxWidth) => getWidth(theme, maxWidth)),
		[theme, maxWidth]
	);

	const processedMinHeight = useMemo<ElementSize | undefined>(
		() => ifDefined(minHeight, (minHeight) => getHeight(theme, minHeight)),
		[minHeight, theme]
	);

	const processedMinWidth = useMemo<ElementSize | undefined>(
		() => ifDefined(minWidth, (minWidth) => getWidth(theme, minWidth)),
		[theme, minWidth]
	);

	const processedWidth = useMemo<ElementSize | undefined>(
		() => ifDefined(width, (width) => getWidth(theme, width)),
		[theme, width]
	);

	return useMemo<{
		aspectRatio: CssAspectRatio | undefined;
		height: ElementSize | undefined;
		maxHeight: ElementSize | undefined;
		maxWidth: ElementSize | undefined;
		minHeight: ElementSize | undefined;
		minWidth: ElementSize | undefined;
		width: ElementSize | undefined;
	}>(
		() => ({
			aspectRatio: processedAspectRatio,
			height: processedHeight,
			maxHeight: processedMaxHeight,
			maxWidth: processedMaxWidth,
			minHeight: processedMinHeight,
			minWidth: processedMinWidth,
			width: processedWidth,
		}),
		[
			processedAspectRatio,
			processedHeight,
			processedMaxHeight,
			processedMaxWidth,
			processedMinHeight,
			processedMinWidth,
			processedWidth,
		]
	);
};

export const useSizeStyleProps = <
	CustomAspectRatio extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
>(
	props: SizeProps<CustomAspectRatio, CustomHeight, CustomWidth>
): SizeStyleProps => {
	const size = useSize(props);

	return useMemo<SizeStyleProps>(
		() => ({
			'data-aspect-ratio': size.aspectRatio,
			'data-height': size.height,
			'data-height-max': size.maxHeight,
			'data-height-min': size.minHeight,
			'data-width': size.width,
			'data-width-max': size.maxWidth,
			'data-width-min': size.minWidth,
		}),
		[size]
	);
};

export const sizeStyle = css<SizeStyleProps>`
	aspect-ratio: ${({ 'data-aspect-ratio': aspectRatio }) => aspectRatio};
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height-max': heightMax }) => heightMax};
	min-height: ${({ 'data-height-min': heightMin }) => heightMin};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width-max': widthMax }) => widthMax};
	min-width: ${({ 'data-width-min': widthMin }) => widthMin};
`;
