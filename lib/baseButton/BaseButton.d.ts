import React, { ButtonHTMLAttributes } from 'react';
import { AlignItems, AlignSelf, Color, JustifyContent, Overflow, Size, Width } from '../types';
import { BorderProps } from '../utils/border';
import { DistanceProps } from '../utils/distance';
import { FontProps } from '../utils/font';
import { SizeProps } from '../utils/size';
export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, BorderProps, DistanceProps, FontProps, SizeProps {
    /** The alignment of the component's children on the cross axis. */
    align?: AlignItems;
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: AlignSelf;
    /** Component's background color. */
    backgroundColor?: Color;
    /** Component's color. */
    color?: Color;
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
    /** Component's width. */
    width?: Width | Size;
}
export declare type ExternalBaseButtonProps = Omit<BaseButtonProps, 'align' | 'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderWidth' | 'color' | 'justify' | 'padding' | 'paddingBottom' | 'paddingHorizontal' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingVertical'>;
export declare const BaseButton: React.ForwardRefExoticComponent<BaseButtonProps & React.RefAttributes<HTMLButtonElement>>;
