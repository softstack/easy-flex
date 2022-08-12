import React, { HTMLAttributes } from 'react';
import { AbsoluteSize, Distance, ViewportThreshold } from '../types';
export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
    /** If true, height and width are flipped if flipping has been enabled. */
    flip?: boolean;
    /** Enables flipping. */
    flipEnabled?: boolean;
    /** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the fallback threshold is used. */
    viewportThreshold?: ViewportThreshold | number;
    /** Component's height. */
    height?: Distance | AbsoluteSize;
    /** Component's width. */
    width?: Distance | AbsoluteSize;
}
export declare const Spacing: React.ForwardRefExoticComponent<SpacingProps & React.RefAttributes<HTMLDivElement>>;
