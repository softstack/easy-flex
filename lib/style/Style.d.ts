import React, { HTMLAttributes } from 'react';
import { Color, StyleElement } from '../types';
import { FontProps } from '../utils/font';
export interface StyleProps extends HTMLAttributes<HTMLSpanElement>, FontProps {
    /** Component's background color. */
    backgroundColor?: Color;
    /** Component's color. */
    color?: Color;
    /** Component's html tag. */
    element?: StyleElement;
}
export declare const Style: React.ForwardRefExoticComponent<StyleProps & React.RefAttributes<HTMLParagraphElement>>;
