import { Context, useContext, useEffect, useMemo, useState } from 'react';
import { colorKeywords, colorNames, EasyFlexContext, globalValues, themeSizes } from '../constants';
import {
	AbsoluteSize,
	AspectRatio,
	BorderRadius,
	BorderWidth,
	Color,
	ColorKeyword,
	ColorName,
	CssAspectRatio,
	CssColor,
	CssFontWeight,
	CssLineHeight,
	CustomBorderRadiusSize,
	CustomName,
	CustomThemeSize,
	DeepPartial,
	Distance,
	EasyFlexTheme,
	ElementSize,
	ExtSize,
	Falsifiable,
	FontSize,
	FontWeight,
	GlobalValue,
	Height,
	LineHeight,
	Percent,
	Px,
	Rem,
	Size,
	ThemeSize,
	Vh,
	ViewportThreshold,
	Vw,
	Width,
} from '../types';

export const mergeEasyFlexThemes = <T>(weak: T, strong: DeepPartial<T>): T => {
	if (typeof weak === 'object' && typeof strong === 'object') {
		const tmp: T = {} as T;
		for (const key in weak) {
			const newWeak = weak[key];
			const newStrong = strong[key];
			if (newStrong === undefined) {
				tmp[key] = newWeak;
			} else if (newWeak === undefined) {
				tmp[key] = newStrong as T[Extract<keyof T, string>];
			} else {
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				tmp[key] = mergeEasyFlexThemes(newWeak, newStrong as any);
			}
		}
		return tmp;
	}
	return strong as T;
};

export const mergePartialEasyFlexThemes = <T>(weak: DeepPartial<T>, strong: DeepPartial<T>): DeepPartial<T> => {
	if (typeof weak === 'object' && typeof strong === 'object') {
		const tmp: DeepPartial<T> = {} as DeepPartial<T>;
		for (const key in weak) {
			const newWeak = weak[key as unknown as keyof DeepPartial<T>];
			const newStrong = strong[key as unknown as keyof DeepPartial<T>];
			if (newStrong === undefined) {
				tmp[key] = newWeak as DeepPartial<T>[Extract<keyof DeepPartial<T>, string>];
			} else if (newWeak === undefined) {
				tmp[key] = newStrong as DeepPartial<T>[Extract<keyof DeepPartial<T>, string>];
			} else {
				tmp[key as unknown as keyof DeepPartial<T>] = mergePartialEasyFlexThemes(
					newWeak as unknown as DeepPartial<T>,
					newStrong as unknown as DeepPartial<T>
				) as unknown as DeepPartial<T>[Extract<keyof DeepPartial<T>, string>];
			}
		}
		for (const key in strong) {
			const newWeak = weak[key as unknown as keyof DeepPartial<T>];
			const newStrong = strong[key as unknown as keyof DeepPartial<T>];
			if (newStrong === undefined) {
				tmp[key] = newWeak as DeepPartial<T>[Extract<keyof DeepPartial<T>, string>];
			} else if (newWeak === undefined) {
				tmp[key] = newStrong as DeepPartial<T>[Extract<keyof DeepPartial<T>, string>];
			} else {
				tmp[key as unknown as keyof DeepPartial<T>] = mergePartialEasyFlexThemes(
					newWeak as unknown as DeepPartial<T>,
					newStrong as unknown as DeepPartial<T>
				) as unknown as DeepPartial<T>[Extract<keyof DeepPartial<T>, string>];
			}
		}
		return tmp;
	}
	return strong;
};

export const isGlobalValue = (value: unknown): value is GlobalValue =>
	typeof value === 'string' && globalValues.includes(value);

export const isCustomName = (value: unknown): value is CustomName => typeof value === 'string' && !!value.match(/^_/);

// export const isColorCode = <CustomColor extends CustomName>(color: Color<CustomColor>): color is ColorCode =>
// 	!!color.match(/#[0-9a-f]{6}/);

export const isColorKeyword = <CustomColor extends CustomName>(color: Color<CustomColor>): color is ColorKeyword =>
	colorKeywords.includes(color);

export const isColorName = <CustomColor extends CustomName>(color: Color<CustomColor>): color is ColorName =>
	colorNames.includes(color);

// export const isCssColor = <CustomColor extends CustomName>(color: Color<CustomColor>): color is CssColor =>
// 	isGlobalValue(color) || isColorCode(color) || isColorKeyword(color) || isColorName(color);

export const isThemeSizeX = (size: unknown): size is ThemeSize => typeof size === 'string' && themeSizes.includes(size);

export const isThemeSize = <T extends CustomName>(size: unknown): size is CustomThemeSize<T> =>
	isThemeSizeX(size) || isCustomName(size);

export const isBorderRadiusSize = <T extends CustomName>(size: unknown): size is CustomBorderRadiusSize<T> =>
	isThemeSize(size) || size === 'round';

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
	} else if (isVw(value)) {
		return vwToNumber(value);
	}
	return Number(value);
};

export const sizeToNumber = (value: Size): number => {
	if (isAbsoluteSize(value)) {
		return absoluteSizeToNumber(value);
	}
	return percentToNumber(value);
};

export const getAspectRatio = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	aspectRatio: AspectRatio<CustomAspectRatio>
): CssAspectRatio => (isCustomName(aspectRatio) ? theme.size.aspectRatio[aspectRatio] : aspectRatio);

