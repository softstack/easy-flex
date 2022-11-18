import React, { HTMLAttributes } from 'react';
import { CustomName, Falsifiable, StyleElement } from '../types';
import { ColorProps } from '../utils/color';
import { FontProps } from '../utils/font';
import { MiscProps } from '../utils/misc';
export interface StyleProps<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomFontSize extends CustomName, CustomFontWeight extends CustomName, CustomLineHeight extends CustomName> extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>, ColorProps<CustomColor>, FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>, MiscProps {
    /** Component's html tag. */
    element?: Falsifiable<StyleElement>;
}
export declare const createStyle: <CustomColor extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomLineHeight extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<StyleProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight> & React.RefAttributes<HTMLParagraphElement>>>;
