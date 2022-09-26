import { FC, HTMLAttributes } from 'react';
import { AbsoluteSize, Color, Falsifiable } from '../types';
export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    backgroundColor?: Falsifiable<Color>;
    /** Sets blur for the content covered by the modal background. */
    blur?: AbsoluteSize | boolean;
    blurElementId?: Falsifiable<string>;
    containerElementId?: Falsifiable<string>;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const Modal: FC<ModalProps>;
