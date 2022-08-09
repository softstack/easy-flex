import React, { FC } from 'react';
import { IAbsoluteSize, IAlignSelf, IColor, IDistance } from '../types';
export interface IBaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: IAlignSelf;
    /** Component's color. */
    color?: IColor;
    /** Component's hover color. */
    hoverColor?: IColor;
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
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const BaseLink: FC<IBaseLinkProps>;
