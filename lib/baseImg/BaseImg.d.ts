import React, { ImgHTMLAttributes } from 'react';
import { ObjectFit } from '../types';
import { BorderProps } from '../utils/border';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export declare type BaseImgProps = ImgHTMLAttributes<HTMLImageElement> & BorderProps & MarginProps & SizeProps & {
    objectFit?: ObjectFit;
};
export declare const BaseImg: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & BorderProps & MarginProps & SizeProps & {
    objectFit?: ObjectFit | undefined;
} & React.RefAttributes<HTMLImageElement>>;
