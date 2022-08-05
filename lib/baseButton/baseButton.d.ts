import { ButtonHTMLAttributes, FC } from 'react';
import { IAlignItems, IAlignSelf, IBorderRadius, IBorderWidth, IColor, IDistance, IHeight, IJustifyContent, IOverflow, IWidth } from '../types';
export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** The alignment of the component's children on the cross axis. */
    align?: IAlignItems;
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: IAlignSelf;
    /** Component's background color. */
    backgroundColor?: IColor;
    /** Component's border color. */
    borderColor?: IColor;
    /** Component's border radius. */
    borderRadius?: IBorderRadius | number;
    /** Component's border width. */
    borderWidth?: IBorderWidth | number;
    /** Component's color. */
    color?: IColor;
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Component's flex grow. */
    grow?: number;
    /** Component's height. */
    height?: IHeight | number;
    /** Sets how the browser distributes space between and around the component's children along the main axis. */
    justify?: IJustifyContent;
    /** Component's margin of all sides. */
    margin?: IDistance | number;
    /** Component's bottom margin. */
    marginBottom?: IDistance | number;
    /** Component's left margin. */
    marginLeft?: IDistance | number;
    /** Component's right margin. */
    marginRight?: IDistance | number;
    /** Component's top margin. */
    marginTop?: IDistance | number;
    /** Component's left and right margin. */
    marginX?: IDistance | number;
    /** Component's top and bottom margin. */
    marginY?: IDistance | number;
    /** Component's maximum height. */
    maxHeight?: IHeight | number;
    /** Component's maximum width. */
    maxWidth?: IWidth | number;
    /** Component's miniumum height. */
    minHeight?: IHeight | number;
    /** Component's minimum width. */
    minWidth?: IWidth | number;
    /** Component's overflow behaviour. */
    overflow?: IOverflow;
    /** Component's verflow behaviour on left and right edges. */
    overflowX?: IOverflow;
    /** Component's overflow behaviour on top and bottom edges. */
    overflowY?: IOverflow;
    /** Padding of all sides. */
    /** Component's padding of all sides. */
    padding?: IDistance | number;
    /** Component's bottom padding. */
    paddingBottom?: IDistance | number;
    /** Component's left padding. */
    paddingLeft?: IDistance | number;
    /** Component's right padding. */
    paddingRight?: IDistance | number;
    /** Component's top padding. */
    paddingTop?: IDistance | number;
    /** Component's left and right padding. */
    paddingX?: IDistance | number;
    /** Component's top and bottom padding. */
    paddingY?: IDistance | number;
    /** Component's flex shrink. */
    shrink?: number;
    /** Component's width. */
    width?: IWidth | number;
}
export declare type IExternalBaseButtonProps = Omit<IBaseButtonProps, 'align' | 'backgroundColor' | 'borderColor' | 'borderRadius' | 'borderWidth' | 'color' | 'justify' | 'padding' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingX' | 'paddingY'>;
export declare const BaseButton: FC<IBaseButtonProps>;
