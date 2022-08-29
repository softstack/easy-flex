import React, { HTMLAttributes } from 'react';
import { AlignSelf, Color, TextAlign, TextElement, WordBreak } from '../types';
import { DistanceProps } from '../utils/distance';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface TextProps extends HTMLAttributes<HTMLParagraphElement>, DistanceProps, FontProps, SizeProps {
    /** Component's text alignment. */
    align?: TextAlign;
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: AlignSelf;
    /** Component's color */
    color?: Color;
    /** Component's html tag. */
    element?: TextElement;
    /** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
    wordBreak?: WordBreak;
}
export declare const Text: React.ForwardRefExoticComponent<TextProps & React.RefAttributes<HTMLParagraphElement>>;
