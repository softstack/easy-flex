import React, { HTMLAttributes } from 'react';
import { BaseFlexElement, Color, Overflow } from '../types';
import { BorderProps } from '../utils/border';
import { DistanceProps } from '../utils/distance';
import { FlexContainerProps } from '../utils/flexContainer';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseFlexProps extends HTMLAttributes<HTMLDivElement>, BorderProps, FlexContainerProps, FlexItemProps, FontProps, DistanceProps, SizeProps {
    /** Component's background color. */
    backgroundColor?: Color;
    /** Component's color. */
    color?: Color;
    /** Component's html tag. */
    element?: BaseFlexElement;
    /** Component's overflow behaviour. */
    overflow?: Overflow;
    /** Component's verflow behaviour on left and right edges. */
    overflowX?: Overflow;
    /** Component's overflow behaviour on top and bottom edges. */
    overflowY?: Overflow;
}
export declare const BaseFlex: React.ForwardRefExoticComponent<BaseFlexProps & React.RefAttributes<HTMLDivElement>>;
