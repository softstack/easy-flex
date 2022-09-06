import { Overflow } from '../types';
export interface OverflowProps {
    /** Component's overflow behaviour. */
    overflow?: Overflow;
    /** Component's verflow behaviour on left and right edges. */
    overflowX?: Overflow;
    /** Component's overflow behaviour on top and bottom edges. */
    overflowY?: Overflow;
}
export interface OverflowStyleProps {
    'data-overflow'?: Overflow;
    'data-overflow-x'?: Overflow;
    'data-overflow-y'?: Overflow;
}
export declare const useOverflowStyleProps: (props: OverflowProps) => OverflowStyleProps;
export declare const overflowStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<OverflowStyleProps, any>>;
