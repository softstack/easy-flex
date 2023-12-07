import React, { ImgHTMLAttributes } from 'react';
import { CustomName, Falsifiable, ObjectFit } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { FlexItemProps } from '../utils/flexItem';
import { GridItemProps } from '../utils/gridItem';
import { MarginProps } from '../utils/margin';
import { MiscProps } from '../utils/misc';
import { SizeProps } from '../utils/size';
export interface ImgProps<CustomAspectRatio extends CustomName, CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'color' | 'height' | 'width'>, BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>, ColorProps<CustomColor>, FlexItemProps, GridItemProps, MarginProps<CustomDistance>, MiscProps<CustomDistance>, SizeProps<CustomAspectRatio, CustomHeight, CustomWidth> {
    objectFit?: Falsifiable<ObjectFit>;
}
export declare const createImg: <CustomAspectRatio extends `_${string}`, CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<ImgProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomHeight, CustomWidth> & React.RefAttributes<HTMLImageElement>>>;
