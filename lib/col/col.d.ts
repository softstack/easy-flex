import { FC } from 'react';
import { IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlipDirection } from '../types';
export interface IColProps extends IBaseFlexProps {
    flip?: boolean;
    flipDirection?: IFlipDirection;
}
export declare const Col: FC<IColProps>;
