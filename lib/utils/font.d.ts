import { CssFontWeight, CssLineHeight, FontFamily, FontSize, FontStyle, FontWeight, LineHeight, Size } from '../types';
export interface FontProps {
    fontFamily?: FontFamily;
    /** Component's font size. */
    fontSize?: FontSize | Size;
    /** Component's font weight. */
    fontWeight?: FontWeight | number;
    /** If true, the text style is set to italic. */
    italic?: boolean;
    lineHeight?: CssLineHeight | LineHeight;
}
export interface FontStyleProps {
    'data-font-family'?: string;
    'data-font-size'?: Size;
    'data-font-weight'?: CssFontWeight | number;
    'data-font-style'?: FontStyle;
    'data-line-height'?: CssLineHeight;
}
export declare const useFontStyleProps: (data: {
    fontFamily?: FontFamily;
    fontSize?: FontSize | Size;
    fontWeight?: FontWeight | number;
    italic?: boolean;
    lineHeight?: CssLineHeight | LineHeight;
}) => FontStyleProps;
export declare const fontStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FontStyleProps, any>>;
