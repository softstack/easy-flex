import React, { HTMLAttributes } from 'react';
import { AbsoluteSize, AlignItems, AlignSelf, BaseFlexElement, Color, Distance, FlexDirection, JustifyContent, Overflow } from '../types';
import { BorderProps } from '../utils/border';
import { DistanceProps } from '../utils/distance';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseFlexProps extends HTMLAttributes<HTMLDivElement>, BorderProps, FontProps, DistanceProps, SizeProps {
    /** The alignment of the component's children on the cross axis. */
    align?: AlignItems;
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: AlignSelf;
    /** Component's background color. */
    backgroundColor?: Color;
    /** Component's color. */
    color?: Color;
    /** Component's html tag. */
    element?: BaseFlexElement;
    /** Component's flex direction. */
    flexDirection?: FlexDirection;
    /** Sets the gap between the component's children. If colum-gap or row-gap depends on flexDirection. */
    gap?: Distance | AbsoluteSize;
    /** Component's flex grow. */
    grow?: number;
    /** Sets how the browser distributes space between and around the component's children along the main axis. */
    justify?: JustifyContent;
    /** Component's overflow behaviour. */
    overflow?: Overflow;
    /** Component's verflow behaviour on left and right edges. */
    overflowX?: Overflow;
    /** Component's overflow behaviour on top and bottom edges. */
    overflowY?: Overflow;
    /** Component's flex shrink. */
    shrink?: number;
}
export declare const BaseFlex: React.ForwardRefExoticComponent<BaseFlexProps & React.RefAttributes<HTMLDivElement>>;
