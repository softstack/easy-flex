import React, { HTMLAttributes } from 'react';
import { CustomName, Falsifiable, StyleElement } from '../types';
import { ColorProps } from '../utils/color';
import { FontProps } from '../utils/font';
export interface StyleProps<CustomColor extends CustomName, CustomFontFamily extends CustomName> extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>, ColorProps<CustomColor>, FontProps<CustomColor, CustomFontFamily> {
    /** Component's html tag. */
    element?: Falsifiable<StyleElement>;
}
export declare const createStyle: <CustomColor extends `_${string}`, CustomFontFamily extends `_${string}`>() => React.ForwardRefExoticComponent<StyleProps<CustomColor, CustomFontFamily> & React.RefAttributes<HTMLParagraphElement>>;
