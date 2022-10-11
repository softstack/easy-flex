import React, { AnchorHTMLAttributes } from 'react';
import { Color, Falsifiable, ThemeColor } from '../types';
import { ColorProps } from '../utils/color';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export interface LinkProps<T extends ThemeColor> extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, ColorProps<T>, FlexItemProps, FontProps<T>, MarginProps, SizeProps {
    /** Component's hover color. */
    hoverColor?: Falsifiable<Color<T>>;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const createLink: <T extends `_${string}`>() => React.ForwardRefExoticComponent<LinkProps<T> & React.RefAttributes<HTMLAnchorElement>>;
