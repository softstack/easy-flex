import { FC, ImgHTMLAttributes } from 'react';
import { IObjectFit } from '../types';
export interface IBaseImgProps extends ImgHTMLAttributes<HTMLImageElement> {
    objectFit?: IObjectFit;
}
export declare const BaseImg: FC<IBaseImgProps>;
