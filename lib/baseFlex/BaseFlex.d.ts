import React, { HTMLAttributes } from 'react';
import { BaseFlexElement, CustomName, Falsifiable } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexContainerProps } from '../utils/flexContainer';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { OverflowProps } from '../utils/overflow';
import { SizeProps } from '../utils/size';
export interface BaseFlexProps<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, BorderProps<CustomColor>, ColorProps<CustomColor>, FlexContainerProps, FlexItemProps, FontProps<CustomColor, CustomFontFamily>, DistanceProps, OverflowProps, SizeProps<CustomHeight, CustomWidth> {
    /** Component's html tag. */
    element?: Falsifiable<BaseFlexElement>;
}
export declare const createBaseFlex: <CustomColor extends `_${string}`, CustomFontFamily extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.ForwardRefExoticComponent<BaseFlexProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth> & React.RefAttributes<HTMLDivElement>>;
