import React from 'react';
import { BaseFlexProps } from '../baseFlex/BaseFlex';
import { CustomName, Falsifiable, FlipDirection, ViewportThreshold } from '../types';
export interface ColProps<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> extends Omit<BaseFlexProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>, 'direction'> {
    /** Flips the content in the direction set by flipDirection. */
    flip?: boolean;
    /** Sets what happens if the content shall be flipped. */
    flipDirection?: Falsifiable<FlipDirection>;
    /** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
    viewport?: Falsifiable<ViewportThreshold>;
}
export declare const createCol: <CustomColor extends `_${string}`, CustomFontFamily extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.ForwardRefExoticComponent<ColProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth> & React.RefAttributes<HTMLDivElement>>;
