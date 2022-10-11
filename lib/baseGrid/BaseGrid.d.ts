import React, { HTMLAttributes } from 'react';
import { BaseGridElement, CustomName, Distance, Falsifiable } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseGridProps<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, BorderProps<CustomColor>, ColorProps<CustomColor>, FlexItemProps, FontProps<CustomColor, CustomFontFamily>, DistanceProps, SizeProps<CustomHeight, CustomWidth> {
    columnGap?: Falsifiable<Distance>;
    /** Component's html tag. */
    element?: Falsifiable<BaseGridElement>;
    rowGap?: Falsifiable<Distance>;
}
export declare const createBaseGrid: <CustomColor extends `_${string}`, CustomFontFamily extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.ForwardRefExoticComponent<BaseGridProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth> & React.RefAttributes<HTMLDivElement>>;
