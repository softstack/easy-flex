import { FC, HTMLAttributes } from 'react';
import { AbsoluteSize, Color } from '../types';
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    backgroundColor?: Color;
    /** Sets blur for the content covered by the modal background. */
    blur?: AbsoluteSize | boolean;
    blurElementId?: string;
    containerElementId?: string;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const Modal: FC<ModalProps>;
