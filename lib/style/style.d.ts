import { FC, HTMLAttributes } from 'react';
import { IColor, IFontSize, IFontWeight } from '../types';
export interface IStyleProps extends HTMLAttributes<HTMLSpanElement> {
    color?: IColor;
    fontSize?: number | IFontSize;
    fontWeight?: number | IFontWeight;
    italic?: boolean;
}
export declare const Style: FC<IStyleProps>;
