import { Color, CssColor, CssFontWeight, CssLineHeight, FontFamily, FontSize, FontStyle, FontWeight, LineHeight, Size, TextDecoration, WhiteSpace, WordBreak } from '../types';
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
    whiteSpace?: WhiteSpace;
    /** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
    wordBreak?: WordBreak;
}
export interface FontStyleProps {
    'data-font-family'?: string;
    'data-font-size'?: Size;
    'data-font-weight'?: CssFontWeight;
    'data-font-style'?: FontStyle;
    'data-line-height'?: CssLineHeight;
    'data-text-decoration'?: TextDecoration;
    'data-text-decoration-color'?: CssColor;
    'data-white-space'?: WhiteSpace;
    'data-word-break'?: WordBreak;
}
export declare const useFont: ({ fontFamily, fontSize, fontWeight, italic, lineHeight, underline, underlineColor, whiteSpace, wordBreak, }: FontProps) => {
    family: string | undefined;
    size: Size | undefined;
    weight: CssFontWeight | undefined;
    style: FontStyle | undefined;
    lineHeight: CssLineHeight | undefined;
    textDecoration: TextDecoration | undefined;
    textDecorationColor: CssColor | undefined;
    whiteSpace: WhiteSpace | undefined;
    wordBreak: WordBreak | undefined;
};
export declare const useFontStyleProps: (props: FontProps) => FontStyleProps;
export declare const fontStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FontStyleProps, any>>;
