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
export declare const useSize: ({ fullHeight, fullWidth, height, maxHeight, maxWidth, minHeight, minWidth, width, }: SizeProps) => {
    height: Size | undefined;
    maxHeight: Size | undefined;
    maxWidth: Size | undefined;
    minHeight: Size | undefined;
    minWidth: Size | undefined;
    width: Size | undefined;
};
export declare const useSizeStyleProps: (props: SizeProps) => SizeStyleProps;
export declare const sizeStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<SizeStyleProps, any>>;
