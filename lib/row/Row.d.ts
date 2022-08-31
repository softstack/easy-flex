import React from 'react';
import { BaseFlexProps } from '../baseFlex/BaseFlex';
import { FlipDirection, ViewportThreshold } from '../types';
export interface RowProps extends Omit<BaseFlexProps, 'direction'> {
    /** Flips the content in the direction set by flipDirection. */
    flip?: boolean;
    /** Sets what happens if the content shall be flipped. */
    flipDirection?: FlipDirection;
    /** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
    viewportThreshold?: ViewportThreshold | number;
}
export declare const Row: React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLDivElement>>;
