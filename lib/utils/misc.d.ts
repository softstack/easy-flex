import { Falsifiable, Visibility } from '../types';
export interface MiscProps {
    displayNone?: boolean;
    visibility?: Falsifiable<Visibility>;
}
export interface MiscStyleProps {
    'data-display-none': string | undefined;
    'data-visibility': Visibility | undefined;
}
export declare const useMiscStyleProps: ({ displayNone, visibility }: MiscProps) => MiscStyleProps;
export declare const miscStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<MiscStyleProps, any>>;
