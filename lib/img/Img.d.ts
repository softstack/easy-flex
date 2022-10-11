import React, { ImgHTMLAttributes } from 'react';
import { CustomName, Falsifiable, ObjectFit } from '../types';
import { BorderProps } from '../utils/border';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export interface ImgProps<CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'>, BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>, MarginProps<CustomDistance>, SizeProps<CustomHeight, CustomWidth> {
    objectFit?: Falsifiable<ObjectFit>;
}
export declare const createImg: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.ForwardRefExoticComponent<ImgProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomHeight, CustomWidth> & React.RefAttributes<HTMLImageElement>>;
