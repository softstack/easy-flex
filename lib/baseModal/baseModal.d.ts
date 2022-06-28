import { FC } from 'react';
import { IColProps } from '../col/col';
interface IBaseModalProps extends IColProps {
    onClose: () => void;
}
export declare const BaseModal: FC<IBaseModalProps>;
export {};
