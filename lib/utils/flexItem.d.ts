import { AlignSelf, Flex, FlexBasis } from '../types';
export interface FlexItemProps {
    /** The alignment of the component on the parent's element cross axis. */
    alignSelf?: AlignSelf;
    basis?: FlexBasis;
    flex?: Flex;
    /** Component's flex grow. */
    grow?: number;
    /** Component's flex shrink. */
    shrink?: number;
}
export interface FlexItemStyleProps {
    'data-align-self'?: AlignSelf;
    'data-basis'?: FlexBasis;
    'data-flex'?: Flex;
    'data-grow'?: number;
    'data-shrink'?: number;
}
export declare const useFlexItemStyleProps: ({ alignSelf, basis, flex, grow, shrink }: FlexItemProps) => FlexItemStyleProps;
export declare const flexItemStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FlexItemStyleProps, any>>;
