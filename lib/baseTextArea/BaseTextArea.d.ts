import React, { TextareaHTMLAttributes } from 'react';
import { Color, Falsifiable, ThemeColor } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseTextAreaProps<T extends ThemeColor> extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'>, BorderProps<T>, ColorProps<T>, DistanceProps, FlexItemProps, FontProps<T>, SizeProps {
    placeholderColor?: Falsifiable<Color<T>>;
}
export declare const createBaseTextArea: <T extends `_${string}`>() => React.ForwardRefExoticComponent<BaseTextAreaProps<T> & React.RefAttributes<HTMLTextAreaElement>>;
