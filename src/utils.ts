import { useContext, useEffect, useMemo, useState } from 'react';
import { EasyFlexContext, themeColors, themeSizes } from './constants';
import {
	IAbsoluteSize,
	IBorderRadius,
	IColor,
	ICssColor,
	ICssFontWeight,
	ICssLineHeight,
	IDistance,
	IEasyFlexTheme,
	IFontSize,
	IFontWeight,
	IHeight,
	ILineHeight,
	IPercent,
	IPx,
	IRem,
	ISize,
	IThemeColor,
	IThemeSize,
	IViewportThreshold,
	IWidth,
} from './types';

export const isIThemeColor = (color: IColor): color is IThemeColor => themeColors.includes(color);

export const isIThemeSize = (size: unknown): size is IThemeSize =>
	typeof size === 'string' && themeSizes.includes(size);

export const isIPercent = (value: unknown): value is IPx =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?%$/) : false;

export const isIPx = (value: unknown): value is IPx =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?px$/i) : false;

export const isIRem = (value: unknown): value is IRem =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?rem$/i) : false;

export const isIVh = (value: unknown): value is IRem =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?vh$/i) : false;

export const isIVw = (value: unknown): value is IRem =>
	typeof value === 'string' ? !!value.match(/^\d+(\.\d+)?vw$/i) : false;

export const isIAbsoluteSize = (value: unknown): value is IAbsoluteSize => isIPx(value) || isIRem(value);

export const isISize = (value: unknown): value is ISize => isIPercent(value) || isIAbsoluteSize(value);

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

export const toIPercent = (value: number): IPercent => `${value}%`;

export const toIPx = (value: number): IPx => `${value}px`;

export const toIRem = (value: number): IRem => `${value}rem`;

export const getBorderRadius = (theme: IEasyFlexTheme, borderRadius: IBorderRadius | IAbsoluteSize): IAbsoluteSize =>
	isIThemeSize(borderRadius) ? theme.border.radius[borderRadius] : borderRadius;

export const getBorderWidth = (theme: IEasyFlexTheme, borderWidth: IBorderRadius | IAbsoluteSize): IAbsoluteSize =>
	isIThemeSize(borderWidth) ? theme.border.width[borderWidth] : borderWidth;

export const getColor = (theme: IEasyFlexTheme, color: IColor): ICssColor =>
	isIThemeColor(color) ? theme.color[color] : color;

export const getDistance = (theme: IEasyFlexTheme, distance: IDistance | IAbsoluteSize): IAbsoluteSize =>
	isIThemeSize(distance) ? theme.distance[distance] : distance;

export const getFontSize = (theme: IEasyFlexTheme, fontSize: IFontSize | ISize): ISize =>
	isIThemeSize(fontSize) ? theme.font.size[fontSize] : fontSize;

export const getFontWeight = (theme: IEasyFlexTheme, fontWeight: IFontWeight | number): ICssFontWeight | number =>
	typeof fontWeight === 'number' ? fontWeight : theme.font.weight[fontWeight];

export const getHeight = (theme: IEasyFlexTheme, height: IHeight | ISize): ISize =>
	isIThemeSize(height) ? theme.size.height[height] : height;

export const getLineHeight = (theme: IEasyFlexTheme, lineHeight: ICssLineHeight | ILineHeight): ICssLineHeight =>
	isIThemeSize(lineHeight) ? theme.font.lineHeight[lineHeight] : lineHeight;

export const getViewportThreshold = (theme: IEasyFlexTheme, viewportThreshold: IViewportThreshold | number): number =>
	typeof viewportThreshold === 'number' ? viewportThreshold : theme.viewport.threshold[viewportThreshold];

export const getWidth = (theme: IEasyFlexTheme, width: IWidth | ISize): ISize =>
	isIThemeSize(width) ? theme.size.width[width] : width;

export const useEasyFlexTheme = (): IEasyFlexTheme => useContext(EasyFlexContext);

