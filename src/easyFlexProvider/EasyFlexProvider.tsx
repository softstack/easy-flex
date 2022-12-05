import React, { memo, ReactNode, useMemo } from 'react';
import { defaultEasyFlexTheme, EasyFlexContext } from '../constants';
import { CustomName, DeepPartial, EasyFlexTheme } from '../types';
import { mergeEasyFlexThemes } from '../utils/base';

export interface EasyFlexProviderProps<
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
> {
	/** The component's children. */
	children?: ReactNode;
	/** Gets merged with the default theme. */
	theme: DeepPartial<
		EasyFlexTheme<
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
		>
	>;
}

export const createEasyFlexProvider = <
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
>() => {
	const EasyFlexProvider = memo<
		EasyFlexProviderProps<
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
		>
	>(({ children, theme }) => {
		const mergedTheme = useMemo<
			EasyFlexTheme<
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
			>
		>(
			() =>
				mergeEasyFlexThemes(
					defaultEasyFlexTheme as EasyFlexTheme<
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
					>,
					theme
				),
			[theme]
		);

		return <EasyFlexContext.Provider value={mergedTheme}>{children}</EasyFlexContext.Provider>;
	});
	EasyFlexProvider.displayName = 'EasyFlexProvider';
	return EasyFlexProvider;
};
