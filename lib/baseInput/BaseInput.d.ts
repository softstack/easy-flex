import React, { InputHTMLAttributes } from 'react';
import { Color, CustomName, Falsifiable } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseInputProps<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'height' | 'width'>, BorderProps<CustomColor>, ColorProps<CustomColor>, DistanceProps, FlexItemProps, FontProps<CustomColor, CustomFontFamily>, SizeProps<CustomHeight, CustomWidth> {
    placeholderColor?: Falsifiable<Color<CustomColor>>;
}
export declare const createBaseInput: <CustomColor extends `_${string}`, CustomFontFamily extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.ForwardRefExoticComponent<BaseInputProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth> & React.RefAttributes<HTMLInputElement>>;
