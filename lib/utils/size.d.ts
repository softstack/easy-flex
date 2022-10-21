import { CustomName, ElementSize, Falsifiable, Height, Width } from '../types';
export interface SizeProps<CustomHeight extends CustomName, CustomWidth extends CustomName> {
    /** Sets the component's height to 100% if true. */
    fullHeight?: boolean;
    /** Sets the component's width to 100% if true. */
    fullWidth?: boolean;
    /** Component's height. */
    height?: Falsifiable<Height<CustomHeight>>;
    /** Component's maximum height. */
    maxHeight?: Falsifiable<Height<CustomHeight>>;
    /** Component's maximum width. */
    maxWidth?: Falsifiable<Width<CustomWidth>>;
    /** Component's miniumum height. */
    minHeight?: Falsifiable<Height<CustomHeight>>;
    /** Component's minimum width. */
    minWidth?: Falsifiable<Width<CustomWidth>>;
    /** Component's width. */
    width?: Falsifiable<Width<CustomWidth>>;
}
export interface SizeStyleProps {
    'data-height': ElementSize | undefined;
    'data-height-max': ElementSize | undefined;
    'data-height-min': ElementSize | undefined;
    'data-width': ElementSize | undefined;
    'data-width-max': ElementSize | undefined;
    'data-width-min': ElementSize | undefined;
}
export declare const useSize: <CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>({ fullHeight, fullWidth, height, maxHeight, maxWidth, minHeight, minWidth, width, }: SizeProps<CustomHeight, CustomWidth>) => {
    height: ElementSize | undefined;
    maxHeight: ElementSize | undefined;
    maxWidth: ElementSize | undefined;
    minHeight: ElementSize | undefined;
    minWidth: ElementSize | undefined;
    width: ElementSize | undefined;
};
export declare const useSizeStyleProps: <CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>(props: SizeProps<CustomHeight, CustomWidth>) => SizeStyleProps;
export declare const sizeStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<SizeStyleProps, any>>;
