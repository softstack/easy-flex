import { Falsifiable, Inset, Opacity, Position, Visibility } from '../types';
export interface MiscProps {
    bottom?: Falsifiable<Inset>;
    displayNone?: boolean;
    left?: Falsifiable<Inset>;
    opacity?: Falsifiable<Opacity>;
    position?: Falsifiable<Position>;
    right?: Falsifiable<Inset>;
    top?: Falsifiable<Inset>;
    visibility?: Falsifiable<Visibility>;
}
export interface MiscStyleProps {
    'data-bottom': Inset | undefined;
    'data-display-none': string | undefined;
    'data-left': Inset | undefined;
    'data-opacity': Opacity | undefined;
    'data-position': Position | undefined;
    'data-right': Inset | undefined;
    'data-top': Inset | undefined;
    'data-visibility': Visibility | undefined;
}
export declare const useMiscStyleProps: ({ bottom, displayNone, left, opacity, position, right, top, visibility, }: MiscProps) => MiscStyleProps;
export declare const miscStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<MiscStyleProps, any>>;
