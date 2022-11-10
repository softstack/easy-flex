import React, { HTMLAttributes } from 'react';
import { AbsoluteSize, Color, CustomName, Falsifiable } from '../types';
export interface ModalProps<CustomColor extends CustomName> extends HTMLAttributes<HTMLDivElement> {
    backgroundColor?: Falsifiable<Color<CustomColor>>;
    /** Sets blur for the content covered by the modal background. */
    blur?: AbsoluteSize | boolean;
    blurElementId?: Falsifiable<string>;
    containerElementId?: Falsifiable<string>;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const createModal: <CustomColor extends `_${string}`>() => React.NamedExoticComponent<ModalProps<CustomColor>>;
