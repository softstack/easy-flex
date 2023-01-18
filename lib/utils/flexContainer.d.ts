import { AbsoluteSize, AlignItems, CustomName, Distance, Falsifiable, FlexDirection, FlexWrap, JustifyContent } from '../types';
export interface FlexContainerProps<CustomDistance extends CustomName> {
    /** The alignment of the component's children on the cross axis. */
    align?: Falsifiable<AlignItems>;
    /** Component's flex direction. */
    direction?: Falsifiable<FlexDirection>;
    /** Sets the gap between the component's children. If colum-gap or row-gap depends on direction. */
    gap?: Falsifiable<Distance<CustomDistance>>;
    /** Sets how the browser distributes space between and around the component's children along the main axis. */
    justify?: Falsifiable<JustifyContent>;
    wrap?: Falsifiable<FlexWrap>;
    wrapGap?: Falsifiable<Distance<CustomDistance>>;
}
export interface FlexContainerStyleProps {
    'data-align': Falsifiable<AlignItems> | undefined;
    'data-direction': Falsifiable<FlexDirection> | undefined;
    'data-column-gap': Falsifiable<AbsoluteSize> | undefined;
    'data-row-gap': Falsifiable<AbsoluteSize> | undefined;
    'data-justify': Falsifiable<JustifyContent> | undefined;
    'data-wrap': Falsifiable<FlexWrap> | undefined;
}
export declare const useGap: <CustomDistance extends `_${string}`>({ direction, gap, wrapGap, }: {
    direction?: Falsifiable<FlexDirection> | undefined;
    gap?: Falsifiable<Distance<CustomDistance>> | undefined;
    wrapGap?: Falsifiable<Distance<CustomDistance>> | undefined;
}) => {
    column: AbsoluteSize | undefined;
    row: AbsoluteSize | undefined;
};
export declare const useFlexContainerStyleProps: <CustomDistance extends `_${string}`>({ align, direction, gap, justify, wrap, wrapGap, }: FlexContainerProps<CustomDistance>) => FlexContainerStyleProps;
export declare const flexContainerStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<FlexContainerStyleProps, any>>;
