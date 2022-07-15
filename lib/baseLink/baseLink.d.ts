import React, { FC } from 'react';
import { IAlignSelf, IColor, IDistance } from '../types';
export interface IBaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    alignSelf?: IAlignSelf;
    color?: IColor;
    hoverColor?: IColor;
    margin?: IDistance | number;
    marginBottom?: IDistance | number;
    marginLeft?: IDistance | number;
    marginRight?: IDistance | number;
    marginTop?: IDistance | number;
    marginX?: IDistance | number;
    marginY?: IDistance | number;
    newTab?: boolean;
}
export declare const BaseLink: FC<IBaseLinkProps>;
