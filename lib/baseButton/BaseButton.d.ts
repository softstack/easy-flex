import { ButtonHTMLAttributes, FC } from 'react';
import { AbsoluteSize, AlignItems, AlignSelf, BorderRadius, BorderWidth, Color, Distance, Height, JustifyContent, Overflow, Size, Width } from '../types';
export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** The alignment of the component's children on the cross axis. */
    align?: AlignItems;
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: AlignSelf;
    /** Component's background color. */
    backgroundColor?: Color;
    /** Component's border color. */
    borderColor?: Color;
    /** Component's border radius. */
    borderRadius?: BorderRadius | AbsoluteSize;
    /** Component's border width. */
    borderWidth?: BorderWidth | AbsoluteSize;
    /** Component's color. */
    color?: Color;
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Component's flex grow. */
    grow?: number;
    /** Component's height. */
    height?: Height | Size;
    /** Sets how the browser distributes space between and around the component's children along the main axis. */
    justify?: JustifyContent;
    /** Component's margin of all sides. */
    margin?: Distance | AbsoluteSize;
    /** Component's bottom margin. */
    marginBottom?: Distance | AbsoluteSize;
    /** Component's left margin. */
    marginLeft?: Distance | AbsoluteSize;
    /** Component's right margin. */
    marginRight?: Distance | AbsoluteSize;
    /** Component's top margin. */
    marginTop?: Distance | AbsoluteSize;
    /** Component's left and right margin. */
    marginHorizontal?: Distance | AbsoluteSize;
    /** Component's top and bottom margin. */
    marginVertical?: Distance | AbsoluteSize;
    /** Component's maximum height. */
    maxHeight?: Height | Size;
    /** Component's maximum width. */
    maxWidth?: Width | Size;
    /** Component's miniumum height. */
    minHeight?: Height | Size;
    /** Component's minimum width. */
    minWidth?: Width | Size;
    /** Component's overflow behaviour. */
    overflow?: Overflow;
    /** Component's verflow behaviour on left and right edges. */
    overflowX?: Overflow;
    /** Component's overflow behaviour on top and bottom edges. */
    overflowY?: Overflow;
    /** Padding of all sides. */
    /** Component's padding of all sides. */
    padding?: Distance | AbsoluteSize;
    /** Component's bottom padding. */
    paddingBottom?: Distance | AbsoluteSize;
    /** Component's left padding. */
    paddingLeft?: Distance | AbsoluteSize;
    /** Component's right padding. */
    paddingRight?: Distance | AbsoluteSize;
    /** Component's top padding. */
    paddingTop?: Distance | AbsoluteSize;
    /** Component's left and right padding. */
    paddingHorizontal?: Distance | AbsoluteSize;
    /** Component's top and bottom padding. */
    paddingVertical?: Distance | AbsoluteSize;
    /** Component's flex shrink. */
    shrink?: number;
    /** Component's width. */
    width?: Width | Size;
}
export declare type ExternalBaseButtonProps = Omit<BaseButtonProps, 'align' | 'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderWidth' | 'color' | 'justify' | 'padding' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingHorizontal' | 'paddingVertical'>;
export declare const BaseButton: FC<BaseButtonProps>;
