import { useMemo } from 'react';
import { css } from 'styled-components';
import { Height, Size, Width } from '../types';
import { getHeight, getWidth, ifNotUndefined, useEasyFlexTheme } from './base';

export interface SizeProps {
	/** Sets the component's height to 100% if true. */
	fullHeight?: boolean;
	/** Sets the component's width to 100% if true. */
	fullWidth?: boolean;
	/** Component's height. */
	height?: Height | Size;
	/** Component's maximum height. */
	maxHeight?: Height | Size;
	/** Component's maximum width. */
	maxWidth?: Width | Size;
	/** Component's miniumum height. */
	minHeight?: Height | Size;
	/** Component's minimum width. */
	minWidth?: Width | Size;
	/** Component's width. */
	width?: Width | Size;
}

export interface SizeStyleProps {
	'data-height'?: Size;
	'data-height-max'?: Size;
	'data-height-min'?: Size;
	'data-width'?: Size;
	'data-width-max'?: Size;
	'data-width-min'?: Size;
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
	height: Size | undefined;
	maxHeight: Size | undefined;
	maxWidth: Size | undefined;
	minHeight: Size | undefined;
	minWidth: Size | undefined;
	width: Size | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedHeight = useMemo<Size | undefined>(
		() => (fullHeight ? '100%' : ifNotUndefined(height, (height) => getHeight(theme, height))),
		[fullHeight, height, theme]
	);

	const processedMaxHeight = useMemo<Size | undefined>(
		() => ifNotUndefined(maxHeight, (maxHeight) => getHeight(theme, maxHeight)),
		[maxHeight, theme]
	);

	const processedMaxWidth = useMemo<Size | undefined>(
		() => ifNotUndefined(maxWidth, (maxWidth) => getWidth(theme, maxWidth)),
		[theme, maxWidth]
	);

	const processedMinHeight = useMemo<Size | undefined>(
		() => ifNotUndefined(minHeight, (minHeight) => getHeight(theme, minHeight)),
		[minHeight, theme]
	);

	const processedMinWidth = useMemo<Size | undefined>(
		() => ifNotUndefined(minWidth, (minWidth) => getWidth(theme, minWidth)),
		[theme, minWidth]
	);

	const processedWidth = useMemo<Size | undefined>(
		() => (fullWidth ? '100%' : ifNotUndefined(width, (width) => getWidth(theme, width))),
		[fullWidth, theme, width]
	);

	return useMemo<{
		height: Size | undefined;
		maxHeight: Size | undefined;
		maxWidth: Size | undefined;
		minHeight: Size | undefined;
		minWidth: Size | undefined;
		width: Size | undefined;
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
