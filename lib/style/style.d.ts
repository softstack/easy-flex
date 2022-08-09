import { FC, HTMLAttributes } from 'react';
import { IColor, ICssLineHeight, IFontSize, IFontWeight, ILineHeight, ISize, IStyleElement } from '../types';
export interface IStyleProps extends HTMLAttributes<HTMLSpanElement> {
    /** Component's background color. */
    backgroundColor?: IColor;
    /** Component's color. */
    color?: IColor;
    /** Component's html tag. */
    element?: IStyleElement;
    /** Component's font size. */
    fontSize?: IFontSize | ISize;
    /** Component's font weight. */
    fontWeight?: IFontWeight | number;
    /** If true, the text style is set to italic. */
    italic?: boolean;
    lineHeight?: ICssLineHeight | ILineHeight;
}
export declare const Style: FC<IStyleProps>;
