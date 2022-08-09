import { IAbsoluteSize, IBorderRadius, IColor, ICssColor, ICssFontWeight, ICssLineHeight, IDistance, IEasyFlexTheme, IFontSize, IFontWeight, IHeight, ILineHeight, IPercent, IPx, IRem, ISize, IThemeColor, IThemeSize, IViewportThreshold, IWidth } from './types';
export declare const isIThemeColor: (color: IColor) => color is IThemeColor;
export declare const isIThemeSize: (size: unknown) => size is IThemeSize;
export declare const isIPercent: (value: unknown) => value is `${number}px`;
export declare const isIPx: (value: unknown) => value is `${number}px`;
export declare const isIRem: (value: unknown) => value is `${number}rem`;
export declare const isIAbsoluteSize: (value: unknown) => value is IAbsoluteSize;
export declare const isISize: (value: unknown) => value is ISize;
export declare const ifDefined: <T, U>(value: T, fn: (value: Exclude<T, null | undefined>) => U) => T extends never ? U | null | undefined : T extends null ? U | null : T extends undefined ? U | undefined : U;
export declare const ifNotNull: <T, U>(value: T, fn: (value: Exclude<T, null>) => U) => T extends null ? null : U;
export declare const ifNotUndefined: <T, U>(value: T, fn: (value: Exclude<T, undefined>) => U) => T extends undefined ? undefined : U;
export declare const toIPercent: (value: number) => IPercent;
export declare const toIPx: (value: number) => IPx;
export declare const toIRem: (value: number) => IRem;
export declare const getBorderRadius: (theme: IEasyFlexTheme, borderRadius: IBorderRadius | IAbsoluteSize) => IAbsoluteSize;
export declare const getBorderWidth: (theme: IEasyFlexTheme, borderWidth: IBorderRadius | IAbsoluteSize) => IAbsoluteSize;
export declare const getColor: (theme: IEasyFlexTheme, color: IColor) => ICssColor;
export declare const getDistance: (theme: IEasyFlexTheme, distance: IDistance | IAbsoluteSize) => IAbsoluteSize;
export declare const getFontSize: (theme: IEasyFlexTheme, fontSize: IFontSize | ISize) => ISize;
export declare const getFontWeight: (theme: IEasyFlexTheme, fontWeight: IFontWeight | number) => ICssFontWeight | number;
export declare const getHeight: (theme: IEasyFlexTheme, height: IHeight | ISize) => ISize;
export declare const getLineHeight: (theme: IEasyFlexTheme, lineHeight: ICssLineHeight | ILineHeight) => ICssLineHeight;
export declare const getViewportThreshold: (theme: IEasyFlexTheme, viewportThreshold: IViewportThreshold | number) => number;
export declare const getWidth: (theme: IEasyFlexTheme, width: IWidth | ISize) => ISize;
export declare const useEasyFlexTheme: () => IEasyFlexTheme;
export declare const useColor: <T extends ICssColor | undefined>(color: IColor | undefined, fallback: T) => T extends ICssColor ? ICssColor : ICssColor | undefined;
export declare const useDimension: () => {
    height: number;
    width: number;
};
export declare const useDistance: ({ margin, marginBottom, marginLeft, marginRight, marginTop, marginHorizontal, marginVertical, padding, paddingBottom, paddingLeft, paddingRight, paddingTop, paddingHorizontal, paddingVertical, }: {
    margin?: IAbsoluteSize | IThemeSize | undefined;
    marginBottom?: IAbsoluteSize | IThemeSize | undefined;
    marginLeft?: IAbsoluteSize | IThemeSize | undefined;
    marginRight?: IAbsoluteSize | IThemeSize | undefined;
    marginTop?: IAbsoluteSize | IThemeSize | undefined;
    marginHorizontal?: IAbsoluteSize | IThemeSize | undefined;
    marginVertical?: IAbsoluteSize | IThemeSize | undefined;
    padding?: IAbsoluteSize | IThemeSize | undefined;
    paddingBottom?: IAbsoluteSize | IThemeSize | undefined;
    paddingLeft?: IAbsoluteSize | IThemeSize | undefined;
    paddingRight?: IAbsoluteSize | IThemeSize | undefined;
    paddingTop?: IAbsoluteSize | IThemeSize | undefined;
    paddingHorizontal?: IAbsoluteSize | IThemeSize | undefined;
    paddingVertical?: IAbsoluteSize | IThemeSize | undefined;
}) => {
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
};
export declare const useSize: ({ fullHeight, fullWidth, height, heightMax, heightMin, width, widthMax, widthMin, }: {
    fullHeight: boolean;
    fullWidth: boolean;
    height?: ISize | IThemeSize | undefined;
    heightMax?: ISize | IThemeSize | undefined;
    heightMin?: ISize | IThemeSize | undefined;
    width?: ISize | IThemeSize | undefined;
    widthMax?: ISize | IThemeSize | undefined;
    widthMin?: ISize | IThemeSize | undefined;
}) => {
    height: ISize | undefined;
    heightMax: ISize | undefined;
    heightMin: ISize | undefined;
    width: ISize | undefined;
    widthMax: ISize | undefined;
    widthMin: ISize | undefined;
};
export declare const useViewport: () => Record<'fallback' | IThemeSize, boolean>;
