import React, { TextareaHTMLAttributes } from 'react';
import { Color, CustomName, Falsifiable } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseTextAreaProps<CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomFontFamily extends CustomName, CustomFontSize extends CustomName, CustomFontWeight extends CustomName, CustomHeight extends CustomName, CustomLineHeight extends CustomName, CustomWidth extends CustomName> extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'>, BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>, ColorProps<CustomColor>, DistanceProps<CustomDistance>, FlexItemProps, FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>, SizeProps<CustomHeight, CustomWidth> {
    placeholderColor?: Falsifiable<Color<CustomColor>>;
}
export declare const createBaseTextArea: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<BaseTextAreaProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & React.RefAttributes<HTMLTextAreaElement>>>;
