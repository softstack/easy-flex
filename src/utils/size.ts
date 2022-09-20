import { useMemo } from 'react';
import { css } from 'styled-components';
import { ElementSize, Height, Width } from '../types';
import { getHeight, getWidth, ifNotUndefined, useEasyFlexTheme } from './base';

export interface SizeProps {
	/** Sets the component's height to 100% if true. */
	fullHeight?: boolean;
	/** Sets the component's width to 100% if true. */
	fullWidth?: boolean;
	/** Component's height. */
	height?: Height;
	/** Component's maximum height. */
	maxHeight?: Height;
	/** Component's maximum width. */
	maxWidth?: Width;
	/** Component's miniumum height. */
	minHeight?: Height;
	/** Component's minimum width. */
	minWidth?: Width;
	/** Component's width. */
	width?: Width;
}

export interface SizeStyleProps {
	'data-height'?: ElementSize;
	'data-height-max'?: ElementSize;
	'data-height-min'?: ElementSize;
	'data-width'?: ElementSize;
	'data-width-max'?: ElementSize;
	'data-width-min'?: ElementSize;
}

export const useSize = ({
	fullHeight = false,
	fullWidth = false,
	height,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	width,
}: SizeProps): {
	height: ElementSize | undefined;
	maxHeight: ElementSize | undefined;
	maxWidth: ElementSize | undefined;
	minHeight: ElementSize | undefined;
	minWidth: ElementSize | undefined;
	width: ElementSize | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedHeight = useMemo<ElementSize | undefined>(
		() => (fullHeight ? '100%' : ifNotUndefined(height, (height) => getHeight(theme, height))),
		[fullHeight, height, theme]
	);

	const processedMaxHeight = useMemo<ElementSize | undefined>(
		() => ifNotUndefined(maxHeight, (maxHeight) => getHeight(theme, maxHeight)),
		[maxHeight, theme]
	);

	const processedMaxWidth = useMemo<ElementSize | undefined>(
		() => ifNotUndefined(maxWidth, (maxWidth) => getWidth(theme, maxWidth)),
		[theme, maxWidth]
	);

	const processedMinHeight = useMemo<ElementSize | undefined>(
		() => ifNotUndefined(minHeight, (minHeight) => getHeight(theme, minHeight)),
		[minHeight, theme]
	);

	const processedMinWidth = useMemo<ElementSize | undefined>(
		() => ifNotUndefined(minWidth, (minWidth) => getWidth(theme, minWidth)),
		[theme, minWidth]
	);

	const processedWidth = useMemo<ElementSize | undefined>(
		() => (fullWidth ? '100%' : ifNotUndefined(width, (width) => getWidth(theme, width))),
		[fullWidth, theme, width]
	);

	return useMemo<{
		height: ElementSize | undefined;
		maxHeight: ElementSize | undefined;
		maxWidth: ElementSize | undefined;
		minHeight: ElementSize | undefined;
		minWidth: ElementSize | undefined;
		width: ElementSize | undefined;
	}>(
		() => ({
			height: processedHeight,
			maxHeight: processedMaxHeight,
			maxWidth: processedMaxWidth,
			minHeight: processedMinHeight,
			minWidth: processedMinWidth,
			width: processedWidth,
		}),
		[processedHeight, processedMaxHeight, processedMaxWidth, processedMinHeight, processedMinWidth, processedWidth]
	);
};

export const useSizeStyleProps = (props: SizeProps): SizeStyleProps => {
	const size = useSize(props);

	return useMemo<SizeStyleProps>(
		() => ({
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
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height-max': heightMax }) => heightMax};
	min-height: ${({ 'data-height-min': heightMin }) => heightMin};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width-max': widthMax }) => widthMax};
	min-width: ${({ 'data-width-min': widthMin }) => widthMin};
`;
