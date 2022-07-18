import { FC, HTMLAttributes } from 'react';
import { IAlignSelf, IColor, IDistance, IFontSize, IFontWeight, IHeight, ITextAlign, ITextElement, IWidth, IWordBreak } from '../types';
export interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
    /** Component's text alignment. */
    align?: ITextAlign;
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: IAlignSelf;
    /** Component's color */
    color?: IColor;
    /** Component's html tag. */
    element?: ITextElement;
    /** Component's font size. */
    fontSize?: IFontSize | number;
    /** Component's font weight. */
    fontWeight?: IFontWeight | number;
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Component's height. */
    height?: IHeight | number;
    /** If true, the text style is set to italic. */
    italic?: boolean;
    /** Component's margin of all sides. */
    margin?: IDistance | number;
    /** Component's bottom margin. */
    marginBottom?: IDistance | number;
    /** Component's left margin. */
    marginLeft?: IDistance | number;
    /** Component's right margin. */
    marginRight?: IDistance | number;
    /** Component's top margin. */
    marginTop?: IDistance | number;
    /** Component's left and right margin. */
    marginX?: IDistance | number;
    /** Component's top and bottom margin. */
    marginY?: IDistance | number;
    /** Component's maximum height. */
    maxHeight?: IHeight | number;
    /** Component's maximum width. */
    maxWidth?: IWidth | number;
    /** Component's miniumum height. */
    minHeight?: IHeight | number;
    /** Component's minimum width. */
    minWidth?: IWidth | number;
    /** Padding of all sides. */
    padding?: IDistance | number;
    /** Component's bottom padding. */
    paddingBottom?: IDistance | number;
    /** Component's left padding. */
    paddingLeft?: IDistance | number;
    /** Component's right padding. */
    paddingRight?: IDistance | number;
    /** Component's top padding. */
    paddingTop?: IDistance | number;
    /** Component's left and right padding. */
    paddingX?: IDistance | number;
    /** Component's top and bottom padding. */
    paddingY?: IDistance | number;
    /** Component's width. */
    width?: IWidth | number;
    /** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
    wordBreak?: IWordBreak;
}
export declare const Text: FC<ITextProps>;
