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
    'data-align-self': Falsifiable<AlignSelf> | undefined;
    'data-basis': Falsifiable<FlexBasis> | undefined;
    'data-flex': Falsifiable<Flex> | undefined;
    'data-grow': Falsifiable<number> | undefined;
    'data-shrink': Falsifiable<number> | undefined;
}
export declare const useFlexItemStyleProps: ({ alignSelf, basis, flex, grow, shrink }: FlexItemProps) => FlexItemStyleProps;
export declare const flexItemStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FlexItemStyleProps, any>>;
