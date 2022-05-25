import { FC, ReactNode } from 'react';
import { IDeepPartial, IEasyFlexTheme } from '../types';
export interface IEasyFlexProviderProps {
    children?: ReactNode;
    theme: IDeepPartial<IEasyFlexTheme>;
}
export declare const EasyFlexProvider: FC<IEasyFlexProviderProps>;
