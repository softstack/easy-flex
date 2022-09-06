import React, { AnchorHTMLAttributes } from 'react';
import { Color } from '../types';
import { ColorProps } from '../utils/color';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export declare type BaseLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & ColorProps & FlexItemProps & FontProps & MarginProps & SizeProps & {
    /** Component's hover color. */
    hoverColor?: Color;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
};
export declare const BaseLink: React.ForwardRefExoticComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & ColorProps & FlexItemProps & FontProps & MarginProps & SizeProps & {
    /** Component's hover color. */
    hoverColor?: Color | undefined;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean | undefined;
} & React.RefAttributes<HTMLAnchorElement>>;
