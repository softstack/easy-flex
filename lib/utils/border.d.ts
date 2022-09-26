import { AbsoluteSize, BorderRadius, BorderStyle, BorderWidth, Color, CssColor, Falsifiable, Size } from '../types';
export interface BorderProps {
    /** Component's border color. */
    borderColor?: Falsifiable<Color>;
    /** Component's border radius. */
    borderRadius?: Falsifiable<BorderRadius>;
    borderStyle?: Falsifiable<BorderStyle>;
    /** Component's border width. */
    borderWidth?: Falsifiable<BorderWidth>;
    round?: boolean;
}
export interface BorderStyleProps {
    'data-border-color'?: CssColor;
    'data-border-radius'?: Size;
    'data-border-style'?: BorderStyle;
    'data-border-width'?: AbsoluteSize;
}
export declare const useBorder: ({ borderColor, borderRadius, borderStyle, borderWidth, round, }: BorderProps) => {
    color: CssColor | undefined;
    radius: Size | undefined;
    style: BorderStyle | undefined;
    width: AbsoluteSize | undefined;
};
export declare const useBorderStyleProps: (props: BorderProps) => BorderStyleProps;
export declare const borderStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<BorderStyleProps, any>>;
