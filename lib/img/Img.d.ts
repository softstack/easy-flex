import React, { ImgHTMLAttributes } from 'react';
import { CustomName, Falsifiable, ObjectFit } from '../types';
import { BorderProps } from '../utils/border';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export interface ImgProps<CustomColor extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'>, BorderProps<CustomColor>, MarginProps, SizeProps<CustomHeight, CustomWidth> {
    objectFit?: Falsifiable<ObjectFit>;
}
export declare const createImg: <CustomColor extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.ForwardRefExoticComponent<ImgProps<CustomColor, CustomHeight, CustomWidth> & React.RefAttributes<HTMLImageElement>>;
