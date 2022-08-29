import React, { ImgHTMLAttributes } from 'react';
import { AbsoluteSize, BorderRadius, Distance, Height, ObjectFit, Size, Width } from '../types';
export interface BaseImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    /** Component's border radius. */
    borderRadius?: BorderRadius | AbsoluteSize;
    /** Component's height. */
    height?: Height | Size;
    /** Component's margin of all sides. */
    margin?: Distance | AbsoluteSize;
    /** Component's bottom margin. */
    marginBottom?: Distance | AbsoluteSize;
    /** Component's left margin. */
    marginLeft?: Distance | AbsoluteSize;
    /** Component's right margin. */
    marginRight?: Distance | AbsoluteSize;
    /** Component's top margin. */
    marginTop?: Distance | AbsoluteSize;
    /** Component's left and right margin. */
    marginHorizontal?: Distance | AbsoluteSize;
    /** Component's top and bottom margin. */
    marginVertical?: Distance | AbsoluteSize;
    objectFit?: ObjectFit;
    round?: boolean;
    /** Component's width. */
    width?: Width | Size;
}
export declare const BaseImg: React.ForwardRefExoticComponent<BaseImgProps & React.RefAttributes<HTMLImageElement>>;
