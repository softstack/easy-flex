import React from 'react';
import { BaseFlexProps } from '../baseFlex/BaseFlex';
import { CustomName, Falsifiable, FlipDirection, ViewportThreshold } from '../types';
export interface RowProps<CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomFontFamily extends CustomName, CustomFontSize extends CustomName, CustomFontWeight extends CustomName, CustomHeight extends CustomName, CustomLineHeight extends CustomName, CustomViewportThreshold extends CustomName, CustomWidth extends CustomName> extends Omit<BaseFlexProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth>, 'direction'> {
    /** Flips the content in the direction set by flipDirection. */
    flip?: boolean;
    /** Sets what happens if the content shall be flipped. */
    flipDirection?: Falsifiable<FlipDirection>;
    /** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
    viewport?: Falsifiable<ViewportThreshold<CustomViewportThreshold>>;
}
export declare const createRow: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<RowProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth> & React.RefAttributes<HTMLDivElement>>>;
