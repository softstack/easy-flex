import { Falsifiable, Overflow } from '../types';
export interface OverflowProps {
    /** Component's overflow behaviour. */
    overflow?: Falsifiable<Overflow>;
    /** Component's verflow behaviour on left and right edges. */
    overflowX?: Falsifiable<Overflow>;
    /** Component's overflow behaviour on top and bottom edges. */
    overflowY?: Falsifiable<Overflow>;
}
export interface OverflowStyleProps {
    'data-overflow'?: Falsifiable<Overflow>;
    'data-overflow-x'?: Falsifiable<Overflow>;
    'data-overflow-y'?: Falsifiable<Overflow>;
}
export declare const useOverflowStyleProps: (props: OverflowProps) => OverflowStyleProps;
export declare const overflowStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<OverflowStyleProps, any>>;
