import React, { HTMLAttributes } from 'react';
import { CustomName, Distance, Falsifiable } from '../types';
import { MiscProps } from '../utils/misc';
export interface SpacingProps<CustomDistance extends CustomName> extends HTMLAttributes<HTMLDivElement>, MiscProps {
    flip?: boolean;
    /** Component's height. */
    height?: Falsifiable<Distance<CustomDistance>>;
    /** Component's width. */
    width?: Falsifiable<Distance<CustomDistance>>;
}
export declare const createSpacing: <CustomDistance extends `_${string}`>() => React.MemoExoticComponent<React.ForwardRefExoticComponent<SpacingProps<CustomDistance> & React.RefAttributes<HTMLDivElement>>>;
