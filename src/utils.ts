import { useContext, useEffect, useMemo, useState } from 'react';
import { EasyFlexContext } from './constants';
import { IColor, IDistance, IEasyFlexTheme, IFlipThreshold, IFontSize, IFontWeight } from './types';

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
		return color;
	}
	return theme.color[color];
};

export const getFlipThreshold = (theme: IEasyFlexTheme, flipThreshold: IFlipThreshold) =>
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

	const dimensions = useMemo(
		() => ({ height, width: Math.min(bodyWidth, windowWidth) }),
		[height, bodyWidth, windowWidth]
	);

	return dimensions;
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
	marginBottom: string;
	marginLeft: string;
	marginRight: string;
	marginTop: string;
	paddingBottom: string;
	paddingLeft: string;
	paddingRight: string;
	paddingTop: string;
} => {
	const theme = useEasyFlexTheme();

	const processedMarginBottom = useMemo<string>(
		() => toPx(getDistance(theme, marginBottom ?? marginY ?? 0)),
		[marginBottom, marginY, theme]
	);

	const processedMarginLeft = useMemo<string>(
		() => toPx(getDistance(theme, marginLeft ?? marginX ?? 0)),
		[marginLeft, marginX, theme]
	);

	const processedMarginRight = useMemo<string>(
		() => toPx(getDistance(theme, marginRight ?? marginX ?? 0)),
		[marginRight, marginX, theme]
	);

	const processedMarginTop = useMemo<string>(
		() => toPx(getDistance(theme, marginTop ?? marginY ?? 0)),
		[marginTop, marginY, theme]
	);

	const processedPaddingBottom = useMemo<string>(
		() => toPx(getDistance(theme, paddingBottom ?? paddingY ?? 0)),
		[paddingBottom, paddingY, theme]
	);

	const processedPaddingLeft = useMemo<string>(
		() => toPx(getDistance(theme, paddingLeft ?? paddingX ?? 0)),
		[paddingLeft, paddingX, theme]
	);

	const processedPaddingRight = useMemo<string>(
		() => toPx(getDistance(theme, paddingRight ?? paddingX ?? 0)),
		[paddingRight, paddingX, theme]
	);

	const processedPaddingTop = useMemo<string>(
		() => toPx(getDistance(theme, paddingTop ?? paddingY ?? 0)),
		[paddingTop, paddingY, theme]
	);

	const distance = useMemo<{
		marginBottom: string;
		marginLeft: string;
		marginRight: string;
		marginTop: string;
		paddingBottom: string;
		paddingLeft: string;
		paddingRight: string;
		paddingTop: string;
	}>(
		() => ({
			marginBottom: processedMarginBottom,
			marginLeft: processedMarginLeft,
			marginRight: processedMarginRight,
			marginTop: processedMarginTop,
			paddingBottom: processedPaddingBottom,
			paddingLeft: processedPaddingLeft,
			paddingRight: processedPaddingRight,
			paddingTop: processedPaddingTop,
		}),
		[
			processedMarginBottom,
			processedMarginLeft,
			processedMarginRight,
			processedMarginTop,
			processedPaddingBottom,
			processedPaddingLeft,
			processedPaddingRight,
			processedPaddingTop,
		]
	);

	return distance;
};
