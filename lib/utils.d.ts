import { IColor, IDistance, IEasyFlexTheme, IFlipThreshold, IFontSize, IFontWeight } from './types';
export declare const toPx: (value: number) => string;
export declare const toRem: (value: number) => string;
export declare const getDistance: (theme: IEasyFlexTheme, distance: number | IDistance) => number;
export declare const getFontSize: (theme: IEasyFlexTheme, fontSize: number | IFontSize) => number;
export declare const getFontWeight: (theme: IEasyFlexTheme, fontWeight: number | IFontWeight) => number | string;
export declare const getColor: (theme: IEasyFlexTheme, color: IColor) => string;
export declare const getFlipThreshold: (theme: IEasyFlexTheme, flipThreshold: IFlipThreshold) => number;
export declare const useEasyFlexTheme: () => IEasyFlexTheme;
export declare const useDimensions: () => {
    height: number;
    width: number;
};
