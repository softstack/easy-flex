import React, { HTMLAttributes } from 'react';
import { TextAlign, TextElement } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { OverflowProps } from '../utils/overflow';
import { SizeProps } from '../utils/size';
export interface TextProps extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>, BorderProps, ColorProps, DistanceProps, FlexItemProps, FontProps, OverflowProps, SizeProps {
    /** Component's text alignment. */
    align?: TextAlign;
    /** Component's html tag. */
    element?: TextElement;
}
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLParagraphElement>>;
