import { FC, HTMLAttributes } from 'react';
import { IAbsoluteSize, IColor } from '../types';
export interface IBaseModalProps extends HTMLAttributes<HTMLDivElement> {
    backgroundColor?: IColor;
    /** Sets blur for the content covered by the modal background. */
    blur?: boolean | IAbsoluteSize;
    blurElementId?: string;
    containerElementId?: string;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const BaseModal: FC<IBaseModalProps>;
