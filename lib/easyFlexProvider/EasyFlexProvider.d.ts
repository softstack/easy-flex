import React, { ReactNode } from 'react';
import { CustomName, DeepPartial, EasyFlexTheme } from '../types';
export interface EasyFlexProviderProps<CustomColor extends CustomName, CustomFontFamily extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> {
    /** The component's children. */
    children?: ReactNode;
    /** Gets merged with the default theme. */
    theme: DeepPartial<EasyFlexTheme<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>>;
}
export declare const createEasyFlexProvider: <CustomColor extends `_${string}`, CustomFontFamily extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>() => React.FC<EasyFlexProviderProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>>;
