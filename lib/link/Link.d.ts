import React, { AnchorHTMLAttributes } from 'react';
import { Color, CustomName, Falsifiable } from '../types';
import { ColorProps } from '../utils/color';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export interface LinkProps<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, ColorProps<CustomColor>, FlexItemProps, FontProps<CustomColor, CustomFontFamily>, MarginProps, SizeProps<CustomHeight, CustomWidth> {
    /** Component's hover color. */
    hoverColor?: Falsifiable<Color<CustomColor>>;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const createLink: <CustomColor extends `_${string}`, CustomFontFamily extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.ForwardRefExoticComponent<LinkProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth> & React.RefAttributes<HTMLAnchorElement>>;
