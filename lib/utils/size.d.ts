import { AspectRatio, CssAspectRatio, CustomName, ElementSize, Falsifiable, Height, Width } from '../types';
export interface SizeProps<CustomAspectRatio extends CustomName, CustomHeight extends CustomName, CustomWidth extends CustomName> {
    aspectRatio?: Falsifiable<AspectRatio<CustomAspectRatio>>;
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
    'data-aspect-ratio': CssAspectRatio | undefined;
    'data-height': ElementSize | undefined;
    'data-height-max': ElementSize | undefined;
    'data-height-min': ElementSize | undefined;
    'data-width': ElementSize | undefined;
    'data-width-max': ElementSize | undefined;
    'data-width-min': ElementSize | undefined;
}
export declare const useSize: <CustomAspectRatio extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>({ aspectRatio, height, maxHeight, maxWidth, minHeight, minWidth, width, }: SizeProps<CustomAspectRatio, CustomHeight, CustomWidth>) => {
    aspectRatio: CssAspectRatio | undefined;
    height: ElementSize | undefined;
    maxHeight: ElementSize | undefined;
    maxWidth: ElementSize | undefined;
    minHeight: ElementSize | undefined;
    minWidth: ElementSize | undefined;
    width: ElementSize | undefined;
};
export declare const useSizeStyleProps: <CustomAspectRatio extends `_${string}`, CustomHeight extends `_${string}`, CustomWidth extends `_${string}`>(props: SizeProps<CustomAspectRatio, CustomHeight, CustomWidth>) => SizeStyleProps;
export declare const sizeStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<SizeStyleProps, any>>;
