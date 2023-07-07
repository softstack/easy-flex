import React, { AnchorHTMLAttributes } from 'react';
import { Color, CustomName, Falsifiable } from '../types';
import { ColorProps } from '../utils/color';
import { FlexContainerProps } from '../utils/flexContainer';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { GridItemProps } from '../utils/gridItem';
import { MarginProps } from '../utils/margin';
import { MiscProps } from '../utils/misc';
import { SizeProps } from '../utils/size';
export interface LinkProps<CustomAspectRatio extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomFontFamily extends CustomName, CustomFontSize extends CustomName, CustomFontWeight extends CustomName, CustomHeight extends CustomName, CustomLineHeight extends CustomName, CustomWidth extends CustomName> extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>, ColorProps<CustomColor>, FlexContainerProps<CustomDistance>, FlexItemProps, FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>, GridItemProps, MarginProps<CustomDistance>, MiscProps, SizeProps<CustomAspectRatio, CustomHeight, CustomWidth> {
    /** Component's hover color. */
    hoverColor?: Falsifiable<Color<CustomColor>>;
    /** If true, the link is opened in a new tab. */
    newTab?: boolean;
}
export declare const createLink: <CustomAspectRatio extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<LinkProps<CustomAspectRatio, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & React.RefAttributes<HTMLAnchorElement>>>;
