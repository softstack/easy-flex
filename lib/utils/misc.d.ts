import { Display, Falsifiable, Inset, Opacity, Position, UserSelect, Visibility } from '../types';
export interface MiscProps {
    bottom?: Falsifiable<Inset>;
    display?: Falsifiable<Display>;
    left?: Falsifiable<Inset>;
    opacity?: Falsifiable<Opacity>;
    position?: Falsifiable<Position>;
    right?: Falsifiable<Inset>;
    top?: Falsifiable<Inset>;
    userSelect?: Falsifiable<UserSelect>;
    visibility?: Falsifiable<Visibility>;
}
export interface MiscStyleProps {
    'data-bottom': Inset | undefined;
    'data-display': Display | undefined;
    'data-left': Inset | undefined;
    'data-opacity': Opacity | undefined;
    'data-position': Position | undefined;
    'data-right': Inset | undefined;
    'data-top': Inset | undefined;
    'data-user-select': UserSelect | undefined;
    'data-visibility': Visibility | undefined;
}
export declare const useMiscStyleProps: ({ bottom, display, left, opacity, position, right, top, userSelect, visibility, }: MiscProps) => MiscStyleProps;
export declare const miscStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<MiscStyleProps, any>>;