export const getBorderRadius = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	borderRadius: BorderRadius<CustomBorderRadius>
): Size => (isBorderRadiusSize(borderRadius) ? theme.border.radius[borderRadius] : borderRadius);

export const getBorderWidth = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	borderWidth: BorderWidth<CustomBorderWidth>
): AbsoluteSize => (isThemeSize(borderWidth) ? theme.border.width[borderWidth] : borderWidth);

export const getColor = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	color: Color<CustomColor>
): CssColor => (isCustomName(color) ? theme.color[color] : color);

export const getDistance = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	distance: Distance<CustomDistance>
): AbsoluteSize => (isThemeSize(distance) ? theme.distance[distance] : distance);

export const getFontSize = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	fontSize: FontSize<CustomFontSize>
): ExtSize => (isThemeSize(fontSize) ? theme.font.size[fontSize] : fontSize);

export const getFontWeight = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	fontWeight: FontWeight<CustomFontWeight>
): CssFontWeight => (typeof fontWeight === 'number' ? fontWeight : theme.font.weight[fontWeight]);

export const getHeight = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	height: Height<CustomHeight>
): ElementSize => (isThemeSize(height) ? theme.size.height[height] : height);

export const getLineHeight = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	lineHeight: LineHeight<CustomLineHeight>
): CssLineHeight => (isThemeSize(lineHeight) ? theme.font.lineHeight[lineHeight] : lineHeight);

export const getViewportThreshold = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	viewportThreshold: ViewportThreshold<CustomViewportThreshold>
): number => (typeof viewportThreshold === 'number' ? viewportThreshold : theme.viewport.threshold[viewportThreshold]);

export const getWidth = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(
	theme: EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>,
	width: Width<CustomWidth>
): ElementSize => (isThemeSize(width) ? theme.size.width[width] : width);

export const useEasyFlexTheme = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>(): EasyFlexTheme<
	CustomAspectRatio,
	CustomBorderRadius,
	CustomBorderWidth,
	CustomColor,
	CustomDistance,
	CustomFontFamily,
	CustomFontSize,
	CustomFontWeight,
	CustomHeight,
	CustomLineHeight,
	CustomViewportThreshold,
	CustomWidth
> =>
	useContext(
		EasyFlexContext as unknown as Context<
			EasyFlexTheme<
				CustomAspectRatio,
				CustomBorderRadius,
				CustomBorderWidth,
				CustomColor,
				CustomDistance,
				CustomFontFamily,
				CustomFontSize,
				CustomFontWeight,
				CustomHeight,
				CustomLineHeight,
				CustomViewportThreshold,
				CustomWidth
			>
		>
	);

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

export const useModalContainer = (containerElementId: Falsifiable<string> | undefined): HTMLElement => {
	const theme = useEasyFlexTheme();

	return useMemo<HTMLElement>(
		() => document.getElementById(defalsify(containerElementId) ?? theme.modal.containerElementId) ?? document.body,
		[containerElementId, theme]
	);
};

export const useViewport = <CustomViewportThreshold extends CustomName>(): Record<
	CustomThemeSize<CustomViewportThreshold>,
	boolean
> => {
	const theme = useEasyFlexTheme<
		never,
		never,
		never,
		never,
		never,
		never,
		never,
		never,
		never,
		never,
		CustomViewportThreshold,
		never
	>();
	const { width } = useDimension();

	return useMemo<Record<CustomThemeSize<CustomViewportThreshold>, boolean>>(() => {
		const viewport: Record<CustomThemeSize<CustomViewportThreshold>, boolean> = {} as Record<
			CustomThemeSize<CustomViewportThreshold>,
			boolean
		>;
		for (const key in theme.viewport.threshold) {
			viewport[key as CustomThemeSize<CustomViewportThreshold>] =
				width >= getViewportThreshold(theme, key as CustomThemeSize<CustomViewportThreshold>);
		}
		return viewport;
	}, [theme, width]);
};

export const viewportAtLeast =
	<CustomViewportThreshold extends CustomName>(
		width: CustomThemeSize<CustomViewportThreshold>
	): ((props: {
		theme: {
			viewport: Pick<
				EasyFlexTheme<
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					CustomViewportThreshold,
					never
				>['viewport'],
				'threshold'
			>;
		};
	}) => string) =>
	({
		theme,
	}: {
		theme: {
			viewport: Pick<
				EasyFlexTheme<
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					CustomViewportThreshold,
					never
				>['viewport'],
				'threshold'
			>;
		};
	}) =>
		`@media (width >= ${toPx(theme.viewport.threshold[width])})`;

export const viewportLessThan =
	<CustomViewportThreshold extends CustomName>(
		width: CustomThemeSize<CustomViewportThreshold>
	): ((props: {
		theme: {
			viewport: Pick<
				EasyFlexTheme<
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					CustomViewportThreshold,
					never
				>['viewport'],
				'threshold'
			>;
		};
	}) => string) =>
	({
		theme,
	}: {
		theme: {
			viewport: Pick<
				EasyFlexTheme<
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					CustomViewportThreshold,
					never
				>['viewport'],
				'threshold'
			>;
		};
	}) =>
		`@media (width  < ${toPx(theme.viewport.threshold[width])})`;
