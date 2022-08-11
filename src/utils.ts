import { useContext, useEffect, useMemo, useState } from 'react';
import { EasyFlexContext, themeColors, themeSizes } from './constants';
import {
	AbsoluteSize,
	BorderRadius,
	Color,
	CssColor,
	CssFontWeight,
	CssLineHeight,
	Distance,
	EasyFlexTheme,
	FontSize,
	FontWeight,
	Height,
	LineHeight,
	Percent,
	Px,
	Rem,
	Size,
	ThemeColor,
	ThemeSize,
	ViewportThreshold,
	Width,
} from './types';

export const isThemeColor = (color: Color): color is ThemeColor => themeColors.includes(color);

export const isThemeSize = (size: unknown): size is ThemeSize => typeof size === 'string' && themeSizes.includes(size);

export const isPercent = (value: unknown): value is Px =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?%$/) : false;

export const isPx = (value: unknown): value is Px =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?px$/i) : false;

export const isRem = (value: unknown): value is Rem =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?rem$/i) : false;

export const isVh = (value: unknown): value is Rem =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?vh$/i) : false;

export const isVw = (value: unknown): value is Rem =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?vw$/i) : false;

export const isAbsoluteSize = (value: unknown): value is AbsoluteSize => isPx(value) || isRem(value);

export const isSize = (value: unknown): value is Size => isPercent(value) || isAbsoluteSize(value);

export const ifDefined = <T, U>(
	value: T,
	fn: (value: Exclude<T, null | undefined>) => U
): T extends null & undefined
	? U | null | undefined
	: T extends null
	? U | null
	: T extends undefined
	? U | undefined
	: U => {
	if (value === null) {
		return null as T extends null & undefined
			? U | null | undefined
			: T extends null
			? U | null
			: T extends undefined
			? U | undefined
			: U;
	}
	if (value === undefined) {
		return undefined as T extends null & undefined
			? U | null | undefined
			: T extends null
			? U | null
			: T extends undefined
			? U | undefined
			: U;
	}
	return fn(value as Exclude<T, undefined | null>) as T extends null & undefined
		? U | null | undefined
		: T extends null
		? U | null
		: T extends undefined
		? U | undefined
		: U;
};

export const ifNotNull = <T, U>(value: T, fn: (value: Exclude<T, null>) => U): T extends null ? null : U => {
	if (value === null) {
		return null as T extends null ? null : U;
	}
	return fn(value as Exclude<T, null>) as T extends null ? null : U;
};

export const ifNotUndefined = <T, U>(
	value: T,
	fn: (value: Exclude<T, undefined>) => U
): T extends undefined ? undefined : U => {
	if (value === undefined) {
		return undefined as T extends undefined ? undefined : U;
	}
	return fn(value as Exclude<T, undefined>) as T extends undefined ? undefined : U;
};

export const toPercent = (value: number): Percent => `${value}%`;

export const toPx = (value: number): Px => `${value}px`;

export const toRem = (value: number): Rem => `${value}rem`;

export const pxToNumber = (px: Px): number => {
	const match = px.match(/^(\d+(?:\.\d+)?)px$/i);
	if (!match) {
		throw new Error('No px value');
	}
	return Number(match[1]);
};

export const getBorderRadius = (theme: EasyFlexTheme, borderRadius: BorderRadius | AbsoluteSize): AbsoluteSize =>
	isThemeSize(borderRadius) ? theme.border.radius[borderRadius] : borderRadius;

export const getBorderWidth = (theme: EasyFlexTheme, borderWidth: BorderRadius | AbsoluteSize): AbsoluteSize =>
	isThemeSize(borderWidth) ? theme.border.width[borderWidth] : borderWidth;

export const getColor = (theme: EasyFlexTheme, color: Color): CssColor =>
	isThemeColor(color) ? theme.color[color] : color;

export const getDistance = (theme: EasyFlexTheme, distance: Distance | AbsoluteSize): AbsoluteSize =>
	isThemeSize(distance) ? theme.distance[distance] : distance;

export const getFontSize = (theme: EasyFlexTheme, fontSize: FontSize | Size): Size =>
	isThemeSize(fontSize) ? theme.font.size[fontSize] : fontSize;

export const getFontWeight = (theme: EasyFlexTheme, fontWeight: FontWeight | number): CssFontWeight | number =>
	typeof fontWeight === 'number' ? fontWeight : theme.font.weight[fontWeight];

export const getHeight = (theme: EasyFlexTheme, height: Height | Size): Size =>
	isThemeSize(height) ? theme.size.height[height] : height;

