import { CssInset, CustomName, Display, Falsifiable, Inset, Opacity, Position, UserSelect, Visibility, ZIndex } from '../types';
export interface MiscProps<CustomDistance extends CustomName> {
    bottom?: Falsifiable<Inset<CustomDistance>>;
    display?: Falsifiable<Display>;
    left?: Falsifiable<Inset<CustomDistance>>;
    opacity?: Falsifiable<Opacity>;
    position?: Falsifiable<Position>;
    right?: Falsifiable<Inset<CustomDistance>>;
    top?: Falsifiable<Inset<CustomDistance>>;
    userSelect?: Falsifiable<UserSelect>;
    visibility?: Falsifiable<Visibility>;
    zIndex?: Falsifiable<ZIndex>;
}
export interface MiscStyleProps {
    'data-bottom': CssInset | undefined;
    'data-display': Display | undefined;
    'data-left': CssInset | undefined;
    'data-opacity': Opacity | undefined;
    'data-position': Position | undefined;
    'data-right': CssInset | undefined;
    'data-top': CssInset | undefined;
    'data-user-select': UserSelect | undefined;
    'data-visibility': Visibility | undefined;
    'data-z-index': ZIndex | undefined;
}
export declare const useMiscStyleProps: <CustomDistance extends `_${string}`>({ bottom, display, left, opacity, position, right, top, userSelect, visibility, zIndex, }: MiscProps<CustomDistance>) => MiscStyleProps;
export declare const miscStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<MiscStyleProps, any>>;
