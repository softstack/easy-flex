import React, { HTMLAttributes } from 'react';
import { Color, TextAlign, TextElement, WordBreak } from '../types';
import { BorderProps } from '../utils/border';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface TextProps extends HTMLAttributes<HTMLParagraphElement>, BorderProps, DistanceProps, FlexItemProps, FontProps, SizeProps {
    /** Component's text alignment. */
    align?: TextAlign;
    /** Component's color */
    color?: Color;
    /** Component's html tag. */
    element?: TextElement;
    /** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
    wordBreak?: WordBreak;
}
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLParagraphElement>>;
