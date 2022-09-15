import { FC, ReactNode } from 'react';
import { DeepPartial, EasyFlexTheme } from '../types';
export declare const mergeDeep: <T>(a: T, b: DeepPartial<T>) => T;
export interface EasyFlexProviderProps {
    /** The component's children. */
    children?: ReactNode;
    /** Gets merged with the default theme. */
    theme: DeepPartial<EasyFlexTheme>;
}
export declare const EasyFlexProvider: FC<EasyFlexProviderProps>;
