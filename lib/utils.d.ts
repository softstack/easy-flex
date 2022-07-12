import { IBorderRadius, IColor, IDistance, IEasyFlexTheme, IFlipThreshold, IFontSize, IFontWeight } from './types';
export declare const ifDefined: <T, U>(value: T, fn: (value: Exclude<T, null | undefined>) => U) => T extends never ? U | null | undefined : T extends null ? U | null : T extends undefined ? U | undefined : U;
export declare const ifNotNull: <T, U>(value: T, fn: (value: Exclude<T, null>) => U) => T extends null ? U | null : U;
export declare const ifNotUndefined: <T, U>(value: T, fn: (value: Exclude<T, undefined>) => U) => T extends undefined ? U | undefined : U;
export declare const toPx: (value: number) => string;
export declare const toRem: (value: number) => string;
export declare const getBorderRadius: (theme: IEasyFlexTheme, borderRadius: number | IBorderRadius) => number;
export declare const getBorderWidth: (theme: IEasyFlexTheme, borderWidth: number | IBorderRadius) => number;
export declare const getColor: (theme: IEasyFlexTheme, color: IColor) => string;
export declare const getDistance: (theme: IEasyFlexTheme, distance: number | IDistance) => number;
export declare const getFlipThreshold: (theme: IEasyFlexTheme, flipThreshold: IFlipThreshold) => number;
export declare const getFontSize: (theme: IEasyFlexTheme, fontSize: number | IFontSize) => number;
export declare const getFontWeight: (theme: IEasyFlexTheme, fontWeight: number | IFontWeight) => number | string;
export declare const useEasyFlexTheme: () => IEasyFlexTheme;
export declare const useColor: <T = string | undefined>(color: IColor | undefined, fallback: T) => T extends undefined ? string | T : string;
export declare const useDimension: () => {
    height: number;
    width: number;
};
export declare const useDistance: ({ marginBottom, marginLeft, marginRight, marginTop, marginX, marginY, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingX, paddingY, }: {
    marginBottom?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    marginLeft?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    marginRight?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    marginTop?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    marginX?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    marginY?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    paddingBottom?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    paddingLeft?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    paddingRight?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    paddingTop?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    paddingX?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
    paddingY?: number | ("s" | "8xs" | "7xs" | "6xs" | "5xs" | "4xs" | "3xs" | "xxs" | "xs" | "m" | "l" | "xl" | "xxl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl") | undefined;
}) => {
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
};
