import { AbsoluteSize, AlignItems, CustomName, Distance, Falsifiable, FlexDirection, JustifyContent } from '../types';
export interface FlexContainerProps<CustomDistance extends CustomName> {
    /** The alignment of the component's children on the cross axis. */
    align?: Falsifiable<AlignItems>;
    /** Component's flex direction. */
    direction?: Falsifiable<FlexDirection>;
    /** Sets the gap between the component's children. If colum-gap or row-gap depends on direction. */
    gap?: Falsifiable<Distance<CustomDistance>>;
    /** Sets how the browser distributes space between and around the component's children along the main axis. */
    justify?: Falsifiable<JustifyContent>;
}
export interface FlexContainerStyleProps {
    'data-align'?: Falsifiable<AlignItems>;
    'data-direction'?: Falsifiable<FlexDirection>;
    'data-column-gap'?: Falsifiable<AbsoluteSize>;
    'data-row-gap'?: Falsifiable<AbsoluteSize>;
    'data-justify'?: Falsifiable<JustifyContent>;
}
export declare const useGap: <CustomDistance extends `_${string}`>({ direction, gap, }: {
    direction?: Falsifiable<FlexDirection> | undefined;
    gap?: Falsifiable<Distance<CustomDistance>> | undefined;
}) => {
    column: AbsoluteSize | undefined;
    row: AbsoluteSize | undefined;
};
export declare const useFlexContainerStyleProps: <CustomDistance extends `_${string}`>({ align, direction, gap, justify, }: FlexContainerProps<CustomDistance>) => FlexContainerStyleProps;
export declare const flexContainerStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FlexContainerStyleProps, any>>;
