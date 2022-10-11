import { AbsoluteSize, CustomName } from '../types';
import { MarginProps, MarginStyleProps } from './margin';
import { PaddingProps, PaddingStyleProps } from './padding';
export declare type DistanceProps<CustomDistance extends CustomName> = MarginProps<CustomDistance> & PaddingProps<CustomDistance>;
export declare type DistanceStyleProps = MarginStyleProps & PaddingStyleProps;
export declare const useDistance: <CustomDistance extends `_${string}`>({ margin, marginBottom, marginHorizontal, marginLeft, marginRight, marginTop, marginVertical, padding, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingTop, paddingVertical, }: DistanceProps<CustomDistance>) => {
    margin: {
        bottom: AbsoluteSize;
        left: AbsoluteSize;
        right: AbsoluteSize;
        top: AbsoluteSize;
    };
    padding: {
        bottom: AbsoluteSize;
        left: AbsoluteSize;
        right: AbsoluteSize;
        top: AbsoluteSize;
    };
};
export declare const useDistanceStyleProps: <CustomDistance extends `_${string}`>(props: DistanceProps<CustomDistance>) => DistanceStyleProps;
export declare const distanceStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<DistanceStyleProps, any>>;
