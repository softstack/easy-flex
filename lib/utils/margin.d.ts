import { AbsoluteSize, Distance } from '../types';
export interface MarginProps {
    /** Component's margin of all sides. */
    margin?: Distance | AbsoluteSize;
    /** Component's bottom margin. */
    marginBottom?: Distance | AbsoluteSize;
    /** Component's left margin. */
    marginLeft?: Distance | AbsoluteSize;
    /** Component's right margin. */
    marginRight?: Distance | AbsoluteSize;
    /** Component's top margin. */
    marginTop?: Distance | AbsoluteSize;
    /** Component's left and right margin. */
    marginHorizontal?: Distance | AbsoluteSize;
    /** Component's top and bottom margin. */
    marginVertical?: Distance | AbsoluteSize;
}
export interface MarginStyleProps {
    'data-margin-bottom': AbsoluteSize;
    'data-margin-left': AbsoluteSize;
    'data-margin-right': AbsoluteSize;
    'data-margin-top': AbsoluteSize;
}
export declare const useMarginStyleProps: (data: {
    margin?: Distance | AbsoluteSize;
    marginBottom?: Distance | AbsoluteSize;
    marginLeft?: Distance | AbsoluteSize;
    marginRight?: Distance | AbsoluteSize;
    marginTop?: Distance | AbsoluteSize;
    marginHorizontal?: Distance | AbsoluteSize;
    marginVertical?: Distance | AbsoluteSize;
}) => MarginStyleProps;
export declare const marginStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<MarginStyleProps, any>>;
