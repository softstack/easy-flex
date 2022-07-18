import { FC, HTMLAttributes } from 'react';
import { IAlignItems, IAlignSelf, IBaseFlexElement, IBorderRadius, IBorderWidth, IColor, IDistance, IFlexDirection, IHeight, IJustifyContent, IWidth } from '../types';
export interface IBaseFlexProps extends HTMLAttributes<HTMLDivElement> {
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
    /** Component's html tag. */
    element?: IBaseFlexElement;
    /** Component's flex direction. */
    flexDirection?: IFlexDirection;
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Sets the gap between the component's children. If colum-gap or row-gap depends on flexDirection. */
    gap?: IDistance | number;
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
    /** Padding of all sides. */
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
export declare const BaseFlex: FC<IBaseFlexProps>;
