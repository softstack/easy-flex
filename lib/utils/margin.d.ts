import { AbsoluteSize, Distance, Falsifiable } from '../types';
export interface MarginProps {
    /** Component's margin of all sides. */
    margin?: Falsifiable<Distance>;
    /** Component's bottom margin. */
    marginBottom?: Falsifiable<Distance>;
    /** Component's left and right margin. */
    marginHorizontal?: Falsifiable<Distance>;
    /** Component's left margin. */
    marginLeft?: Falsifiable<Distance>;
    /** Component's right margin. */
    marginRight?: Falsifiable<Distance>;
    /** Component's top margin. */
    marginTop?: Falsifiable<Distance>;
    /** Component's top and bottom margin. */
    marginVertical?: Falsifiable<Distance>;
}
export interface MarginStyleProps {
    'data-margin-bottom': AbsoluteSize;
    'data-margin-left': AbsoluteSize;
    'data-margin-right': AbsoluteSize;
    'data-margin-top': AbsoluteSize;
}
export declare const useMargin: ({ margin, marginBottom, marginHorizontal, marginLeft, marginRight, marginTop, marginVertical, }: MarginProps) => {
    bottom: AbsoluteSize;
    left: AbsoluteSize;
    right: AbsoluteSize;
    top: AbsoluteSize;
};
export declare const useMarginStyleProps: (props: MarginProps) => MarginStyleProps;
export declare const marginStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<MarginStyleProps, any>>;
