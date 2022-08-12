import React, { ImgHTMLAttributes } from 'react';
import { ObjectFit } from '../types';
export interface BaseImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    objectFit?: ObjectFit;
}
export declare const BaseImg: React.ForwardRefExoticComponent<BaseImgProps & React.RefAttributes<HTMLImageElement>>;
