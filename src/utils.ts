import { useContext, useEffect, useMemo, useState } from 'react';
import { EasyFlexContext } from './constants';
import {
	IBorderRadius,
	IColor,
	IDistance,
	IEasyFlexTheme,
	IFontSize,
	IFontWeight,
	IHeight,
	IViewportThreshold,
	IWidth,
} from './types';

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

export const ifNotNull = <T, U>(value: T, fn: (value: Exclude<T, null>) => U): T extends null ? U | null : U => {
	if (value === null) {
		return null as T extends null ? U | null : U;
	}
	return fn(value as Exclude<T, null>) as T extends null ? U | null : U;
};

export const ifNotUndefined = <T, U>(
	value: T,
	fn: (value: Exclude<T, undefined>) => U
): T extends undefined ? U | undefined : U => {
	if (value === undefined) {
		return undefined as T extends undefined ? U | undefined : U;
	}
	return fn(value as Exclude<T, undefined>) as T extends undefined ? U | undefined : U;
};

export const toPx = (value: number): string => `${value}px`;

export const toRem = (value: number): string => `${value}rem`;

export const getBorderRadius = (theme: IEasyFlexTheme, borderRadius: IBorderRadius | number) =>
	typeof borderRadius === 'number' ? borderRadius : theme.border.radius[borderRadius];

export const getBorderWidth = (theme: IEasyFlexTheme, borderWidth: IBorderRadius | number) =>
	typeof borderWidth === 'number' ? borderWidth : theme.border.width[borderWidth];

export const getColor = (theme: IEasyFlexTheme, color: IColor): string =>
	color === 'inherit' ? 'inherit' : theme.color[color];

export const getDistance = (theme: IEasyFlexTheme, distance: IDistance | number): number =>
	typeof distance === 'number' ? distance : theme.distance[distance];

export const getFontSize = (theme: IEasyFlexTheme, fontSize: IFontSize | number): number =>
	typeof fontSize === 'number' ? fontSize : theme.font.size[fontSize];

export const getFontWeight = (theme: IEasyFlexTheme, fontWeight: IFontWeight | number): number | string =>
	typeof fontWeight === 'number' ? fontWeight : theme.font.weight[fontWeight];

export const getHeight = (theme: IEasyFlexTheme, height: IHeight | number): number =>
	typeof height === 'number' ? height : theme.size.height[height];

export const getViewportThreshold = (theme: IEasyFlexTheme, viewportThreshold: IViewportThreshold): number =>
	theme.viewport.threshold[viewportThreshold];

export const getWidth = (theme: IEasyFlexTheme, width: IWidth | number): number =>
	typeof width === 'number' ? width : theme.size.width[width];

export const useEasyFlexTheme = () => useContext(EasyFlexContext);

