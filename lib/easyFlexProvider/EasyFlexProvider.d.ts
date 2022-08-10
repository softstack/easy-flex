import { FC, ReactNode } from 'react';
import { IDeepPartial, IEasyFlexTheme } from '../types';
export interface IEasyFlexProviderProps {
    /** The component's children. */
    children?: ReactNode;
    /** Gets merged with the default theme. */
    theme: IDeepPartial<IEasyFlexTheme>;
}
export declare const EasyFlexProvider: FC<IEasyFlexProviderProps>;
