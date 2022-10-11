import React, { InputHTMLAttributes } from 'react';
import { Color, Falsifiable, ThemeColor } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseInputProps<T extends ThemeColor> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'height' | 'width'>, BorderProps<T>, ColorProps<T>, DistanceProps, FlexItemProps, FontProps<T>, SizeProps {
    placeholderColor?: Falsifiable<Color<T>>;
}
export declare const createBaseInput: <T extends `_${string}`>() => React.ForwardRefExoticComponent<BaseInputProps<T> & React.RefAttributes<HTMLInputElement>>;
