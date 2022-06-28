import { FC } from 'react';
import { IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlipDirection, IFlipThreshold } from '../types';
export interface IColProps extends IBaseFlexProps {
    flip?: boolean;
    flipDirection?: IFlipDirection;
    flipThreshold?: IFlipThreshold;
}
export declare const Col: FC<IColProps>;
