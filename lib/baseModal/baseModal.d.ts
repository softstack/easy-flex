import { FC, HTMLAttributes } from 'react';
interface IBaseModalProps extends HTMLAttributes<HTMLDivElement> {
    keepChildInside?: boolean;
    blur?: boolean | number;
    onClose: () => void;
}
export declare const BaseModal: FC<IBaseModalProps>;
export {};
