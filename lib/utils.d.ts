import { IBorderRadius, IColor, IDistance, IEasyFlexTheme, IFlipThreshold, IFontSize, IFontWeight, IHeight, IWidth } from './types';
export declare const ifDefined: <T, U>(value: T, fn: (value: Exclude<T, null | undefined>) => U) => T extends never ? U | null | undefined : T extends null ? U | null : T extends undefined ? U | undefined : U;
export declare const ifNotNull: <T, U>(value: T, fn: (value: Exclude<T, null>) => U) => T extends null ? U | null : U;
export declare const ifNotUndefined: <T, U>(value: T, fn: (value: Exclude<T, undefined>) => U) => T extends undefined ? U | undefined : U;
export declare const toPx: (value: number) => string;
export declare const toRem: (value: number) => string;
export declare const getBorderRadius: (theme: IEasyFlexTheme, borderRadius: IBorderRadius | number) => number;
export declare const getBorderWidth: (theme: IEasyFlexTheme, borderWidth: IBorderRadius | number) => number;
export declare const getColor: (theme: IEasyFlexTheme, color: IColor) => string;
export declare const getDistance: (theme: IEasyFlexTheme, distance: IDistance | number) => number;
export declare const getFlipThreshold: (theme: IEasyFlexTheme, flipThreshold: IFlipThreshold) => number;
export declare const getFontSize: (theme: IEasyFlexTheme, fontSize: IFontSize | number) => number;
export declare const getFontWeight: (theme: IEasyFlexTheme, fontWeight: IFontWeight | number) => number | string;
export declare const getHeight: (theme: IEasyFlexTheme, height: IHeight | number) => number;
export declare const getWidth: (theme: IEasyFlexTheme, width: IWidth | number) => number;
export declare const useEasyFlexTheme: () => IEasyFlexTheme;
export declare const useColor: <T = string | undefined>(color: IColor | undefined, fallback: T) => T extends undefined ? string | T : string;
export declare const useDimension: () => {
    height: number;
    width: number;
};
export declare const useDistance: ({ margin, marginBottom, marginLeft, marginRight, marginTop, marginX, marginY, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, }: {
    margin?: number | import("./types").IBaseSize | undefined;
    marginBottom?: number | import("./types").IBaseSize | undefined;
    marginLeft?: number | import("./types").IBaseSize | undefined;
    marginRight?: number | import("./types").IBaseSize | undefined;
    marginTop?: number | import("./types").IBaseSize | undefined;
    marginX?: number | import("./types").IBaseSize | undefined;
    marginY?: number | import("./types").IBaseSize | undefined;
    padding?: number | import("./types").IBaseSize | undefined;
    paddingBottom?: number | import("./types").IBaseSize | undefined;
    paddingLeft?: number | import("./types").IBaseSize | undefined;
    paddingRight?: number | import("./types").IBaseSize | undefined;
    paddingTop?: number | import("./types").IBaseSize | undefined;
    paddingX?: number | import("./types").IBaseSize | undefined;
    paddingY?: number | import("./types").IBaseSize | undefined;
}) => {
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
};
export declare const useSize: ({ fullHeight, fullWidth, height, heightMax, heightMin, width, widthMax, widthMin, }: {
    fullHeight: boolean;
    fullWidth: boolean;
    height?: number | import("./types").IBaseSize | undefined;
    heightMax?: number | import("./types").IBaseSize | undefined;
    heightMin?: number | import("./types").IBaseSize | undefined;
    width?: number | import("./types").IBaseSize | undefined;
    widthMax?: number | import("./types").IBaseSize | undefined;
    widthMin?: number | import("./types").IBaseSize | undefined;
}) => {
    height: string | undefined;
    heightMax: string | undefined;
    heightMin: string | undefined;
    width: string | undefined;
    widthMax: string | undefined;
    widthMin: string | undefined;
};
