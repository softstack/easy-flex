import { AbsoluteSize, CustomName, Distance, Falsifiable } from '../types';
export interface MarginProps<CustomDistance extends CustomName> {
    /** Component's margin of all sides. */
    margin?: Falsifiable<Distance<CustomDistance>>;
    /** Component's bottom margin. */
    marginBottom?: Falsifiable<Distance<CustomDistance>>;
    /** Component's left and right margin. */
    marginHorizontal?: Falsifiable<Distance<CustomDistance>>;
    /** Component's left margin. */
    marginLeft?: Falsifiable<Distance<CustomDistance>>;
    /** Component's right margin. */
    marginRight?: Falsifiable<Distance<CustomDistance>>;
    /** Component's top margin. */
    marginTop?: Falsifiable<Distance<CustomDistance>>;
    /** Component's top and bottom margin. */
    marginVertical?: Falsifiable<Distance<CustomDistance>>;
}
export interface MarginStyleProps {
    'data-margin-bottom': AbsoluteSize;
    'data-margin-left': AbsoluteSize;
    'data-margin-right': AbsoluteSize;
    'data-margin-top': AbsoluteSize;
}
export declare const useMargin: <CustomDistance extends `_${string}`>({ margin, marginBottom, marginHorizontal, marginLeft, marginRight, marginTop, marginVertical, }: MarginProps<CustomDistance>) => {
    bottom: AbsoluteSize;
    left: AbsoluteSize;
    right: AbsoluteSize;
    top: AbsoluteSize;
};
export declare const useMarginStyleProps: <CustomDistance extends `_${string}`>(props: MarginProps<CustomDistance>) => MarginStyleProps;
export declare const marginStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<MarginStyleProps, any>>;
