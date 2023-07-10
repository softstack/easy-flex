import React, { HTMLAttributes } from 'react';
import { AbsoluteSize, Color, CustomName, Falsifiable } from '../types';
import { MiscProps } from '../utils/misc';
export interface ModalProps<CustomColor extends CustomName, CustomDistance extends CustomName> extends HTMLAttributes<HTMLDivElement>, MiscProps<CustomDistance> {
    backgroundColor?: Falsifiable<Color<CustomColor>>;
    /** Sets blur for the content covered by the modal background. */
    blur?: AbsoluteSize | boolean;
    containerElementId?: Falsifiable<string>;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const createModal: <CustomColor extends `_${string}`, CustomDistance extends `_${string}`>() => React.NamedExoticComponent<ModalProps<CustomColor, CustomDistance>>;
