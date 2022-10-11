import React, { ReactNode } from 'react';
import { CustomName, DeepPartial, EasyFlexTheme } from '../types';
export interface EasyFlexProviderProps<CustomBorderRadius extends CustomName, CustomBorderWidth extends CustomName, CustomColor extends CustomName, CustomDistance extends CustomName, CustomFontFamily extends CustomName, CustomFontSize extends CustomName, CustomFontWeight extends CustomName, CustomHeight extends CustomName, CustomLineHeight extends CustomName, CustomViewportThreshold extends CustomName, CustomWidth extends CustomName> {
    /** The component's children. */
    children?: ReactNode;
    /** Gets merged with the default theme. */
    theme: DeepPartial<EasyFlexTheme<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>>;
}
export declare const createEasyFlexProvider: <CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>() => React.FC<EasyFlexProviderProps<CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>>;
