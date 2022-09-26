import { AlignSelf, Falsifiable, Flex, FlexBasis } from '../types';
export interface FlexItemProps {
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: Falsifiable<AlignSelf>;
    basis?: Falsifiable<FlexBasis>;
    flex?: Falsifiable<Flex>;
    /** Component's flex grow. */
    grow?: Falsifiable<number>;
    /** Component's flex shrink. */
    shrink?: Falsifiable<number>;
}
export interface FlexItemStyleProps {
    'data-align-self'?: Falsifiable<AlignSelf>;
    'data-basis'?: Falsifiable<FlexBasis>;
    'data-flex'?: Falsifiable<Flex>;
    'data-grow'?: Falsifiable<number>;
    'data-shrink'?: Falsifiable<number>;
}
export declare const useFlexItemStyleProps: ({ alignSelf, basis, flex, grow, shrink }: FlexItemProps) => FlexItemStyleProps;
export declare const flexItemStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FlexItemStyleProps, any>>;
