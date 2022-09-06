import React, { HTMLAttributes } from 'react';
import { StyleElement } from '../types';
import { ColorProps } from '../utils/color';
import { FontProps } from '../utils/font';
export declare type StyleProps = HTMLAttributes<HTMLSpanElement> & ColorProps & FontProps & {
    /** Component's html tag. */
    element?: StyleElement;
};
export declare const Style: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLSpanElement> & ColorProps & FontProps & {
    /** Component's html tag. */
    element?: StyleElement | undefined;
} & React.RefAttributes<HTMLParagraphElement>>;
