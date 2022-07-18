import { FC, HTMLAttributes } from 'react';
import { IDistance, IFlipThreshold } from '../types';
export interface ISpacingProps extends HTMLAttributes<HTMLDivElement> {
    /** If true, height and width are flipped if flipping has been enabled. */
    flip?: boolean;
    /** Enables flipping. */
    flipEnabled?: boolean;
    /** Sets the flip threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the fallback threshold is used. */
    flipThreshold?: IFlipThreshold;
    /** Component's height. */
    height?: IDistance | number;
    /** Component's width. */
    width?: IDistance | number;
}
export declare const Spacing: FC<ISpacingProps>;
