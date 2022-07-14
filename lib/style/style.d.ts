import { FC, HTMLAttributes } from 'react';
import { IColor, IFontSize, IFontWeight } from '../types';
export interface IStyleProps extends HTMLAttributes<HTMLSpanElement> {
    backgroundColor?: IColor;
    color?: IColor;
    fontSize?: IFontSize | number;
    fontWeight?: IFontWeight | number;
    italic?: boolean;
}
export declare const Style: FC<IStyleProps>;
