import React, { HTMLAttributes } from 'react';
import { BaseGridElement, Color } from '../types';
import { BorderProps } from '../utils/border';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseGridProps extends HTMLAttributes<HTMLDivElement>, BorderProps, FlexItemProps, FontProps, DistanceProps, SizeProps {
    /** Component's background color. */
    backgroundColor?: Color;
    /** Component's color. */
    color?: Color;
    /** Component's html tag. */
    element?: BaseGridElement;
}
export declare const BaseGrid: React.ForwardRefExoticComponent<BaseGridProps & React.RefAttributes<HTMLDivElement>>;
