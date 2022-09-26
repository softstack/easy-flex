import { Color, CssColor, Falsifiable } from '../types';
export interface ColorProps {
    /** Component's background color. */
    backgroundColor?: Falsifiable<Color>;
    /** Component's color. */
    color?: Falsifiable<Color>;
}
export interface ColorStyleProps {
    'data-background-color'?: CssColor;
    'data-color'?: CssColor;
}
export declare const useColor: (color: Falsifiable<Color> | undefined) => CssColor | undefined;
export declare const useDefaultColor: <T extends CssColor | undefined>(color: Falsifiable<Color> | undefined, defaultColor: T) => T extends CssColor ? CssColor : CssColor | undefined;
export declare const useColorStyleProps: ({ backgroundColor, color }: ColorProps) => ColorStyleProps;
export declare const colorStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ColorStyleProps, any>>;
