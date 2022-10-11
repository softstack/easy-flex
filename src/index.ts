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
import { CustomName } from './types';

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
export * from './utils/padding';
export * from './utils/size';

export const createComponents = <
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
>() => ({
	BaseButton: createBaseButton<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
	BaseFlex: createBaseFlex<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
	BaseGrid: createBaseGrid<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
	BaseInput: createBaseInput<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
	BaseTextArea: createBaseTextArea<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
	Col: createCol<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
	EasyFlexProvider: createEasyFlexProvider<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
	Img: createImg<CustomColor, CustomHeight, CustomWidth>(),
	Link: createLink<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
	Modal: createModal<CustomColor>(),
	Row: createRow<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
	Spacing: createSpacing(),
	Style: createStyle<CustomColor, CustomFontFamily>(),
	Text: createText<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>(),
});
