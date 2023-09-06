/// <reference types="react" />
import { CustomThemeSize, EasyFlexTheme } from './types';
export * from './baseButton/BaseButton';
export * from './baseFlex/BaseFlex';
export * from './baseGrid/BaseGrid';
export * from './baseInput/BaseInput';
export * from './baseTextArea/BaseTextArea';
export * from './col/Col';
export * from './constants';
export * from './easyFlexProvider/EasyFlexProvider';
export * from './img/Img';
export * from './link/Link';
export * from './modal/Modal';
export * from './row/Row';
export * from './spacing/Spacing';
export * from './style/Style';
export * from './text/Text';
export * from './types';
export * from './utils/base';
export * from './utils/border';
export * from './utils/distance';
export * from './utils/font';
export * from './utils/margin';
export * from './utils/misc';
export * from './utils/padding';
export * from './utils/size';
export declare const createEasyFlex: <CustomAspectRatio extends `_${string}`, CustomBorderRadius extends `_${string}`, CustomBorderWidth extends `_${string}`, CustomColor extends `_${string}`, CustomDistance extends `_${string}`, CustomFontFamily extends `_${string}`, CustomFontSize extends `_${string}`, CustomFontWeight extends `_${string}`, CustomHeight extends `_${string}`, CustomLineHeight extends `_${string}`, CustomViewportThreshold extends `_${string}`, CustomWidth extends `_${string}`>() => {
    BaseButton: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<Omit<import("react").ButtonHTMLAttributes<HTMLButtonElement>, "color"> & import("./utils/border").BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor> & import("./utils/color").ColorProps<CustomColor> & import("./utils/margin").MarginProps<CustomDistance> & import("./utils/padding").PaddingProps<CustomDistance> & import("./utils/flexContainer").FlexContainerProps<CustomDistance> & import("./utils/flexItem").FlexItemProps & import("./utils/font").FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight> & import("./utils/gridItem").GridItemProps & import("./utils/misc").MiscProps<CustomDistance> & import("./utils/overflow").OverflowProps & import("./utils/size").SizeProps<CustomAspectRatio, CustomHeight, CustomWidth> & import("react").RefAttributes<HTMLButtonElement>>>;
    BaseFlex: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./baseFlex/BaseFlex").BaseFlexProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLDivElement>>>;
    BaseGrid: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./baseGrid/BaseGrid").BaseGridProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLDivElement>>>;
    BaseInput: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./baseInput/BaseInput").BaseInputProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLInputElement>>>;
    BaseTextArea: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./baseTextArea/BaseTextArea").BaseTextAreaProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLTextAreaElement>>>;
    Col: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./col/Col").ColProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLDivElement>>>;
    EasyFlexProvider: import("react").NamedExoticComponent<import("./easyFlexProvider/EasyFlexProvider").EasyFlexProviderProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>>;
    Img: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./img/Img").ImgProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomHeight, CustomWidth> & import("react").RefAttributes<HTMLImageElement>>>;
    Label: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./label/Label").LabelProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLLabelElement>>>;
    Link: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./link/Link").LinkProps<CustomAspectRatio, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLAnchorElement>>>;
    Modal: import("react").NamedExoticComponent<import("./modal/Modal").ModalProps<CustomColor, CustomDistance>>;
    Row: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./row/Row").RowProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLDivElement>>>;
    Spacing: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./spacing/Spacing").SpacingProps<CustomDistance> & import("react").RefAttributes<HTMLDivElement>>>;
    Style: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./style/Style").StyleProps<CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight> & import("react").RefAttributes<HTMLSpanElement>>>;
    Text: import("react").MemoExoticComponent<import("react").ForwardRefExoticComponent<import("./text/Text").TextProps<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomWidth> & import("react").RefAttributes<HTMLParagraphElement>>>;
    viewportAtLeast: (width: CustomThemeSize<CustomViewportThreshold>) => (props: {
        theme: {
            viewport: Pick<{
                threshold: Record<CustomThemeSize<CustomViewportThreshold>, number>;
            }, "threshold">;
        };
    }) => string;
    viewportLessThan: (width: CustomThemeSize<CustomViewportThreshold>) => (props: {
        theme: {
            viewport: Pick<{
                threshold: Record<CustomThemeSize<CustomViewportThreshold>, number>;
            }, "threshold">;
        };
    }) => string;
    useEasyFlexTheme: () => EasyFlexTheme<CustomAspectRatio, CustomBorderRadius, CustomBorderWidth, CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomHeight, CustomLineHeight, CustomViewportThreshold, CustomWidth>;
    useViewport: () => Record<CustomThemeSize<CustomViewportThreshold>, boolean>;
};
