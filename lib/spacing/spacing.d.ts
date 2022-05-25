import { FC, HTMLAttributes } from 'react';
import { IDistance } from '../types';
export interface ISpacingProps extends HTMLAttributes<HTMLDivElement> {
    flip?: boolean;
    flipDirection?: boolean;
    horizontal?: IDistance | number;
    vertical?: IDistance | number;
}
export declare const Spacing: FC<ISpacingProps>;
