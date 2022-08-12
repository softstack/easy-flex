import React, { AnchorHTMLAttributes } from 'react';
import { AbsoluteSize, AlignSelf, Color, Distance } from '../types';
export interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: AlignSelf;
    /** Component's color. */
    color?: Color;
    /** Component's hover color. */
    hoverColor?: Color;
    /** Component's margin of all sides. */
    margin?: Distance | AbsoluteSize;
    /** Component's bottom margin. */
    marginBottom?: Distance | AbsoluteSize;
    /** Component's left margin. */
    marginLeft?: Distance | AbsoluteSize;
    /** Component's right margin. */
    marginRight?: Distance | AbsoluteSize;
    /** Component's top margin. */
    marginTop?: Distance | AbsoluteSize;
    /** Component's left and right margin. */
    marginHorizontal?: Distance | AbsoluteSize;
    /** Component's top and bottom margin. */
    marginVertical?: Distance | AbsoluteSize;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const BaseLink: React.ForwardRefExoticComponent<BaseLinkProps & React.RefAttributes<HTMLAnchorElement>>;
