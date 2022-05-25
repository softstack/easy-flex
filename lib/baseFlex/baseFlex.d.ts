import { FC, HTMLAttributes } from 'react';
import { IAlignItems, IAlignSelf, IBaseFlexElement, IColor, IDistance, IFlexDirection, IJustifyContent } from '../types';
export interface IBaseFlexProps extends HTMLAttributes<HTMLDivElement> {
    align?: IAlignItems;
    alignSelf?: IAlignSelf;
    backgroundColor?: IColor;
    color?: IColor;
    element?: IBaseFlexElement;
    flexDirection?: IFlexDirection;
    fullWidth?: boolean;
    gap?: number | IDistance;
    grow?: number;
    horizontalMargin?: IDistance | number;
    horizontalPadding?: IDistance | number;
    justify?: IJustifyContent;
    shrink?: number;
    verticalMargin?: IDistance | number;
    verticalPadding?: IDistance | number;
}
export declare const BaseFlex: FC<IBaseFlexProps>;
