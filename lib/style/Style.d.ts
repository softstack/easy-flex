import React, { HTMLAttributes } from 'react';
import { StyleElement } from '../types';
import { ColorProps } from '../utils/color';
import { FontProps } from '../utils/font';
export interface StyleProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>, ColorProps, FontProps {
    /** Component's html tag. */
    element?: StyleElement;
}
export declare const Style: React.ForwardRefExoticComponent<StyleProps & React.RefAttributes<HTMLParagraphElement>>;
