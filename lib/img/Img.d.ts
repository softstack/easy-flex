import React, { ImgHTMLAttributes } from 'react';
import { CustomName, Falsifiable, ObjectFit } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export interface ImgProps<CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'color' | 'height' | 'width'>, BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>, ColorProps<CustomColor>, MarginProps<CustomDistance>, SizeProps<CustomHeight, CustomWidth> {
    objectFit?: Falsifiable<ObjectFit>;
}
export declare const createImg: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<ImgProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomHeight, CustomWidth> & React.RefAttributes<HTMLImageElement>>>;
