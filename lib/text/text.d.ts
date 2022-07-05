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
    italic?: boolean;
    marginBottom?: IDistance | number;
    marginLeft?: IDistance | number;
    marginRight?: IDistance | number;
    marginTop?: IDistance | number;
    marginX?: IDistance | number;
    marginY?: IDistance | number;
    paddingBottom?: IDistance | number;
    paddingLeft?: IDistance | number;
    paddingRight?: IDistance | number;
    paddingTop?: IDistance | number;
    paddingX?: IDistance | number;
    paddingY?: IDistance | number;
    wordBreak?: IWordBreak;
}
export declare const Text: FC<ITextProps>;
