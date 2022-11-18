import React, { HTMLAttributes } from 'react';
import { AbsoluteSize, Color, CustomName, Falsifiable } from '../types';
import { MiscProps } from '../utils/misc';
export interface ModalProps<CustomColor extends CustomName> extends HTMLAttributes<HTMLDivElement>, MiscProps {
    backgroundColor?: Falsifiable<Color<CustomColor>>;
    /** Sets blur for the content covered by the modal background. */
    blur?: AbsoluteSize | boolean;
    containerElementId?: Falsifiable<string>;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const createModal: <CustomColor extends `_${string}`>() => React.NamedExoticComponent<ModalProps<CustomColor>>;
