import { Color, CssColor } from '../types';
export interface ColorProps {
    /** Component's background color. */
    backgroundColor?: Color;
    /** Component's color. */
    color?: Color;
}
export interface ColorStyleProps {
    'data-background-color'?: CssColor;
    'data-color'?: CssColor;
}
export declare const useColor: (color: Color | undefined) => CssColor | undefined;
export declare const useDefaultColor: <T extends CssColor | undefined>(color: Color | undefined, defaultColor: T) => T extends CssColor ? CssColor : CssColor | undefined;
export declare const useColorStyleProps: ({ backgroundColor, color, }: ColorProps) => {
    backgroundColor: CssColor | undefined;
    color: CssColor | undefined;
};
export declare const colorStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<ColorStyleProps, any>>;