export const useColor = <T = string | undefined>(
	color: IColor | undefined,
	fallback: T
): T extends undefined ? string | T : string => {
	const theme = useEasyFlexTheme();

	const processedColor = useMemo<string | T>(
		() => (color === undefined ? fallback : getColor(theme, color)),
		[color, fallback, theme]
	);

	return processedColor as T extends undefined ? string | T : string;
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
	marginX,
	marginY,
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
}: {
	margin?: IDistance | number;
	marginBottom?: IDistance | number;
	marginLeft?: IDistance | number;
	marginRight?: IDistance | number;
	marginTop?: IDistance | number;
	marginX?: IDistance | number;
	marginY?: IDistance | number;
	padding?: IDistance | number;
	paddingBottom?: IDistance | number;
	paddingLeft?: IDistance | number;
	paddingRight?: IDistance | number;
	paddingTop?: IDistance | number;
	paddingX?: IDistance | number;
	paddingY?: IDistance | number;
}): {
	margin: {
		bottom: string;
		left: string;
		right: string;
		top: string;
	};
	padding: {
		bottom: string;
		left: string;
		right: string;
		top: string;
	};
} => {
	const theme = useEasyFlexTheme();

	const processedMarginBottom = useMemo<string>(
		() => toPx(getDistance(theme, marginBottom ?? marginY ?? margin ?? 0)),
		[margin, marginBottom, marginY, theme]
	);

	const processedMarginLeft = useMemo<string>(
		() => toPx(getDistance(theme, marginLeft ?? marginX ?? margin ?? 0)),
		[margin, marginLeft, marginX, theme]
	);

	const processedMarginRight = useMemo<string>(
		() => toPx(getDistance(theme, marginRight ?? marginX ?? margin ?? 0)),
		[margin, marginRight, marginX, theme]
	);

	const processedMarginTop = useMemo<string>(
		() => toPx(getDistance(theme, marginTop ?? marginY ?? margin ?? 0)),
		[margin, marginTop, marginY, theme]
	);

	const processedPaddingBottom = useMemo<string>(
		() => toPx(getDistance(theme, paddingBottom ?? paddingY ?? padding ?? 0)),
		[padding, paddingBottom, paddingY, theme]
	);

	const processedPaddingLeft = useMemo<string>(
		() => toPx(getDistance(theme, paddingLeft ?? paddingX ?? padding ?? 0)),
		[padding, paddingLeft, paddingX, theme]
	);

	const processedPaddingRight = useMemo<string>(
		() => toPx(getDistance(theme, paddingRight ?? paddingX ?? padding ?? 0)),
		[padding, paddingRight, paddingX, theme]
	);

	const processedPaddingTop = useMemo<string>(
		() => toPx(getDistance(theme, paddingTop ?? paddingY ?? padding ?? 0)),
		[padding, paddingTop, paddingY, theme]
	);

	const processedMargin = useMemo<{
		bottom: string;
		left: string;
		right: string;
		top: string;
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
		bottom: string;
		left: string;
		right: string;
		top: string;
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
			bottom: string;
			left: string;
			right: string;
			top: string;
		};
		padding: {
			bottom: string;
			left: string;
			right: string;
			top: string;
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
	height?: IHeight | number;
	heightMax?: IHeight | number;
	heightMin?: IHeight | number;
	width?: IWidth | number;
	widthMax?: IWidth | number;
	widthMin?: IWidth | number;
}): {
	height: string | undefined;
	heightMax: string | undefined;
	heightMin: string | undefined;
	width: string | undefined;
	widthMax: string | undefined;
	widthMin: string | undefined;
} => {
	const theme = useEasyFlexTheme();

	const processedHeight = useMemo<string | undefined>(
		() => (fullHeight ? '100%' : ifNotUndefined(height, (height) => toPx(getHeight(theme, height)))),
		[fullHeight, height, theme]
	);

	const processedHeightMax = useMemo<string | undefined>(
		() => ifNotUndefined(heightMax, (heightMax) => toPx(getHeight(theme, heightMax))),
		[heightMax, theme]
	);

	const processedHeightMin = useMemo<string | undefined>(
		() => ifNotUndefined(heightMin, (heightMin) => toPx(getHeight(theme, heightMin))),
		[heightMin, theme]
	);

	const processedWidth = useMemo<string | undefined>(
		() => (fullWidth ? '100%' : ifNotUndefined(width, (width) => toPx(getWidth(theme, width)))),
		[fullWidth, theme, width]
	);

	const processedWidthMax = useMemo<string | undefined>(
		() => ifNotUndefined(widthMax, (widthMax) => toPx(getWidth(theme, widthMax))),
		[theme, widthMax]
	);

	const processedWidthMin = useMemo<string | undefined>(
		() => ifNotUndefined(widthMin, (widthMin) => toPx(getWidth(theme, widthMin))),
		[theme, widthMin]
	);

	const size = useMemo<{
		height: string | undefined;
		heightMax: string | undefined;
		heightMin: string | undefined;
		width: string | undefined;
		widthMax: string | undefined;
		widthMin: string | undefined;
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

export const useViewport = (): {
	fallback: boolean;
	'8xs': boolean;
	'7xs': boolean;
	'6xs': boolean;
	'5xs': boolean;
	'4xs': boolean;
	'3xs': boolean;
	xxs: boolean;
	xs: boolean;
	s: boolean;
	m: boolean;
	l: boolean;
	xl: boolean;
	xxl: boolean;
	'3xl': boolean;
	'4xl': boolean;
	'5xl': boolean;
	'6xl': boolean;
	'7xl': boolean;
	'8xl': boolean;
} => {
	const theme = useEasyFlexTheme();
	const { width } = useDimension();

	const viewport = useMemo<{
		fallback: boolean;
		'8xs': boolean;
		'7xs': boolean;
		'6xs': boolean;
		'5xs': boolean;
		'4xs': boolean;
		'3xs': boolean;
		xxs: boolean;
		xs: boolean;
		s: boolean;
		m: boolean;
		l: boolean;
		xl: boolean;
		xxl: boolean;
		'3xl': boolean;
		'4xl': boolean;
		'5xl': boolean;
		'6xl': boolean;
		'7xl': boolean;
		'8xl': boolean;
	}>(
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
