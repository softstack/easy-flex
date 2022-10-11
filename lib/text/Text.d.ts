import React, { HTMLAttributes } from 'react';
import { Falsifiable, TextAlign, TextElement, ThemeColor } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { OverflowProps } from '../utils/overflow';
import { SizeProps } from '../utils/size';
export interface TextProps<T extends ThemeColor> extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>, BorderProps<T>, ColorProps<T>, DistanceProps, FlexItemProps, FontProps<T>, OverflowProps, SizeProps {
    /** Component's text alignment. */
    align?: Falsifiable<TextAlign>;
    /** Component's html tag. */
    element?: Falsifiable<TextElement>;
}
export declare const createText: <T extends `_${string}`>() => React.ForwardRefExoticComponent<TextProps<T> & React.RefAttributes<HTMLParagraphElement>>;
