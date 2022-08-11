import { FC, ImgHTMLAttributes } from 'react';
import { ObjectFit } from '../types';
export interface BaseImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    objectFit?: ObjectFit;
}
export declare const BaseImg: FC<BaseImgProps>;
