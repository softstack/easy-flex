import React, { InputHTMLAttributes } from 'react';
import { Color, Falsifiable } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'height' | 'width'>, BorderProps, ColorProps, DistanceProps, FlexItemProps, FontProps, SizeProps {
    placeholderColor?: Falsifiable<Color>;
}
export declare const BaseInput: React.ForwardRefExoticComponent<BaseInputProps & React.RefAttributes<HTMLInputElement>>;
