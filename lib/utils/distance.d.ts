import { AbsoluteSize } from '../types';
import { MarginProps, MarginStyleProps } from './margin';
import { PaddingProps, PaddingStyleProps } from './padding';
export declare type DistanceProps = MarginProps & PaddingProps;
export declare type DistanceStyleProps = MarginStyleProps & PaddingStyleProps;
export declare const useDistance: ({ margin, marginBottom, marginHorizontal, marginLeft, marginRight, marginTop, marginVertical, padding, paddingBottom, paddingHorizontal, paddingLeft, paddingRight, paddingTop, paddingVertical, }: DistanceProps) => {
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
export declare const useDistanceStyleProps: (props: DistanceProps) => DistanceStyleProps;
export declare const distanceStyle: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<DistanceStyleProps, any>>;
