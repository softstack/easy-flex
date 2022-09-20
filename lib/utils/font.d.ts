import { Color, CssColor, CssFontWeight, CssLineHeight, FontFamily, FontSize, FontStyle, FontWeight, LineHeight, Size, TextDecoration } from '../types';
export interface FontProps {
    fontFamily?: FontFamily;
    /** Component's font size. */
    fontSize?: FontSize;
    /** Component's font weight. */
    fontWeight?: FontWeight;
    /** If true, the text style is set to italic. */
    italic?: boolean;
    lineHeight?: LineHeight;
    underline?: boolean;
    underlineColor?: Color;
}
export interface FontStyleProps {
    'data-font-family'?: string;
    'data-font-size'?: Size;
    'data-font-weight'?: CssFontWeight;
    'data-font-style'?: FontStyle;
    'data-line-height'?: CssLineHeight;
    'data-text-decoration'?: TextDecoration;
    'data-text-decoration-color'?: CssColor;
}
export declare const useFont: ({ fontFamily, fontSize, fontWeight, italic, lineHeight, underline, underlineColor, }: FontProps) => {
    family: string | undefined;
    size: Size | undefined;
    weight: CssFontWeight | undefined;
    style: FontStyle | undefined;
    lineHeight: CssLineHeight | undefined;
    textDecoration: TextDecoration | undefined;
    textDecorationColor: CssColor | undefined;
};
export declare const useFontStyleProps: (props: FontProps) => FontStyleProps;
export declare const fontStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FontStyleProps, any>>;
