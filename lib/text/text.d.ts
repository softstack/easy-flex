import { FC, HTMLAttributes } from 'react';
import { IAlignSelf, IColor, IDistance, IFontSize, IFontWeight, ITextAlign, ITextElement, IWordBreak } from '../types';
export interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
    align?: ITextAlign;
    alignSelf?: IAlignSelf;
    color?: IColor;
    element?: ITextElement;
    fontSize?: number | IFontSize;
    fontWeight?: number | IFontWeight;
    fullWidth?: boolean;
    horizontalMargin?: IDistance | number;
    horizontalPadding?: IDistance | number;
    italic?: boolean;
    verticalMargin?: IDistance | number;
    verticalPadding?: IDistance | number;
    wordBreak?: IWordBreak;
}
export declare const Text: FC<ITextProps>;