export const useColor = <T extends ICssColor | undefined>(
	color: IColor | undefined,
	fallback: T
): T extends ICssColor ? ICssColor : ICssColor | undefined => {
	const theme = useEasyFlexTheme();

	const processedColor = useMemo<ICssColor | undefined>(
		() => (color === undefined ? fallback : getColor(theme, color)),
		[color, fallback, theme]
	);

	return processedColor as T extends ICssColor ? ICssColor : ICssColor | undefined;
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
	margin?: IDistance | IAbsoluteSize;
	marginBottom?: IDistance | IAbsoluteSize;
	marginLeft?: IDistance | IAbsoluteSize;
	marginRight?: IDistance | IAbsoluteSize;
	marginTop?: IDistance | IAbsoluteSize;
	marginHorizontal?: IDistance | IAbsoluteSize;
	marginVertical?: IDistance | IAbsoluteSize;
	padding?: IDistance | IAbsoluteSize;
	paddingBottom?: IDistance | IAbsoluteSize;
	paddingLeft?: IDistance | IAbsoluteSize;
	paddingRight?: IDistance | IAbsoluteSize;
	paddingTop?: IDistance | IAbsoluteSize;
	paddingHorizontal?: IDistance | IAbsoluteSize;
	paddingVertical?: IDistance | IAbsoluteSize;
}): {
	margin: {
		bottom: IAbsoluteSize;
		left: IAbsoluteSize;
		right: IAbsoluteSize;
		top: IAbsoluteSize;
	};
	padding: {
		bottom: IAbsoluteSize;
		left: IAbsoluteSize;
		right: IAbsoluteSize;
		top: IAbsoluteSize;
	};
} => {
	const theme = useEasyFlexTheme();

	const processedMarginBottom = useMemo<IAbsoluteSize>(
		() => getDistance(theme, marginBottom ?? marginVertical ?? margin ?? '0px'),
		[margin, marginBottom, marginVertical, theme]
	);

	const processedMarginLeft = useMemo<IAbsoluteSize>(
		() => getDistance(theme, marginLeft ?? marginHorizontal ?? margin ?? '0px'),
		[margin, marginLeft, marginHorizontal, theme]
	);

	const processedMarginRight = useMemo<IAbsoluteSize>(
		() => getDistance(theme, marginRight ?? marginHorizontal ?? margin ?? '0px'),
		[margin, marginRight, marginHorizontal, theme]
	);

	const processedMarginTop = useMemo<IAbsoluteSize>(
		() => getDistance(theme, marginTop ?? marginVertical ?? margin ?? '0px'),
		[margin, marginTop, marginVertical, theme]
	);

	const processedPaddingBottom = useMemo<IAbsoluteSize>(
		() => getDistance(theme, paddingBottom ?? paddingVertical ?? padding ?? '0px'),
		[padding, paddingBottom, paddingVertical, theme]
	);

	const processedPaddingLeft = useMemo<IAbsoluteSize>(
		() => getDistance(theme, paddingLeft ?? paddingHorizontal ?? padding ?? '0px'),
		[padding, paddingLeft, paddingHorizontal, theme]
	);

	const processedPaddingRight = useMemo<IAbsoluteSize>(
		() => getDistance(theme, paddingRight ?? paddingHorizontal ?? padding ?? '0px'),
		[padding, paddingRight, paddingHorizontal, theme]
	);

	const processedPaddingTop = useMemo<IAbsoluteSize>(
		() => getDistance(theme, paddingTop ?? paddingVertical ?? padding ?? '0px'),
		[padding, paddingTop, paddingVertical, theme]
	);

	const processedMargin = useMemo<{
		bottom: IAbsoluteSize;
		left: IAbsoluteSize;
		right: IAbsoluteSize;
		top: IAbsoluteSize;
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
		bottom: IAbsoluteSize;
		left: IAbsoluteSize;
		right: IAbsoluteSize;
		top: IAbsoluteSize;
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
			bottom: IAbsoluteSize;
			left: IAbsoluteSize;
			right: IAbsoluteSize;
			top: IAbsoluteSize;
		};
		padding: {
			bottom: IAbsoluteSize;
			left: IAbsoluteSize;
			right: IAbsoluteSize;
			top: IAbsoluteSize;
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
	height?: IHeight | ISize;
	heightMax?: IHeight | ISize;
	heightMin?: IHeight | ISize;
	width?: IWidth | ISize;
	widthMax?: IWidth | ISize;
	widthMin?: IWidth | ISize;
}): {
	height: ISize | undefined;
	heightMax: ISize | undefined;
	heightMin: ISize | undefined;
	width: ISize | undefined;
	widthMax: ISize | undefined;
	widthMin: ISize | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedHeight = useMemo<ISize | undefined>(
		() => (fullHeight ? '100%' : ifNotUndefined(height, (height) => getHeight(theme, height))),
		[fullHeight, height, theme]
	);

	const processedHeightMax = useMemo<ISize | undefined>(
		() => ifNotUndefined(heightMax, (heightMax) => getHeight(theme, heightMax)),
		[heightMax, theme]
	);

	const processedHeightMin = useMemo<ISize | undefined>(
		() => ifNotUndefined(heightMin, (heightMin) => getHeight(theme, heightMin)),
		[heightMin, theme]
	);

	const processedWidth = useMemo<ISize | undefined>(
		() => (fullWidth ? '100%' : ifNotUndefined(width, (width) => getWidth(theme, width))),
		[fullWidth, theme, width]
	);

	const processedWidthMax = useMemo<ISize | undefined>(
		() => ifNotUndefined(widthMax, (widthMax) => getWidth(theme, widthMax)),
		[theme, widthMax]
	);

	const processedWidthMin = useMemo<ISize | undefined>(
		() => ifNotUndefined(widthMin, (widthMin) => getWidth(theme, widthMin)),
		[theme, widthMin]
	);

	const size = useMemo<{
		height: ISize | undefined;
		heightMax: ISize | undefined;
		heightMin: ISize | undefined;
		width: ISize | undefined;
		widthMax: ISize | undefined;
		widthMin: ISize | undefined;
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

export const useViewport = (): Record<'fallback' | IThemeSize, boolean> => {
	const theme = useEasyFlexTheme();
	const { width } = useDimension();

	const viewport = useMemo<Record<'fallback' | IThemeSize, boolean>>(
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
