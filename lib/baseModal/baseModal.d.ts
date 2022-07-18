import { FC, HTMLAttributes } from 'react';
export interface IBaseModalProps extends HTMLAttributes<HTMLDivElement> {
    /** If true, the size of the content is limited to the viewport's size. */
    keepChildInside?: boolean;
    /** Sets blur for the content covered by the modal background. */
    blur?: boolean | number;
    /** Called if the modal background is clicked. */
    onClose: () => void;
}
export declare const BaseModal: FC<IBaseModalProps>;
