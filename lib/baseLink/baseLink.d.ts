import React, { FC } from 'react';
import { IAlignSelf, IColor, IDistance } from '../types';
export interface IBaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: IAlignSelf;
    /** Component's color. */
    color?: IColor;
    /** Component's hover color. */
    hoverColor?: IColor;
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
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const BaseLink: FC<IBaseLinkProps>;
