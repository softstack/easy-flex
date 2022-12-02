import React, { InputHTMLAttributes } from 'react';
import { Color, CustomName, Falsifiable } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { GridItemProps } from '../utils/gridItem';
import { MiscProps } from '../utils/misc';
import { SizeProps } from '../utils/size';
export interface BaseInputProps<CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomFontFamily extends CustomName, CustomFontSize extends CustomName, CustomFontWeight extends CustomName, CustomHeight extends CustomName, CustomLineHeight extends CustomName, CustomWidth extends CustomName> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'height' | 'width'>, BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>, ColorProps<CustomColor>, DistanceProps<CustomDistance>, FlexItemProps, FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>, GridItemProps, MiscProps, SizeProps<CustomHeight, CustomWidth> {
    placeholderColor?: Falsifiable<Color<CustomColor>>;
}
export declare const createBaseInput: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<BaseInputProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & React.RefAttributes<HTMLInputElement>>>;
