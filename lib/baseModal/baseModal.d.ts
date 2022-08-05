import { FC, HTMLAttributes } from 'react';
import { IAbsoluteSize } from '../types';
export interface IBaseModalProps extends HTMLAttributes<HTMLDivElement> {
    /** Sets blur for the content covered by the modal background. */
    blur?: boolean | IAbsoluteSize;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const BaseModal: FC<IBaseModalProps>;
