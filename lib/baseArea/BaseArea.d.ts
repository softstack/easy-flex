import React, { AreaHTMLAttributes } from 'react';
import { Color } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseAreaProps extends Omit<AreaHTMLAttributes<HTMLAreaElement>, 'color'>, BorderProps, ColorProps, DistanceProps, FlexItemProps, FontProps, SizeProps {
    placeholderColor?: Color;
}
export declare const BaseArea: React.ForwardRefExoticComponent<BaseAreaProps & React.RefAttributes<HTMLAreaElement>>;
