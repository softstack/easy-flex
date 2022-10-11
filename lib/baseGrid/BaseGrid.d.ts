import React, { HTMLAttributes } from 'react';
import { BaseGridElement, Distance, Falsifiable, ThemeColor } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseGridProps<T extends ThemeColor> extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, BorderProps<T>, ColorProps<T>, FlexItemProps, FontProps<T>, DistanceProps, SizeProps {
    columnGap?: Falsifiable<Distance>;
    /** Component's html tag. */
    element?: Falsifiable<BaseGridElement>;
    rowGap?: Falsifiable<Distance>;
}
export declare const createBaseGrid: <T extends `_${string}`>() => React.ForwardRefExoticComponent<BaseGridProps<T> & React.RefAttributes<HTMLDivElement>>;
