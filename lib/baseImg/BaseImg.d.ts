import React, { ImgHTMLAttributes } from 'react';
import { AbsoluteSize, BorderRadius, ObjectFit } from '../types';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export declare type BaseImgProps = ImgHTMLAttributes<HTMLImageElement> & MarginProps & SizeProps & {
    /** Component's border radius. */
    borderRadius?: BorderRadius | AbsoluteSize;
    objectFit?: ObjectFit;
    round?: boolean;
};
export declare const BaseImg: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & MarginProps & SizeProps & {
    /** Component's border radius. */
    borderRadius?: AbsoluteSize | import("../types").ThemeSize | undefined;
    objectFit?: ObjectFit | undefined;
    round?: boolean | undefined;
} & React.RefAttributes<HTMLImageElement>>;
