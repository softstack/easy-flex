import React, { HTMLAttributes } from 'react';
import { AbsoluteSize, Color, Falsifiable, ThemeColor } from '../types';
export interface ModalProps<T extends ThemeColor> extends HTMLAttributes<HTMLDivElement> {
    backgroundColor?: Falsifiable<Color<T>>;
    /** Sets blur for the content covered by the modal background. */
    blur?: AbsoluteSize | boolean;
    blurElementId?: Falsifiable<string>;
    containerElementId?: Falsifiable<string>;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const createModal: <T extends `_${string}`>() => React.FC<ModalProps<T>>;
