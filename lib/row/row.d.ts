import { FC } from 'react';
import { IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlipDirection, IFlipThreshold } from '../types';
export interface IRowProps extends Omit<IBaseFlexProps, 'flexDirection'> {
    /** Flips the content in the direction set by flipDirection. */
    flip?: boolean;
    /** Sets what happens if the content shall be flipped. */
    flipDirection?: IFlipDirection;
    /** Sets the flip threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the fallback threshold is used. */
    flipThreshold?: IFlipThreshold;
}
export declare const Row: FC<IRowProps>;
