import React, { HTMLAttributes } from 'react';
import { CustomName, Falsifiable, TextAlign, TextElement } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { OverflowProps } from '../utils/overflow';
import { SizeProps } from '../utils/size';
export interface TextProps<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>, BorderProps<CustomColor>, ColorProps<CustomColor>, DistanceProps, FlexItemProps, FontProps<CustomColor, CustomFontFamily>, OverflowProps, SizeProps<CustomHeight, CustomWidth> {
    /** Component's text alignment. */
    align?: Falsifiable<TextAlign>;
    /** Component's html tag. */
    element?: Falsifiable<TextElement>;
}
export declare const createText: <CustomColor extends `_${string}`, CustomFontFamily extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.ForwardRefExoticComponent<TextProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth> & React.RefAttributes<HTMLParagraphElement>>;
