import { useMemo } from 'react';
import { css } from 'styled-components';
import { CustomName, ElementSize, Falsifiable, Height, Width } from '../types';
import { getHeight, getWidth, ifDefined, useEasyFlexTheme } from './base';

export interface SizeProps<CustomHeight extends CustomName, CustomWidth extends CustomName> {
	/** Sets the component's height to 100% if true. */
	fullHeight?: boolean;
	/** Sets the component's width to 100% if true. */
	fullWidth?: boolean;
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
	'data-height': ElementSize | undefined;
	'data-height-max': ElementSize | undefined;
	'data-height-min': ElementSize | undefined;
	'data-width': ElementSize | undefined;
	'data-width-max': ElementSize | undefined;
	'data-width-min': ElementSize | undefined;
}

export const useSize = <CustomHeight extends CustomName, CustomWidth extends CustomName>({
	fullHeight = false,
	fullWidth = false,
	height,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	width,
}: SizeProps<CustomHeight, CustomWidth>): {
	height: ElementSize | undefined;
	maxHeight: ElementSize | undefined;
	maxWidth: ElementSize | undefined;
	minHeight: ElementSize | undefined;
	minWidth: ElementSize | undefined;
	width: ElementSize | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedHeight = useMemo<ElementSize | undefined>(
		() => (fullHeight ? '100%' : ifDefined(height, (height) => getHeight(theme, height))),
		[fullHeight, height, theme]
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
		() => (fullWidth ? '100%' : ifDefined(width, (width) => getWidth(theme, width))),
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

export const useSizeStyleProps = <CustomHeight extends CustomName, CustomWidth extends CustomName>(
	props: SizeProps<CustomHeight, CustomWidth>
): SizeStyleProps => {
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
