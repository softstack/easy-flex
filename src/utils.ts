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

export const useDimensions = (): { height: number; width: number } => {
	const [height, setHeight] = useState(window.innerHeight);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setHeight(window.innerHeight);
			setWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, [setHeight, setWidth]);

	const dimensions = useMemo(() => ({ height, width }), [height, width]);

	return dimensions;
};
