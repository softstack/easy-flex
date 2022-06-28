import { FC } from 'react';
import { IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlipDirection, IFlipThreshold } from '../types';
export interface IRowProps extends IBaseFlexProps {
    flip?: boolean;
    flipDirection?: IFlipDirection;
    flipThreshold?: IFlipThreshold;
}
export declare const Row: FC<IRowProps>;
