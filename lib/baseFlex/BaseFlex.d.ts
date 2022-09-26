import React, { HTMLAttributes } from 'react';
import { BaseFlexElement, Falsifiable } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexContainerProps } from '../utils/flexContainer';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { OverflowProps } from '../utils/overflow';
import { SizeProps } from '../utils/size';
export interface BaseFlexProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>, BorderProps, ColorProps, FlexContainerProps, FlexItemProps, FontProps, DistanceProps, OverflowProps, SizeProps {
    /** Component's html tag. */
    element?: Falsifiable<BaseFlexElement>;
}
export declare const BaseFlex: React.ForwardRefExoticComponent<BaseFlexProps & React.RefAttributes<HTMLDivElement>>;
