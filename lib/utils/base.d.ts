import { AbsoluteSize, BorderRadius, BorderWidth, Color, CssColor, CssFontWeight, CssLineHeight, DeepPartial, Distance, EasyFlexTheme, ElementSize, Falsifiable, FontSize, FontWeight, Height, LineHeight, Percent, Px, Rem, Size, ThemeColor, ThemeSize, ThemeSizeName, ThemeSizeX, Vh, ViewportThreshold, Vw, Width } from '../types';
export declare const mergeDeep: <T>(a: T, b: DeepPartial<T>) => T;
export declare const isThemeColor: (color: Color) => color is ThemeColor;
export declare const isThemeSizeX: (size: unknown) => size is ThemeSizeX;
export declare const isThemeSizeName: (size: unknown) => size is ThemeSizeName;
export declare const isThemeSize: (size: unknown) => size is ThemeSize;
export declare const isPercent: (value: unknown) => value is `${number}px`;
export declare const isPx: (value: unknown) => value is `${number}px`;
export declare const isRem: (value: unknown) => value is `${number}rem`;
export declare const isVh: (value: unknown) => value is `${number}vh`;
export declare const isVw: (value: unknown) => value is `${number}vw`;
export declare const isAbsoluteSize: (value: unknown) => value is AbsoluteSize;
export declare const isSize: (value: unknown) => value is Size;
export declare const ifDefined: <T, U>(value: T, fn: (value: Exclude<T, false | undefined>) => U) => T extends undefined ? undefined : U;
export declare const defalsify: <T>(value: false | T) => T | undefined;
export declare const toPercent: (value: number) => Percent;
export declare const toPx: (value: number) => Px;
export declare const toRem: (value: number) => Rem;
export declare const toVh: (value: number) => Vh;
export declare const toVw: (value: number) => Vw;
export declare const percentToNumber: (value: Percent) => number;
export declare const pxToNumber: (value: Px) => number;
export declare const remToNumber: (value: Rem) => number;
export declare const vhToNumber: (value: Vh) => number;
export declare const vwToNumber: (value: Vw) => number;
export declare const absoluteSizeToNumber: (value: AbsoluteSize) => number;
export declare const sizeToNumber: (value: Size) => number;
export declare const getBorderRadius: (theme: EasyFlexTheme, borderRadius: BorderRadius) => Size;
export declare const getBorderWidth: (theme: EasyFlexTheme, borderWidth: BorderWidth) => AbsoluteSize;
export declare const getColor: (theme: EasyFlexTheme, color: Color) => CssColor;
export declare const getDistance: (theme: EasyFlexTheme, distance: Distance) => AbsoluteSize;
export declare const getFontSize: (theme: EasyFlexTheme, fontSize: FontSize) => Size;
export declare const getFontWeight: (theme: EasyFlexTheme, fontWeight: FontWeight) => CssFontWeight;
export declare const getHeight: (theme: EasyFlexTheme, height: Height) => ElementSize;
export declare const getLineHeight: (theme: EasyFlexTheme, lineHeight: LineHeight) => CssLineHeight;
export declare const getViewportThreshold: (theme: EasyFlexTheme, viewportThreshold: ViewportThreshold) => number;
export declare const getWidth: (theme: EasyFlexTheme, width: Width) => ElementSize;
export declare const useEasyFlexTheme: () => EasyFlexTheme;
export declare const useDimension: () => {
    height: number;
    width: number;
};
export declare const useModalContainer: (containerElementId: Falsifiable<string> | undefined) => HTMLElement;
export declare const useViewport: () => Record<ThemeSizeX | 'default', boolean>;
