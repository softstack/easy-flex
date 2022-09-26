import { Color, CssColor, CssFontWeight, CssLineHeight, Falsifiable, FontFamily, FontSize, FontStyle, FontWeight, LineHeight, Size, TextDecoration, WhiteSpace, WordBreak } from '../types';
export interface FontProps {
    fontFamily?: Falsifiable<FontFamily>;
    /** Component's font size. */
    fontSize?: Falsifiable<FontSize>;
    /** Component's font weight. */
    fontWeight?: Falsifiable<FontWeight>;
    /** If true, the text style is set to italic. */
    italic?: boolean;
    lineHeight?: Falsifiable<LineHeight>;
    underline?: boolean;
    underlineColor?: Falsifiable<Color>;
    whiteSpace?: Falsifiable<WhiteSpace>;
    /** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
    wordBreak?: Falsifiable<WordBreak>;
}
export interface FontStyleProps {
    'data-font-family'?: string;
    'data-font-size'?: Size;
    'data-font-weight'?: CssFontWeight;
    'data-font-style'?: FontStyle;
    'data-line-height'?: CssLineHeight;
    'data-text-decoration'?: TextDecoration;
    'data-text-decoration-color'?: CssColor;
    'data-white-space'?: Falsifiable<WhiteSpace>;
    'data-word-break'?: Falsifiable<WordBreak>;
}
export declare const useFont: ({ fontFamily, fontSize, fontWeight, italic, lineHeight, underline, underlineColor, whiteSpace, wordBreak, }: FontProps) => {
    family: string | undefined;
    size: Size | undefined;
    weight: CssFontWeight | undefined;
    style: FontStyle | undefined;
    lineHeight: CssLineHeight | undefined;
    textDecoration: TextDecoration | undefined;
    textDecorationColor: CssColor | undefined;
    whiteSpace: Falsifiable<WhiteSpace> | undefined;
    wordBreak: Falsifiable<WordBreak> | undefined;
};
export declare const useFontStyleProps: (props: FontProps) => FontStyleProps;
export declare const fontStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FontStyleProps, any>>;