export const getLineHeight = (theme: EasyFlexTheme, lineHeight: CssLineHeight | LineHeight): CssLineHeight =>
	isThemeSize(lineHeight) ? theme.font.lineHeight[lineHeight] : lineHeight;

export const getViewportThreshold = (theme: EasyFlexTheme, viewportThreshold: ViewportThreshold | number): number =>
	typeof viewportThreshold === 'number' ? viewportThreshold : theme.viewport.threshold[viewportThreshold];

export const getWidth = (theme: EasyFlexTheme, width: Width | Size): Size =>
	isThemeSize(width) ? theme.size.width[width] : width;

export const useEasyFlexTheme = (): EasyFlexTheme => useContext(EasyFlexContext);

export const useColor = <T extends CssColor | undefined>(
	color: Color | undefined,
	fallback: T
): T extends CssColor ? CssColor : CssColor | undefined => {
	const theme = useEasyFlexTheme();

	const processedColor = useMemo<CssColor | undefined>(
		() => (color === undefined ? fallback : getColor(theme, color)),
		[color, fallback, theme]
	);

	return processedColor as T extends CssColor ? CssColor : CssColor | undefined;
};

export const useDimension = (): { height: number; width: number } => {
	const [height, setHeight] = useState<number>(document.documentElement.clientHeight);
	const [width, setWidth] = useState<number>(document.documentElement.clientWidth);

	useEffect(() => {
		const handleResize = () => {
			setHeight(document.documentElement.clientHeight);
			setWidth(document.documentElement.clientWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const dimension = useMemo<{
		height: number;
		width: number;
	}>(() => ({ height, width }), [height, width]);

	return dimension;
};

export const useDistance = ({
	margin,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginHorizontal,
	marginVertical,
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingHorizontal,
	paddingVertical,
}: {
	margin?: Distance | AbsoluteSize;
	marginBottom?: Distance | AbsoluteSize;
	marginLeft?: Distance | AbsoluteSize;
	marginRight?: Distance | AbsoluteSize;
	marginTop?: Distance | AbsoluteSize;
	marginHorizontal?: Distance | AbsoluteSize;
	marginVertical?: Distance | AbsoluteSize;
	padding?: Distance | AbsoluteSize;
	paddingBottom?: Distance | AbsoluteSize;
	paddingLeft?: Distance | AbsoluteSize;
	paddingRight?: Distance | AbsoluteSize;
	paddingTop?: Distance | AbsoluteSize;
	paddingHorizontal?: Distance | AbsoluteSize;
	paddingVertical?: Distance | AbsoluteSize;
}): {
	margin: {
		bottom: AbsoluteSize;
		left: AbsoluteSize;
		right: AbsoluteSize;
		top: AbsoluteSize;
	};
	padding: {
		bottom: AbsoluteSize;
		left: AbsoluteSize;
		right: AbsoluteSize;
		top: AbsoluteSize;
	};
} => {
	const theme = useEasyFlexTheme();

	const processedMarginBottom = useMemo<AbsoluteSize>(
		() => getDistance(theme, marginBottom ?? marginVertical ?? margin ?? '0px'),
		[margin, marginBottom, marginVertical, theme]
	);

	const processedMarginLeft = useMemo<AbsoluteSize>(
		() => getDistance(theme, marginLeft ?? marginHorizontal ?? margin ?? '0px'),
		[margin, marginLeft, marginHorizontal, theme]
	);

	const processedMarginRight = useMemo<AbsoluteSize>(
		() => getDistance(theme, marginRight ?? marginHorizontal ?? margin ?? '0px'),
		[margin, marginRight, marginHorizontal, theme]
	);

	const processedMarginTop = useMemo<AbsoluteSize>(
		() => getDistance(theme, marginTop ?? marginVertical ?? margin ?? '0px'),
		[margin, marginTop, marginVertical, theme]
	);

	const processedPaddingBottom = useMemo<AbsoluteSize>(
		() => getDistance(theme, paddingBottom ?? paddingVertical ?? padding ?? '0px'),
		[padding, paddingBottom, paddingVertical, theme]
	);

	const processedPaddingLeft = useMemo<AbsoluteSize>(
		() => getDistance(theme, paddingLeft ?? paddingHorizontal ?? padding ?? '0px'),
		[padding, paddingLeft, paddingHorizontal, theme]
	);

	const processedPaddingRight = useMemo<AbsoluteSize>(
		() => getDistance(theme, paddingRight ?? paddingHorizontal ?? padding ?? '0px'),
		[padding, paddingRight, paddingHorizontal, theme]
	);

	const processedPaddingTop = useMemo<AbsoluteSize>(
		() => getDistance(theme, paddingTop ?? paddingVertical ?? padding ?? '0px'),
		[padding, paddingTop, paddingVertical, theme]
	);

	const processedMargin = useMemo<{
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

	const processedPadding = useMemo<{
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

	const distance = useMemo<{
		margin: {
			bottom: AbsoluteSize;
			left: AbsoluteSize;
			right: AbsoluteSize;
			top: AbsoluteSize;
		};
		padding: {
			bottom: AbsoluteSize;
			left: AbsoluteSize;
			right: AbsoluteSize;
			top: AbsoluteSize;
		};
	}>(
		() => ({
			margin: processedMargin,
			padding: processedPadding,
		}),
		[processedMargin, processedPadding]
	);

	return distance;
};

export const useSize = ({
	fullHeight,
	fullWidth,
	height,
	heightMax,
	heightMin,
	width,
	widthMax,
	widthMin,
}: {
	fullHeight: boolean;
	fullWidth: boolean;
	height?: Height | Size;
	heightMax?: Height | Size;
	heightMin?: Height | Size;
	width?: Width | Size;
	widthMax?: Width | Size;
	widthMin?: Width | Size;
}): {
	height: Size | undefined;
	heightMax: Size | undefined;
	heightMin: Size | undefined;
	width: Size | undefined;
	widthMax: Size | undefined;
	widthMin: Size | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedHeight = useMemo<Size | undefined>(
		() => (fullHeight ? '100%' : ifNotUndefined(height, (height) => getHeight(theme, height))),
		[fullHeight, height, theme]
	);

	const processedHeightMax = useMemo<Size | undefined>(
		() => ifNotUndefined(heightMax, (heightMax) => getHeight(theme, heightMax)),
		[heightMax, theme]
	);

	const processedHeightMin = useMemo<Size | undefined>(
		() => ifNotUndefined(heightMin, (heightMin) => getHeight(theme, heightMin)),
		[heightMin, theme]
	);

	const processedWidth = useMemo<Size | undefined>(
		() => (fullWidth ? '100%' : ifNotUndefined(width, (width) => getWidth(theme, width))),
		[fullWidth, theme, width]
	);

	const processedWidthMax = useMemo<Size | undefined>(
		() => ifNotUndefined(widthMax, (widthMax) => getWidth(theme, widthMax)),
		[theme, widthMax]
	);

	const processedWidthMin = useMemo<Size | undefined>(
		() => ifNotUndefined(widthMin, (widthMin) => getWidth(theme, widthMin)),
		[theme, widthMin]
	);

	const size = useMemo<{
		height: Size | undefined;
		heightMax: Size | undefined;
		heightMin: Size | undefined;
		width: Size | undefined;
		widthMax: Size | undefined;
		widthMin: Size | undefined;
	}>(
		() => ({
			height: processedHeight,
			heightMax: processedHeightMax,
			heightMin: processedHeightMin,
			width: processedWidth,
			widthMax: processedWidthMax,
			widthMin: processedWidthMin,
		}),
		[processedHeight, processedHeightMax, processedHeightMin, processedWidth, processedWidthMax, processedWidthMin]
	);

	return size;
};

export const useViewport = (): Record<'fallback' | ThemeSize, boolean> => {
	const theme = useEasyFlexTheme();
	const { width } = useDimension();

	const viewport = useMemo<Record<'fallback' | ThemeSize, boolean>>(
		() => ({
			fallback: width < theme.viewport.fallbackThreshold,
			'8xs': width < getViewportThreshold(theme, '8xs'),
			'7xs': width < getViewportThreshold(theme, '7xs'),
			'6xs': width < getViewportThreshold(theme, '6xs'),
			'5xs': width < getViewportThreshold(theme, '5xs'),
			'4xs': width < getViewportThreshold(theme, '4xs'),
			'3xs': width < getViewportThreshold(theme, '3xs'),
			xxs: width < getViewportThreshold(theme, 'xxs'),
			xs: width < getViewportThreshold(theme, 'xs'),
			s: width < getViewportThreshold(theme, 's'),
			m: width < getViewportThreshold(theme, 'm'),
			l: width < getViewportThreshold(theme, 'l'),
			xl: width < getViewportThreshold(theme, 'xl'),
			xxl: width < getViewportThreshold(theme, 'xxl'),
			'3xl': width < getViewportThreshold(theme, '3xl'),
			'4xl': width < getViewportThreshold(theme, '4xl'),
			'5xl': width < getViewportThreshold(theme, '5xl'),
			'6xl': width < getViewportThreshold(theme, '6xl'),
			'7xl': width < getViewportThreshold(theme, '7xl'),
			'8xl': width < getViewportThreshold(theme, '8xl'),
		}),
		[theme, width]
	);

	return viewport;
};
