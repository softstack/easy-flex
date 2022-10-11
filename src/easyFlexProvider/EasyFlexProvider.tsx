import React, { FC, ReactNode, useMemo } from 'react';
import { defaultEasyFlexTheme, EasyFlexContext } from '../constants';
import { CustomName, DeepPartial, EasyFlexTheme } from '../types';
import { mergeDeep } from '../utils/base';

export interface EasyFlexProviderProps<
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
	const EasyFlexProvider: FC<
		EasyFlexProviderProps<
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
	> = ({ children, theme }) => {
		const mergedTheme = useMemo<
			EasyFlexTheme<
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
				mergeDeep(
					defaultEasyFlexTheme as EasyFlexTheme<
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
	};
	return EasyFlexProvider;
};
