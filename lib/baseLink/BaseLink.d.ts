import React, { AnchorHTMLAttributes } from 'react';
import { AlignSelf, Color } from '../types';
import { MarginProps } from '../utils/margin';
export interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, MarginProps {
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: AlignSelf;
    /** Component's color. */
    color?: Color;
    /** Component's hover color. */
    hoverColor?: Color;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const BaseLink: React.ForwardRefExoticComponent<BaseLinkProps & React.RefAttributes<HTMLAnchorElement>>;
