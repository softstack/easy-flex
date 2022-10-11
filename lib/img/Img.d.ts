import React, { ImgHTMLAttributes } from 'react';
import { Falsifiable, ObjectFit, ThemeColor } from '../types';
import { BorderProps } from '../utils/border';
import { MarginProps } from '../utils/margin';
import { SizeProps } from '../utils/size';
export interface ImgProps<T extends ThemeColor> extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'height' | 'width'>, BorderProps<T>, MarginProps, SizeProps {
    objectFit?: Falsifiable<ObjectFit>;
}
export declare const createImg: <T extends `_${string}`>() => React.ForwardRefExoticComponent<ImgProps<T> & React.RefAttributes<HTMLImageElement>>;
