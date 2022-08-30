import { AbsoluteSize, BorderRadius, BorderStyle, BorderWidth, Color, CssColor } from '../types';
export interface BorderProps {
    /** Component's border color. */
    borderColor?: Color;
    /** Component's border radius. */
    borderRadius?: BorderRadius | AbsoluteSize;
    borderStyle?: BorderStyle;
    /** Component's border width. */
    borderWidth?: BorderWidth | AbsoluteSize;
    round?: boolean;
}
export interface BorderStyleProps {
    'data-border-color'?: CssColor;
    'data-border-radius'?: AbsoluteSize;
    'data-border-style'?: BorderStyle;
    'data-border-width'?: AbsoluteSize;
}
export declare const useBorder: ({ borderColor, borderRadius, borderStyle, borderWidth, round, }: BorderProps) => {
    color: CssColor | undefined;
    radius: AbsoluteSize | undefined;
    style: BorderStyle | undefined;
    width: AbsoluteSize | undefined;
};
export declare const useBorderStyleProps: (props: BorderProps) => BorderStyleProps;
export declare const borderStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<BorderStyleProps, any>>;
