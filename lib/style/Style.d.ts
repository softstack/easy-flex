import React, { HTMLAttributes } from 'react';
import { Color, CssLineHeight, FontFamily, FontSize, FontWeight, LineHeight, Size, StyleElement } from '../types';
export interface StyleProps extends HTMLAttributes<HTMLSpanElement> {
    /** Component's background color. */
    backgroundColor?: Color;
    /** Component's color. */
    color?: Color;
    /** Component's html tag. */
    element?: StyleElement;
    fontFamily?: FontFamily;
    /** Component's font size. */
    fontSize?: FontSize | Size;
    /** Component's font weight. */
    fontWeight?: FontWeight | number;
    /** If true, the text style is set to italic. */
    italic?: boolean;
    lineHeight?: CssLineHeight | LineHeight;
}
export declare const Style: React.ForwardRefExoticComponent<StyleProps & React.RefAttributes<HTMLParagraphElement>>;
