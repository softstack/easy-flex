import { FC, HTMLAttributes } from 'react';
import { AbsoluteSize, AlignSelf, Color, CssLineHeight, Distance, FontFamily, FontSize, FontWeight, Height, LineHeight, Size, TextAlign, TextElement, Width, WordBreak } from '../types';
export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
    /** Component's text alignment. */
    align?: TextAlign;
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: AlignSelf;
    /** Component's color */
    color?: Color;
    /** Component's html tag. */
    element?: TextElement;
    fontFamily?: FontFamily;
    /** Component's font size. */
    fontSize?: FontSize | Size;
    /** Component's font weight. */
    fontWeight?: FontWeight | number;
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Component's height. */
    height?: Height | Size;
    /** If true, the text style is set to italic. */
    italic?: boolean;
    lineHeight?: CssLineHeight | LineHeight;
    /** Component's margin of all sides. */
    margin?: Distance | AbsoluteSize;
    /** Component's bottom margin. */
    marginBottom?: Distance | AbsoluteSize;
    /** Component's left margin. */
    marginLeft?: Distance | AbsoluteSize;
    /** Component's right margin. */
    marginRight?: Distance | AbsoluteSize;
    /** Component's top margin. */
    marginTop?: Distance | AbsoluteSize;
    /** Component's left and right margin. */
    marginHorizontal?: Distance | AbsoluteSize;
    /** Component's top and bottom margin. */
    marginVertical?: Distance | AbsoluteSize;
    /** Component's maximum height. */
    maxHeight?: Height | Size;
    /** Component's maximum width. */
    maxWidth?: Width | Size;
    /** Component's miniumum height. */
    minHeight?: Height | Size;
    /** Component's minimum width. */
    minWidth?: Width | Size;
    /** Padding of all sides. */
    padding?: Distance | AbsoluteSize;
    /** Component's bottom padding. */
    paddingBottom?: Distance | AbsoluteSize;
    /** Component's left padding. */
    paddingLeft?: Distance | AbsoluteSize;
    /** Component's right padding. */
    paddingRight?: Distance | AbsoluteSize;
    /** Component's top padding. */
    paddingTop?: Distance | AbsoluteSize;
    /** Component's left and right padding. */
    paddingHorizontal?: Distance | AbsoluteSize;
    /** Component's top and bottom padding. */
    paddingVertical?: Distance | AbsoluteSize;
    /** Component's width. */
    width?: Width | Size;
    /** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
    wordBreak?: WordBreak;
}
export declare const Text: FC<TextProps>;
