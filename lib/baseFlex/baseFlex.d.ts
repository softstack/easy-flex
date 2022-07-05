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
    justify?: IJustifyContent;
    marginBottom?: IDistance | number;
    marginLeft?: IDistance | number;
    marginRight?: IDistance | number;
    marginTop?: IDistance | number;
    marginX?: IDistance | number;
    marginY?: IDistance | number;
    paddingBottom?: IDistance | number;
    paddingLeft?: IDistance | number;
    paddingRight?: IDistance | number;
    paddingTop?: IDistance | number;
    paddingX?: IDistance | number;
    paddingY?: IDistance | number;
    shrink?: number;
}
export declare const BaseFlex: FC<IBaseFlexProps>;
