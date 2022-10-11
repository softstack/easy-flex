import React, { HTMLAttributes } from 'react';
import { BaseFlexElement, Falsifiable, ThemeColor } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexContainerProps } from '../utils/flexContainer';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { OverflowProps } from '../utils/overflow';
import { SizeProps } from '../utils/size';
export interface BaseFlexProps<T extends ThemeColor> extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, BorderProps<T>, ColorProps<T>, FlexContainerProps, FlexItemProps, FontProps<T>, DistanceProps, OverflowProps, SizeProps {
    /** Component's html tag. */
    element?: Falsifiable<BaseFlexElement>;
}
export declare const createBaseFlex: <T extends `_${string}`>() => React.ForwardRefExoticComponent<BaseFlexProps<T> & React.RefAttributes<HTMLDivElement>>;
