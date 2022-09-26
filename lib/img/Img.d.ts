import React, { ImgHTMLAttributes } from 'react';
import { Falsifiable, ObjectFit } from '../types';
import { BorderProps } from '../utils/border';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export declare type ImgProps = ImgHTMLAttributes<HTMLImageElement> & BorderProps & MarginProps & SizeProps & {
    objectFit?: Falsifiable<ObjectFit>;
};
export declare const Img: React.ForwardRefExoticComponent<React.ImgHTMLAttributes<HTMLImageElement> & BorderProps & MarginProps & SizeProps & {
    objectFit?: Falsifiable<ObjectFit> | undefined;
} & React.RefAttributes<HTMLImageElement>>;
