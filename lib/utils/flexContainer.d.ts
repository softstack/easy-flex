import { AbsoluteSize, AlignItems, Distance, FlexDirection, JustifyContent } from '../types';
export interface FlexContainerProps {
    /** The alignment of the component's children on the cross axis. */
    align?: AlignItems;
    /** Component's flex direction. */
    direction?: FlexDirection;
    /** Sets the gap between the component's children. If colum-gap or row-gap depends on direction. */
    gap?: Distance;
    /** Sets how the browser distributes space between and around the component's children along the main axis. */
    justify?: JustifyContent;
}
export interface FlexContainerStyleProps {
    'data-align'?: AlignItems;
    'data-direction'?: FlexDirection;
    'data-column-gap'?: AbsoluteSize;
    'data-row-gap'?: AbsoluteSize;
    'data-justify'?: JustifyContent;
}
export declare const useGap: ({ direction, gap, }: {
    direction?: FlexDirection | undefined;
    gap?: Distance | undefined;
}) => {
    column: AbsoluteSize | undefined;
    row: AbsoluteSize | undefined;
};
export declare const useFlexContainerStyleProps: ({ align, direction, gap, justify, }: FlexContainerProps) => FlexContainerStyleProps;
export declare const flexContainerStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FlexContainerStyleProps, any>>;
