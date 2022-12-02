import React, { HTMLAttributes } from 'react';
import { AlignContent, AlignItems, BaseGridElement, CustomName, Distance, Falsifiable, JustifyContent, JustifyItems } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { GridItemProps } from '../utils/gridItem';
import { MiscProps } from '../utils/misc';
import { SizeProps } from '../utils/size';
export interface BaseGridProps<CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomFontFamily extends CustomName, CustomFontSize extends CustomName, CustomFontWeight extends CustomName, CustomHeight extends CustomName, CustomLineHeight extends CustomName, CustomWidth extends CustomName> extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>, ColorProps<CustomColor>, FlexItemProps, FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>, DistanceProps<CustomDistance>, GridItemProps, MiscProps, SizeProps<CustomHeight, CustomWidth> {
    alignContent?: Falsifiable<AlignContent>;
    alignItems?: Falsifiable<AlignItems>;
    columnGap?: Falsifiable<Distance<CustomDistance>>;
    /** Component's html tag. */
    element?: Falsifiable<BaseGridElement>;
    justifyContent?: Falsifiable<JustifyContent>;
    justifyItems?: Falsifiable<JustifyItems>;
    rowGap?: Falsifiable<Distance<CustomDistance>>;
}
export declare const createBaseGrid: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<BaseGridProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & React.RefAttributes<HTMLDivElement>>>;
