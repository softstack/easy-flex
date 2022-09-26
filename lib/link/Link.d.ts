import React, { AnchorHTMLAttributes } from 'react';
import { Color, Falsifiable } from '../types';
import { ColorProps } from '../utils/color';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, ColorProps, FlexItemProps, FontProps, MarginProps, SizeProps {
    /** Component's hover color. */
    hoverColor?: Falsifiable<Color>;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
