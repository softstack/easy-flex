import { useContext, useEffect, useMemo, useState } from 'react';
import { EasyFlexContext, themeColors, themeSizes } from '../constants';
import {
	AbsoluteSize,
	BorderRadius,
	Color,
	CssColor,
	CssFontWeight,
	CssLineHeight,
	Distance,
	EasyFlexTheme,
	ElementSize,
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
} from '../types';

export const isThemeColor = (color: Color): color is ThemeColor => themeColors.includes(color);

export const isThemeSize = (size: unknown): size is ThemeSize => typeof size === 'string' && themeSizes.includes(size);

export const isPercent = (value: unknown): value is Px => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?%$/);

export const isPx = (value: unknown): value is Px => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?px$/i);

export const isRem = (value: unknown): value is Rem => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?rem$/i);

export const isVh = (value: unknown): value is Rem => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?vh$/i);

export const isVw = (value: unknown): value is Rem => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?vw$/i);

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

export const ifNotDefined = <T, U>(
	value: T,
	fn: (value: null | undefined) => U
): T extends null | undefined ? U : T => {
	if (value === null) {
		return fn(value as unknown as null) as T extends null | undefined ? U : T;
	}
	if (value === undefined) {
		return fn(value as unknown as undefined) as T extends null | undefined ? U : T;
	}
	return value as T extends null | undefined ? U : T;
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

export const ifUndefined = <T, U>(value: T, fn: () => U): T extends undefined ? U : T => {
	if (value === undefined) {
		return fn() as T extends undefined ? U : T;
	}
	return value as T extends undefined ? U : T;
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

export const getHeight = (theme: EasyFlexTheme, height: Height | ElementSize): ElementSize =>
	isThemeSize(height) ? theme.size.height[height] : height;

export const getLineHeight = (theme: EasyFlexTheme, lineHeight: CssLineHeight | LineHeight): CssLineHeight =>
	isThemeSize(lineHeight) ? theme.font.lineHeight[lineHeight] : lineHeight;

export const getViewportThreshold = (theme: EasyFlexTheme, viewportThreshold: ViewportThreshold | number): number =>
	typeof viewportThreshold === 'number' ? viewportThreshold : theme.viewport.threshold[viewportThreshold];

export const getWidth = (theme: EasyFlexTheme, width: Width | ElementSize): ElementSize =>
	isThemeSize(width) ? theme.size.width[width] : width;

export const useEasyFlexTheme = (): EasyFlexTheme => useContext(EasyFlexContext);

export const useColor = <T extends CssColor | undefined>(
	color: Color | undefined,
	fallback: T
): T extends CssColor ? CssColor : CssColor | undefined => {
	const theme = useEasyFlexTheme();

	return useMemo<CssColor | undefined>(
		() => (color === undefined ? fallback : getColor(theme, color)),
		[color, fallback, theme]
	) as T extends CssColor ? CssColor : CssColor | undefined;
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

	return useMemo<{
		height: number;
		width: number;
	}>(() => ({ height, width }), [height, width]);
};

export const useViewport = (): Record<'default' | ThemeSize, boolean> => {
	const theme = useEasyFlexTheme();
	const { width } = useDimension();

	return useMemo<Record<'default' | ThemeSize, boolean>>(
		() => ({
			default: width >= theme.viewport.defaultThreshold,
			'8xs': width >= getViewportThreshold(theme, '8xs'),
			'7xs': width >= getViewportThreshold(theme, '7xs'),
			'6xs': width >= getViewportThreshold(theme, '6xs'),
			'5xs': width >= getViewportThreshold(theme, '5xs'),
			'4xs': width >= getViewportThreshold(theme, '4xs'),
			'3xs': width >= getViewportThreshold(theme, '3xs'),
			xxs: width >= getViewportThreshold(theme, 'xxs'),
			xs: width >= getViewportThreshold(theme, 'xs'),
			s: width >= getViewportThreshold(theme, 's'),
			m: width >= getViewportThreshold(theme, 'm'),
			l: width >= getViewportThreshold(theme, 'l'),
			xl: width >= getViewportThreshold(theme, 'xl'),
			xxl: width >= getViewportThreshold(theme, 'xxl'),
			'3xl': width >= getViewportThreshold(theme, '3xl'),
			'4xl': width >= getViewportThreshold(theme, '4xl'),
			'5xl': width >= getViewportThreshold(theme, '5xl'),
			'6xl': width >= getViewportThreshold(theme, '6xl'),
			'7xl': width >= getViewportThreshold(theme, '7xl'),
			'8xl': width >= getViewportThreshold(theme, '8xl'),
		}),
		[theme, width]
	);
};
