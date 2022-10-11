import { Color, CssColor, Falsifiable, ThemeColor } from '../types';
export interface ColorProps<T extends ThemeColor> {
    /** Component's background color. */
    backgroundColor?: Falsifiable<Color<T>>;
    /** Component's color. */
    color?: Falsifiable<Color<T>>;
}
export interface ColorStyleProps {
    'data-background-color'?: CssColor;
    'data-color'?: CssColor;
}
export declare const useColor: <T extends `_${string}`>(color: Falsifiable<Color<T>> | undefined) => CssColor | undefined;
export declare const useDefaultColor: <T extends CssColor | undefined, U extends `_${string}`>(color: Falsifiable<Color<U>> | undefined, defaultColor: T) => T extends CssColor ? CssColor : CssColor | undefined;
export declare const useColorStyleProps: <T extends `_${string}`>({ backgroundColor, color, }: ColorProps<T>) => ColorStyleProps;
export declare const colorStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ColorStyleProps, any>>;
