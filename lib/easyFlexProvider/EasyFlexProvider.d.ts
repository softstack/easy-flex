import { FC, ReactNode } from 'react';
import { DeepPartial, EasyFlexTheme } from '../types';
export interface EasyFlexProviderProps {
    /** The component's children. */
    children?: ReactNode;
    /** Gets merged with the default theme. */
    theme: DeepPartial<EasyFlexTheme>;
}
export declare const EasyFlexProvider: FC<EasyFlexProviderProps>;
