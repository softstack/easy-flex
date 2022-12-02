import { Falsifiable, JustifySelf } from '../types';
export interface GridItemProps {
    justifySelf?: Falsifiable<JustifySelf>;
}
export interface GridItemStyleProps {
    'data-justify-self': Falsifiable<JustifySelf> | undefined;
}
export declare const useGridItemStyleProps: ({ justifySelf }: GridItemProps) => GridItemStyleProps;
export declare const gridItemStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<GridItemStyleProps, any>>;
