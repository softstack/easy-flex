import { AbsoluteSize, CustomName, Distance, Falsifiable } from '../types';
export interface PaddingProps<CustomDistance extends CustomName> {
    /** Padding of all sides. */
    padding?: Falsifiable<Distance<CustomDistance>>;
    /** Component's bottom padding. */
    paddingBottom?: Falsifiable<Distance<CustomDistance>>;
    /** Component's left and right padding. */
    paddingHorizontal?: Falsifiable<Distance<CustomDistance>>;
    /** Component's left padding. */
    paddingLeft?: Falsifiable<Distance<CustomDistance>>;
    /** Component's right padding. */
    paddingRight?: Falsifiable<Distance<CustomDistance>>;
    /** Component's top padding. */
    paddingTop?: Falsifiable<Distance<CustomDistance>>;
    /** Component's top and bottom padding. */
    paddingVertical?: Falsifiable<Distance<CustomDistance>>;
}
export interface PaddingStyleProps {
    'data-padding-bottom': AbsoluteSize;
    'data-padding-left': AbsoluteSize;
    'data-padding-right': AbsoluteSize;
    'data-padding-top': AbsoluteSize;
}
export declare const usePadding: <CustomDistance extends `_${string}`>({ padding, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingTop, paddingVertical, }: PaddingProps<CustomDistance>) => {
    bottom: AbsoluteSize;
    left: AbsoluteSize;
    right: AbsoluteSize;
    top: AbsoluteSize;
};
export declare const usePaddingStyleProps: <CustomDistance extends `_${string}`>(props: PaddingProps<CustomDistance>) => PaddingStyleProps;
export declare const paddingStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<PaddingStyleProps, any>>;
