import { FC, HTMLAttributes } from 'react';
import { AbsoluteSize, Color } from '../types';
export interface BaseModalProps extends HTMLAttributes<HTMLDivElement> {
    backgroundColor?: Color;
    /** Sets blur for the content covered by the modal background. */
    blur?: boolean | AbsoluteSize;
    blurElementId?: string;
    containerElementId?: string;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const BaseModal: FC<BaseModalProps>;
