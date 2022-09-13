import React, { AnchorHTMLAttributes } from 'react';
import { Color } from '../types';
import { ColorProps } from '../utils/color';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export interface BaseLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, ColorProps, FlexItemProps, FontProps, MarginProps, SizeProps {
    /** Component's hover color. */
    hoverColor?: Color;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const BaseLink: React.ForwardRefExoticComponent<BaseLinkProps & React.RefAttributes<HTMLAnchorElement>>;
