import { Falsifiable, Opacity, Visibility } from '../types';
export interface MiscProps {
    displayNone?: boolean;
    opacity?: Falsifiable<Opacity>;
    visibility?: Falsifiable<Visibility>;
}
export interface MiscStyleProps {
    'data-display-none': string | undefined;
    'data-opacity': Opacity | undefined;
    'data-visibility': Visibility | undefined;
}
export declare const useMiscStyleProps: ({ displayNone, opacity, visibility }: MiscProps) => MiscStyleProps;
export declare const miscStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<MiscStyleProps, any>>;
