import { useContext, useEffect, useMemo, useState } from 'react';
import { EasyFlexContext } from './constants';
import { IColor, IDistance, IEasyFlexTheme, IFlipThreshold, IFontSize, IFontWeight } from './types';

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

export const getDistance = (theme: IEasyFlexTheme, distance: number | IDistance): number => {
	if (typeof distance === 'number') {
		return distance;
	}
	return theme.distance[distance];
};

export const getFontSize = (theme: IEasyFlexTheme, fontSize: number | IFontSize): number => {
	if (typeof fontSize === 'number') {
		return fontSize;
	}
	return theme.fontSize[fontSize];
};

export const getFontWeight = (theme: IEasyFlexTheme, fontWeight: number | IFontWeight): number | string => {
	if (typeof fontWeight === 'number') {
		return fontWeight;
	}
	return theme.fontWeight[fontWeight];
};

export const getColor = (theme: IEasyFlexTheme, color: IColor): string => {
	if (color === 'inherit') {
		return 'inherit';
	}
	return theme.color[color];
};

export const getFlipThreshold = (theme: IEasyFlexTheme, flipThreshold: IFlipThreshold): number =>
	theme.flipThreshold[flipThreshold];

export const useEasyFlexTheme = () => useContext(EasyFlexContext);

export const useDimension = (): { height: number; width: number } => {
	const [height, setHeight] = useState(window.innerHeight);
	const [bodyWidth, setBodyWidth] = useState(document.body.clientWidth);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setHeight(window.innerHeight);
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		// Width via ResizeObserver too because the browser's scrollbar does not influence window.innerWidth
		const resizeObserver = new ResizeObserver((entries) => {
			setBodyWidth(entries[0].contentRect.width);
		});
		resizeObserver.observe(document.body);

		return () => {
			window.removeEventListener('resize', handleResize);
			resizeObserver.disconnect();
		};
	});

	const dimension = useMemo(
		() => ({ height, width: Math.min(bodyWidth, windowWidth) }),
		[height, bodyWidth, windowWidth]
	);

	return dimension;
};

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

export const useDistance = ({
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginX,
	marginY,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
}: {
	marginBottom?: IDistance | number;
	marginLeft?: IDistance | number;
	marginRight?: IDistance | number;
	marginTop?: IDistance | number;
	marginX?: IDistance | number;
	marginY?: IDistance | number;
	paddingBottom?: IDistance | number;
	paddingLeft?: IDistance | number;
	paddingRight?: IDistance | number;
	paddingTop?: IDistance | number;
	paddingX?: IDistance | number;
	paddingY?: IDistance | number;
}): {
	margin: {
		bottom: string | undefined;
		left: string | undefined;
		right: string | undefined;
		top: string | undefined;
	};
	padding: {
		bottom: string | undefined;
		left: string | undefined;
		right: string | undefined;
		top: string | undefined;
	};
} => {
	const theme = useEasyFlexTheme();

	const processedMarginBottom = useMemo<string | undefined>(
		() => ifNotUndefined(marginBottom ?? marginY, (margin) => toPx(getDistance(theme, margin))),
		[marginBottom, marginY, theme]
	);

	const processedMarginLeft = useMemo<string | undefined>(
		() => ifNotUndefined(marginLeft ?? marginX, (margin) => toPx(getDistance(theme, margin))),
		[marginLeft, marginX, theme]
	);

	const processedMarginRight = useMemo<string | undefined>(
		() => ifNotUndefined(marginRight ?? marginX, (margin) => toPx(getDistance(theme, margin))),
		[marginRight, marginX, theme]
	);

	const processedMarginTop = useMemo<string | undefined>(
		() => ifNotUndefined(marginTop ?? marginY, (margin) => toPx(getDistance(theme, margin))),
		[marginTop, marginY, theme]
	);

	const processedPaddingBottom = useMemo<string | undefined>(
		() => ifNotUndefined(paddingBottom ?? paddingY, (margin) => toPx(getDistance(theme, margin))),
		[paddingBottom, paddingY, theme]
	);

	const processedPaddingLeft = useMemo<string | undefined>(
		() => ifNotUndefined(paddingLeft ?? paddingX, (margin) => toPx(getDistance(theme, margin))),
		[paddingLeft, paddingX, theme]
	);

	const processedPaddingRight = useMemo<string | undefined>(
		() => ifNotUndefined(paddingRight ?? paddingX, (margin) => toPx(getDistance(theme, margin))),
		[paddingRight, paddingX, theme]
	);

	const processedPaddingTop = useMemo<string | undefined>(
		() => ifNotUndefined(paddingTop ?? paddingY, (margin) => toPx(getDistance(theme, margin))),
		[paddingTop, paddingY, theme]
	);

	const margin = useMemo<{
		bottom: string | undefined;
		left: string | undefined;
		right: string | undefined;
		top: string | undefined;
	}>(
		() => ({
			bottom: processedMarginBottom,
			left: processedMarginLeft,
			right: processedMarginRight,
			top: processedMarginTop,
		}),
		[processedMarginBottom, processedMarginLeft, processedMarginRight, processedMarginTop]
	);

	const padding = useMemo<{
		bottom: string | undefined;
		left: string | undefined;
		right: string | undefined;
		top: string | undefined;
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
			bottom: string | undefined;
			left: string | undefined;
			right: string | undefined;
			top: string | undefined;
		};
		padding: {
			bottom: string | undefined;
			left: string | undefined;
			right: string | undefined;
			top: string | undefined;
		};
	}>(
		() => ({
			margin,
			padding,
		}),
		[margin, padding]
	);

	return distance;
};
