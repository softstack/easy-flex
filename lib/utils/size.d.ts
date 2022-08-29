import { Height, Size, Width } from '../types';
export interface SizeProps {
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Component's height. */
    height?: Height | Size;
    /** Component's maximum height. */
    maxHeight?: Height | Size;
    /** Component's maximum width. */
    maxWidth?: Width | Size;
    /** Component's miniumum height. */
    minHeight?: Height | Size;
    /** Component's minimum width. */
    minWidth?: Width | Size;
    /** Component's width. */
    width?: Width | Size;
}
export interface SizeStyleProps {
    'data-height'?: Size;
    'data-height-max'?: Size;
    'data-height-min'?: Size;
    'data-width'?: Size;
    'data-width-max'?: Size;
    'data-width-min'?: Size;
}
export declare const useSizeStyleProps: (data: {
    fullHeight?: boolean;
    fullWidth?: boolean;
    height?: Height | Size;
    heightMax?: Height | Size;
    heightMin?: Height | Size;
    width?: Width | Size;
    widthMax?: Width | Size;
    widthMin?: Width | Size;
}) => SizeStyleProps;
export declare const sizeStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<SizeStyleProps, any>>;
