import React, { HTMLAttributes } from 'react';
import { Distance, Falsifiable, ViewportThreshold } from '../types';
export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
    /** If true, height and width are flipped if flipping has been enabled. */
    flip?: boolean;
    /** Enables flipping. */
    flipEnabled?: boolean;
    /** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
    viewport?: Falsifiable<ViewportThreshold>;
    /** Component's height. */
    height?: Falsifiable<Distance>;
    /** Component's width. */
    width?: Falsifiable<Distance>;
}
export declare const Spacing: React.ForwardRefExoticComponent<SpacingProps & React.RefAttributes<HTMLDivElement>>;
