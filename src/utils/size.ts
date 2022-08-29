import { useMemo } from 'react';
import { css } from 'styled-components';
import { Height, Size, Width } from '../types';
import { useSize } from './utils';

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

export const useSizeStyleProps = (data: {
	fullHeight?: boolean;
	fullWidth?: boolean;
	height?: Height | Size;
	heightMax?: Height | Size;
	heightMin?: Height | Size;
	width?: Width | Size;
	widthMax?: Width | Size;
	widthMin?: Width | Size;
}): SizeStyleProps => {
	const size = useSize(data);

	return useMemo<SizeStyleProps>(
		() => ({
			'data-height': size.height,
			'data-height-max': size.heightMax,
			'data-height-min': size.heightMin,
			'data-width': size.width,
			'data-width-max': size.widthMax,
			'data-width-min': size.widthMin,
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
