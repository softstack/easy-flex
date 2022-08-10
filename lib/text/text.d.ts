import { FC, HTMLAttributes } from 'react';
import { IAbsoluteSize, IAlignSelf, IColor, ICssLineHeight, IDistance, IFontFamily, IFontSize, IFontWeight, IHeight, ILineHeight, ISize, ITextAlign, ITextElement, IWidth, IWordBreak } from '../types';
export interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
    /** Component's text alignment. */
    align?: ITextAlign;
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: IAlignSelf;
    /** Component's color */
    color?: IColor;
    /** Component's html tag. */
    element?: ITextElement;
    fontFamily?: IFontFamily;
    /** Component's font size. */
    fontSize?: IFontSize | ISize;
    /** Component's font weight. */
    fontWeight?: IFontWeight | number;
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Component's height. */
    height?: IHeight | ISize;
    /** If true, the text style is set to italic. */
    italic?: boolean;
    lineHeight?: ICssLineHeight | ILineHeight;
    /** Component's margin of all sides. */
    margin?: IDistance | IAbsoluteSize;
    /** Component's bottom margin. */
    marginBottom?: IDistance | IAbsoluteSize;
    /** Component's left margin. */
    marginLeft?: IDistance | IAbsoluteSize;
    /** Component's right margin. */
    marginRight?: IDistance | IAbsoluteSize;
    /** Component's top margin. */
    marginTop?: IDistance | IAbsoluteSize;
    /** Component's left and right margin. */
    marginHorizontal?: IDistance | IAbsoluteSize;
    /** Component's top and bottom margin. */
    marginVertical?: IDistance | IAbsoluteSize;
    /** Component's maximum height. */
    maxHeight?: IHeight | ISize;
    /** Component's maximum width. */
    maxWidth?: IWidth | ISize;
    /** Component's miniumum height. */
    minHeight?: IHeight | ISize;
    /** Component's minimum width. */
    minWidth?: IWidth | ISize;
    /** Padding of all sides. */
    padding?: IDistance | IAbsoluteSize;
    /** Component's bottom padding. */
    paddingBottom?: IDistance | IAbsoluteSize;
    /** Component's left padding. */
    paddingLeft?: IDistance | IAbsoluteSize;
    /** Component's right padding. */
    paddingRight?: IDistance | IAbsoluteSize;
    /** Component's top padding. */
    paddingTop?: IDistance | IAbsoluteSize;
    /** Component's left and right padding. */
    paddingHorizontal?: IDistance | IAbsoluteSize;
    /** Component's top and bottom padding. */
    paddingVertical?: IDistance | IAbsoluteSize;
    /** Component's width. */
    width?: IWidth | ISize;
    /** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
    wordBreak?: IWordBreak;
}
export declare const Text: FC<ITextProps>;
