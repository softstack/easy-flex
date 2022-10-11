import React, { HTMLAttributes } from 'react';
import { Falsifiable, StyleElement, ThemeColor } from '../types';
import { ColorProps } from '../utils/color';
import { FontProps } from '../utils/font';
export interface StyleProps<T extends ThemeColor> extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>, ColorProps<T>, FontProps<T> {
    /** Component's html tag. */
    element?: Falsifiable<StyleElement>;
}
export declare const createStyle: <T extends `_${string}`>() => React.ForwardRefExoticComponent<StyleProps<T> & React.RefAttributes<HTMLParagraphElement>>;
