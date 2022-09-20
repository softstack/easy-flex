import { AbsoluteSize, Distance } from '../types';
export interface PaddingProps {
    /** Padding of all sides. */
    padding?: Distance;
    /** Component's bottom padding. */
    paddingBottom?: Distance;
    /** Component's left and right padding. */
    paddingHorizontal?: Distance;
    /** Component's left padding. */
    paddingLeft?: Distance;
    /** Component's right padding. */
    paddingRight?: Distance;
    /** Component's top padding. */
    paddingTop?: Distance;
    /** Component's top and bottom padding. */
    paddingVertical?: Distance;
}
export interface PaddingStyleProps {
    'data-padding-bottom': AbsoluteSize;
    'data-padding-left': AbsoluteSize;
    'data-padding-right': AbsoluteSize;
    'data-padding-top': AbsoluteSize;
}
export declare const usePadding: ({ padding, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingTop, paddingVertical, }: PaddingProps) => {
    bottom: AbsoluteSize;
    left: AbsoluteSize;
    right: AbsoluteSize;
    top: AbsoluteSize;
};
export declare const usePaddingStyleProps: (props: PaddingProps) => PaddingStyleProps;
export declare const paddingStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<PaddingStyleProps, any>>;
