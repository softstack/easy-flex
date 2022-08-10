import { FC, HTMLAttributes } from 'react';
import { IAbsoluteSize, IDistance, IViewportThreshold } from '../types';
export interface ISpacingProps extends HTMLAttributes<HTMLDivElement> {
    /** If true, height and width are flipped if flipping has been enabled. */
    flip?: boolean;
    /** Enables flipping. */
    flipEnabled?: boolean;
    /** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the fallback threshold is used. */
    viewportThreshold?: IViewportThreshold | number;
    /** Component's height. */
    height?: IDistance | IAbsoluteSize;
    /** Component's width. */
    width?: IDistance | IAbsoluteSize;
}
export declare const Spacing: FC<ISpacingProps>;
