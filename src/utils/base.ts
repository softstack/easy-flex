import { useContext, useEffect, useMemo, useState } from 'react';
import { EasyFlexContext, themeColors, themeSizes } from '../constants';
import {
	AbsoluteSize,
	BorderRadius,
	BorderWidth,
	Color,
	CssColor,
	CssFontWeight,
	CssLineHeight,
	DeepPartial,
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
	Vh,
	ViewportThreshold,
	Vw,
	Width,
} from '../types';

export const mergeDeep = <T>(a: T, b: DeepPartial<T>): T => {
	if (b === undefined) {
		return a;
	} else if (typeof b === 'object') {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const tmp: any = {};
		for (const [key] of Object.entries(a) as unknown as Array<[keyof T, T]>) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			tmp[key] = mergeDeep(a[key], b[key as keyof DeepPartial<T>] as any);
		}
		return tmp;
	}
	return b as T;
};

export const isThemeColor = (color: Color): color is ThemeColor => themeColors.includes(color);

export const isThemeSize = (size: unknown): size is ThemeSize => typeof size === 'string' && themeSizes.includes(size);

export const isPercent = (value: unknown): value is Px => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?%$/);

export const isPx = (value: unknown): value is Px => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?px$/i);

export const isRem = (value: unknown): value is Rem => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?rem$/i);

export const isVh = (value: unknown): value is Vh => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?vh$/i);

export const isVw = (value: unknown): value is Vw => typeof value === 'string' && !!value.match(/^\d+(\.\d+)?vw$/i);

export const isAbsoluteSize = (value: unknown): value is AbsoluteSize => isPx(value) || isRem(value);

export const isSize = (value: unknown): value is Size => isPercent(value) || isAbsoluteSize(value);

export const ifDefined = <T, U>(
	value: T,
	fn: (value: Exclude<T, false | undefined>) => U
): T extends undefined ? undefined : U => {
	if ((value as unknown as boolean) === false || value === undefined) {
		return undefined as T extends undefined ? undefined : U;
	}
	return fn(value as Exclude<T, false | undefined>) as T extends undefined ? undefined : U;
};

export const defalsify = <T>(value: T | false): T | undefined => (value === false ? undefined : value);

export const toPercent = (value: number): Percent => `${value}%`;

export const toPx = (value: number): Px => `${value}px`;

export const toRem = (value: number): Rem => `${value}rem`;

export const toVh = (value: number): Vh => `${value}vh`;

export const toVw = (value: number): Vw => `${value}vw`;

export const percentToNumber = (value: Percent): number => {
	const match = value.match(/^(\d+(?:\.\d+)?)%$/i);
	if (!match) {
		throw new Error('Value is not of type Percent');
	}
	return Number(match[1]);
};

export const pxToNumber = (value: Px): number => {
	const match = value.match(/^(\d+(?:\.\d+)?)px$/i);
	if (!match) {
		throw new Error('Value is not of type Px');
	}
	return Number(match[1]);
};

export const remToNumber = (value: Rem): number => {
	const match = value.match(/^(\d+(?:\.\d+)?)rem$/i);
	if (!match) {
		throw new Error('Value is not of type Rem');
	}
	return Number(match[1]);
};

export const vhToNumber = (value: Vh): number => {
	const match = value.match(/^(\d+(?:\.\d+)?)vh$/i);
	if (!match) {
		throw new Error('Value is not of type Vh');
	}
	return Number(match[1]);
};

export const vwToNumber = (value: Vw): number => {
	const match = value.match(/^(\d+(?:\.\d+)?)vw$/i);
	if (!match) {
		throw new Error('Value is not of type Vw');
	}
	return Number(match[1]);
};

export const absoluteSizeToNumber = (value: AbsoluteSize): number => {
	if (isPx(value)) {
		return pxToNumber(value);
	} else if (isRem(value)) {
		return remToNumber(value);
	} else if (isVh(value)) {
		return vhToNumber(value);
	}
	return vwToNumber(value);
};

export const sizeToNumber = (value: Size): number => {
	if (isAbsoluteSize(value)) {
		return absoluteSizeToNumber(value);
	}
	return percentToNumber(value);
};

export const getBorderRadius = (theme: EasyFlexTheme, borderRadius: BorderRadius): Size =>
	isThemeSize(borderRadius) ? theme.border.radius[borderRadius] : borderRadius;

export const getBorderWidth = (theme: EasyFlexTheme, borderWidth: BorderWidth): AbsoluteSize =>
	isThemeSize(borderWidth) ? theme.border.width[borderWidth] : borderWidth;

export const getColor = (theme: EasyFlexTheme, color: Color): CssColor =>
	isThemeColor(color) ? theme.color[color] : color;

export const getDistance = (theme: EasyFlexTheme, distance: Distance): AbsoluteSize =>
	isThemeSize(distance) ? theme.distance[distance] : distance;

export const getFontSize = (theme: EasyFlexTheme, fontSize: FontSize): Size =>
	isThemeSize(fontSize) ? theme.font.size[fontSize] : fontSize;

export const getFontWeight = (theme: EasyFlexTheme, fontWeight: FontWeight): CssFontWeight =>
	typeof fontWeight === 'number' ? fontWeight : theme.font.weight[fontWeight];

export const getHeight = (theme: EasyFlexTheme, height: Height): ElementSize =>
	isThemeSize(height) ? theme.size.height[height] : height;

export const getLineHeight = (theme: EasyFlexTheme, lineHeight: LineHeight): CssLineHeight =>
	isThemeSize(lineHeight) ? theme.font.lineHeight[lineHeight] : lineHeight;

export const getViewportThreshold = (theme: EasyFlexTheme, viewportThreshold: ViewportThreshold): number =>
	typeof viewportThreshold === 'number' ? viewportThreshold : theme.viewport.threshold[viewportThreshold];

export const getWidth = (theme: EasyFlexTheme, width: Width): ElementSize =>
	isThemeSize(width) ? theme.size.width[width] : width;

export const useEasyFlexTheme = (): EasyFlexTheme => useContext(EasyFlexContext);

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

export const useViewport = (): Record<ThemeSize | 'default', boolean> => {
	const theme = useEasyFlexTheme();
	const { width } = useDimension();

	return useMemo<Record<ThemeSize | 'default', boolean>>(
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
