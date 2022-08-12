import React, { AnchorHTMLAttributes } from 'react';
import { AbsoluteSize, AlignSelf, Color, Distance, Height, Size, Width } from '../types';
export interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: AlignSelf;
    /** Component's color. */
    color?: Color;
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Component's height. */
    height?: Height | Size;
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
    /** Component's maximum height. */
    maxHeight?: Height | Size;
    /** Component's maximum width. */
    maxWidth?: Width | Size;
    /** Component's miniumum height. */
    minHeight?: Height | Size;
    /** Component's minimum width. */
    minWidth?: Width | Size;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
    /** Component's width. */
    width?: Width | Size;
}
export declare const BaseLink: React.ForwardRefExoticComponent<BaseLinkProps & React.RefAttributes<HTMLAnchorElement>>;
