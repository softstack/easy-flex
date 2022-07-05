import { ButtonHTMLAttributes, FC } from 'react';
import { IAlignItems, IAlignSelf, IColor, IDistance, IJustifyContent } from '../types';
export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    align?: IAlignItems;
    alignSelf?: IAlignSelf;
    backgroundColor?: IColor;
    color?: IColor;
    fullWidth?: boolean;
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
export declare type IExternalBaseButtonProps = Omit<IBaseButtonProps, 'align' | 'backgroundColor' | 'color' | 'justify' | 'paddingBottom' | 'paddingLeft' | 'paddingRight' | 'paddingTop' | 'paddingX' | 'paddingY'>;
export declare const BaseButton: FC<IBaseButtonProps>;
