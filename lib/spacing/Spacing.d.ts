import React, { HTMLAttributes } from 'react';
import { CustomName, Distance, Falsifiable, ViewportThreshold } from '../types';
import { MiscProps } from '../utils/misc';
export interface SpacingProps<CustomDistance extends CustomName, CustomViewportThreshold extends CustomName> extends HTMLAttributes<HTMLDivElement>, MiscProps {
    /** If true, height and width are flipped if flipping has been enabled. */
    flip?: boolean;
    /** Enables flipping. */
    flipEnabled?: boolean;
    /** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
    viewport?: Falsifiable<ViewportThreshold<CustomViewportThreshold>>;
    /** Component's height. */
    height?: Falsifiable<Distance<CustomDistance>>;
    /** Component's width. */
    width?: Falsifiable<Distance<CustomDistance>>;
}
export declare const createSpacing: <CustomDistance extends `_${string}`, CustomViewportThreshold extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<SpacingProps<CustomDistance, CustomViewportThreshold> & React.RefAttributes<HTMLDivElement>>>;
