import { FC } from 'react';
import { IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlipDirection } from '../types';
export interface IRowProps extends IBaseFlexProps {
    flip?: boolean;
    flipDirection?: IFlipDirection;
}
export declare const Row: FC<IRowProps>;
