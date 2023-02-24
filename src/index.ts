import { createBaseButton } from './baseButton/BaseButton';
import { createBaseFlex } from './baseFlex/BaseFlex';
import { createBaseGrid } from './baseGrid/BaseGrid';
import { createBaseInput } from './baseInput/BaseInput';
import { createBaseTextArea } from './baseTextArea/BaseTextArea';
import { createCol } from './col/Col';
import { createEasyFlexProvider } from './easyFlexProvider/EasyFlexProvider';
import { createImg } from './img/Img';
import { createLink } from './link/Link';
import { createModal } from './modal/Modal';
import { createRow } from './row/Row';
import { createSpacing } from './spacing/Spacing';
import { createStyle } from './style/Style';
import { createText } from './text/Text';
import { CustomName, CustomThemeSize, EasyFlexTheme } from './types';
import { atMedia, useEasyFlexTheme } from './utils/base';

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

export const createEasyFlex = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>() => ({
	BaseButton: createBaseButton<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>(),
	BaseFlex: createBaseFlex<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>(),
	BaseGrid: createBaseGrid<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>(),
	BaseInput: createBaseInput<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>(),
	BaseTextArea: createBaseTextArea<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>(),
	Col: createCol<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>(),
	EasyFlexProvider: createEasyFlexProvider<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>(),
	Img: createImg<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomHeight,
		CustomWidth
	>(),
	Link: createLink<
		CustomAspectRatio,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>(),
	Modal: createModal<CustomColor>(),
	Row: createRow<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>(),
	Spacing: createSpacing<CustomDistance>(),
	Style: createStyle<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>(),
	Text: createText<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomWidth
	>(),
	atMedia: ((): ((width: CustomThemeSize<CustomViewportThreshold>) => (props: {
		theme: {
			viewport: Pick<
				EasyFlexTheme<
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					never,
					CustomViewportThreshold,
					never
				>['viewport'],
				'threshold'
			>;
		};
	}) => string) => atMedia)(),
	useEasyFlexTheme: ((): (() => EasyFlexTheme<
		CustomAspectRatio,
		CustomBorderRadius,
		CustomBorderWidth,
		CustomColor,
		CustomDistance,
		CustomFontFamily,
		CustomFontSize,
		CustomFontWeight,
		CustomHeight,
		CustomLineHeight,
		CustomViewportThreshold,
		CustomWidth
	>) => useEasyFlexTheme)(),
});
