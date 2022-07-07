import { FC, HTMLAttributes } from 'react';
import { IDistance, IFlipThreshold } from '../types';
export interface ISpacingProps extends HTMLAttributes<HTMLDivElement> {
    flip?: boolean;
    flipEnabled?: boolean;
    flipThreshold?: IFlipThreshold;
    height?: IDistance | number;
    width?: IDistance | number;
}
export declare const Spacing: FC<ISpacingProps>;
