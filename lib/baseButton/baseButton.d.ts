import { ButtonHTMLAttributes, FC } from 'react';
import { IAlignItems, IAlignSelf, IColor, IDistance, IJustifyContent } from '../types';
export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    align?: IAlignItems;
    alignSelf?: IAlignSelf;
    backgroundColor?: IColor;
    color?: IColor;
    fullWidth?: boolean;
    grow?: number;
    horizontalMargin?: IDistance | number;
    horizontalPadding?: IDistance | number;
    justify?: IJustifyContent;
    shrink?: number;
    verticalMargin?: IDistance | number;
    verticalPadding?: IDistance | number;
}
export declare type IExternalBaseButtonProps = Omit<IBaseButtonProps, 'align' | 'backgroundColor' | 'color' | 'horizontalPadding' | 'verticalPadding' | 'justify'>;
export declare const BaseButton: FC<IBaseButtonProps>;
