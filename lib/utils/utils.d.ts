import { AbsoluteSize, BorderRadius, Color, CssColor, CssFontWeight, CssLineHeight, Distance, EasyFlexTheme, FontFamily, FontSize, FontStyle, FontWeight, Height, LineHeight, Percent, Px, Rem, Size, ThemeColor, ThemeSize, ViewportThreshold, Width } from '../types';
export declare const isThemeColor: (color: Color) => color is ThemeColor;
export declare const isThemeSize: (size: unknown) => size is ThemeSize;
export declare const isPercent: (value: unknown) => value is `${number}px`;
export declare const isPx: (value: unknown) => value is `${number}px`;
export declare const isRem: (value: unknown) => value is `${number}rem`;
export declare const isVh: (value: unknown) => value is `${number}rem`;
export declare const isVw: (value: unknown) => value is `${number}rem`;
export declare const isAbsoluteSize: (value: unknown) => value is AbsoluteSize;
export declare const isSize: (value: unknown) => value is Size;
export declare const ifDefined: <T, U>(value: T, fn: (value: Exclude<T, null | undefined>) => U) => T extends never ? U | null | undefined : T extends null ? U | null : T extends undefined ? U | undefined : U;
export declare const ifNotNull: <T, U>(value: T, fn: (value: Exclude<T, null>) => U) => T extends null ? null : U;
export declare const ifNotUndefined: <T, U>(value: T, fn: (value: Exclude<T, undefined>) => U) => T extends undefined ? undefined : U;
export declare const toPercent: (value: number) => Percent;
export declare const toPx: (value: number) => Px;
export declare const toRem: (value: number) => Rem;
export declare const pxToNumber: (px: Px) => number;
export declare const getBorderRadius: (theme: EasyFlexTheme, borderRadius: BorderRadius | AbsoluteSize) => AbsoluteSize;
export declare const getBorderWidth: (theme: EasyFlexTheme, borderWidth: BorderRadius | AbsoluteSize) => AbsoluteSize;
export declare const getColor: (theme: EasyFlexTheme, color: Color) => CssColor;
export declare const getDistance: (theme: EasyFlexTheme, distance: Distance | AbsoluteSize) => AbsoluteSize;
export declare const getFontSize: (theme: EasyFlexTheme, fontSize: FontSize | Size) => Size;
export declare const getFontWeight: (theme: EasyFlexTheme, fontWeight: FontWeight | number) => CssFontWeight | number;
export declare const getHeight: (theme: EasyFlexTheme, height: Height | Size) => Size;
export declare const getLineHeight: (theme: EasyFlexTheme, lineHeight: CssLineHeight | LineHeight) => CssLineHeight;
export declare const getViewportThreshold: (theme: EasyFlexTheme, viewportThreshold: ViewportThreshold | number) => number;
export declare const getWidth: (theme: EasyFlexTheme, width: Width | Size) => Size;
export declare const useEasyFlexTheme: () => EasyFlexTheme;
export declare const useColor: <T extends CssColor | undefined>(color: Color | undefined, fallback: T) => T extends CssColor ? CssColor : CssColor | undefined;
export declare const useDimension: () => {
    height: number;
    width: number;
};
export declare const useDistance: ({ margin, marginBottom, marginLeft, marginRight, marginTop, marginHorizontal, marginVertical, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingHorizontal, paddingVertical, }: {
    margin?: AbsoluteSize | ThemeSize | undefined;
    marginBottom?: AbsoluteSize | ThemeSize | undefined;
    marginLeft?: AbsoluteSize | ThemeSize | undefined;
    marginRight?: AbsoluteSize | ThemeSize | undefined;
    marginTop?: AbsoluteSize | ThemeSize | undefined;
    marginHorizontal?: AbsoluteSize | ThemeSize | undefined;
    marginVertical?: AbsoluteSize | ThemeSize | undefined;
    padding?: AbsoluteSize | ThemeSize | undefined;
    paddingBottom?: AbsoluteSize | ThemeSize | undefined;
    paddingLeft?: AbsoluteSize | ThemeSize | undefined;
    paddingRight?: AbsoluteSize | ThemeSize | undefined;
    paddingTop?: AbsoluteSize | ThemeSize | undefined;
    paddingHorizontal?: AbsoluteSize | ThemeSize | undefined;
    paddingVertical?: AbsoluteSize | ThemeSize | undefined;
}) => {
    margin: {
        bottom: AbsoluteSize;
        left: AbsoluteSize;
        right: AbsoluteSize;
        top: AbsoluteSize;
    };
    padding: {
        bottom: AbsoluteSize;
        left: AbsoluteSize;
        right: AbsoluteSize;
        top: AbsoluteSize;
    };
};
export declare const useFont: ({ fontFamily, fontSize, fontWeight, italic, lineHeight, }: {
    fontFamily?: FontFamily | undefined;
    fontSize?: Size | ThemeSize | undefined;
    fontWeight?: number | FontWeight | undefined;
    italic?: boolean | undefined;
    lineHeight?: CssLineHeight | ThemeSize | undefined;
}) => {
    family: string | undefined;
    size: Size | undefined;
    weight: number | CssFontWeight | undefined;
    style: FontStyle | undefined;
    lineHeight: CssLineHeight | undefined;
};
export declare const useSize: ({ fullHeight, fullWidth, height, heightMax, heightMin, width, widthMax, widthMin, }: {
    fullHeight?: boolean | undefined;
    fullWidth?: boolean | undefined;
    height?: Size | ThemeSize | undefined;
    heightMax?: Size | ThemeSize | undefined;
    heightMin?: Size | ThemeSize | undefined;
    width?: Size | ThemeSize | undefined;
    widthMax?: Size | ThemeSize | undefined;
    widthMin?: Size | ThemeSize | undefined;
}) => {
    height: Size | undefined;
    heightMax: Size | undefined;
    heightMin: Size | undefined;
    width: Size | undefined;
    widthMax: Size | undefined;
    widthMin: Size | undefined;
};
export declare const useViewport: () => Record<'fallback' | ThemeSize, boolean>;
