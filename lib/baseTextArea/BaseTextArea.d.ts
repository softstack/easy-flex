import React, { TextareaHTMLAttributes } from 'react';
import { Color } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseTextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'color'>, BorderProps, ColorProps, DistanceProps, FlexItemProps, FontProps, SizeProps {
    placeholderColor?: Color;
}
export declare const BaseTextArea: React.ForwardRefExoticComponent<BaseTextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
