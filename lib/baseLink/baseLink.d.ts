import React, { FC } from 'react';
import { IAlignSelf, IColor, IDistance } from '../types';
export interface IBaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    alignSelf?: IAlignSelf;
    color?: IColor;
    horizontalMargin?: IDistance | number;
    newTab?: boolean;
    verticalMargin?: IDistance | number;
}
export declare const BaseLink: FC<IBaseLinkProps>;
