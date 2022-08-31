import React, { AnchorHTMLAttributes } from 'react';
import { Color } from '../types';
import { FlexItemProps } from '../utils/flexItem';
import { MarginProps } from '../utils/margin';
export interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, FlexItemProps, MarginProps {
    /** Component's color. */
    color?: Color;
    /** Component's hover color. */
    hoverColor?: Color;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const BaseLink: React.ForwardRefExoticComponent<BaseLinkProps & React.RefAttributes<HTMLAnchorElement>>;
