import React, { ReactNode } from 'react';
import { DeepPartial, EasyFlexTheme, ThemeColor } from '../types';
export interface EasyFlexProviderProps<T extends ThemeColor> {
    /** The component's children. */
    children?: ReactNode;
    /** Gets merged with the default theme. */
    theme: DeepPartial<EasyFlexTheme<T>>;
}
export declare const createEasyFlexProvider: <T extends `_${string}`>() => React.FC<EasyFlexProviderProps<T>>;
