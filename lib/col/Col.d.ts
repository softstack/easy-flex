import React from 'react';
import { BaseFlexProps } from '../baseFlex/BaseFlex';
import { Falsifiable, FlipDirection, ThemeColor, ViewportThreshold } from '../types';
export interface ColProps<T extends ThemeColor> extends Omit<BaseFlexProps<T>, 'direction'> {
    /** Flips the content in the direction set by flipDirection. */
    flip?: boolean;
    /** Sets what happens if the content shall be flipped. */
    flipDirection?: Falsifiable<FlipDirection>;
    /** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
    viewport?: Falsifiable<ViewportThreshold>;
}
export declare const createCol: <T extends `_${string}`>() => React.ForwardRefExoticComponent<ColProps<T> & React.RefAttributes<HTMLDivElement>>;
