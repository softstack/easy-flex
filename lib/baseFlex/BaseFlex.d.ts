import { FC, HTMLAttributes } from 'react';
import { IAbsoluteSize, IAlignItems, IAlignSelf, IBaseFlexElement, IBorderRadius, IBorderWidth, IColor, IDistance, IFlexDirection, IHeight, IJustifyContent, IOverflow, ISize, IWidth } from '../types';
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
    borderRadius?: IBorderRadius | IAbsoluteSize;
    /** Component's border width. */
    borderWidth?: IBorderWidth | IAbsoluteSize;
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
    gap?: IDistance | IAbsoluteSize;
    /** Component's flex grow. */
    grow?: number;
    /** Component's height. */
    height?: IHeight | ISize;
    /** Sets how the browser distributes space between and around the component's children along the main axis. */
    justify?: IJustifyContent;
    /** Component's margin of all sides. */
    margin?: IDistance | IAbsoluteSize;
    /** Component's bottom margin. */
    marginBottom?: IDistance | IAbsoluteSize;
    /** Component's left margin. */
    marginLeft?: IDistance | IAbsoluteSize;
    /** Component's right margin. */
    marginRight?: IDistance | IAbsoluteSize;
    /** Component's top margin. */
    marginTop?: IDistance | IAbsoluteSize;
    /** Component's left and right margin. */
    marginHorizontal?: IDistance | IAbsoluteSize;
    /** Component's top and bottom margin. */
    marginVertical?: IDistance | IAbsoluteSize;
    /** Component's maximum height. */
    maxHeight?: IHeight | ISize;
    /** Component's maximum width. */
    maxWidth?: IWidth | ISize;
    /** Component's miniumum height. */
    minHeight?: IHeight | ISize;
    /** Component's minimum width. */
    minWidth?: IWidth | ISize;
    /** Component's overflow behaviour. */
    overflow?: IOverflow;
    /** Component's verflow behaviour on left and right edges. */
    overflowX?: IOverflow;
    /** Component's overflow behaviour on top and bottom edges. */
    overflowY?: IOverflow;
    /** Padding of all sides. */
    padding?: IDistance | IAbsoluteSize;
    /** Component's bottom padding. */
    paddingBottom?: IDistance | IAbsoluteSize;
    /** Component's left padding. */
    paddingLeft?: IDistance | IAbsoluteSize;
    /** Component's right padding. */
    paddingRight?: IDistance | IAbsoluteSize;
    /** Component's top padding. */
    paddingTop?: IDistance | IAbsoluteSize;
    /** Component's left and right padding. */
    paddingHorizontal?: IDistance | IAbsoluteSize;
    /** Component's top and bottom padding. */
    paddingVertical?: IDistance | IAbsoluteSize;
    /** Component's flex shrink. */
    shrink?: number;
    /** Component's width. */
    width?: IWidth | ISize;
}
export declare const BaseFlex: FC<IBaseFlexProps>;
