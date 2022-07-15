import { FC, HTMLAttributes } from 'react';
import { IColor, IFontSize, IFontWeight, IStyleElement } from '../types';
export interface IStyleProps extends HTMLAttributes<HTMLSpanElement> {
    backgroundColor?: IColor;
    color?: IColor;
    element?: IStyleElement;
    fontSize?: IFontSize | number;
    fontWeight?: IFontWeight | number;
    italic?: boolean;
}
export declare const Style: FC<IStyleProps>;
