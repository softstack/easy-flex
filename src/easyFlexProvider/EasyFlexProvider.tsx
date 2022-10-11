import React, { FC, ReactNode, useMemo } from 'react';
import { defaultEasyFlexTheme, EasyFlexContext } from '../constants';
import { CustomName, DeepPartial, EasyFlexTheme } from '../types';
import { mergeDeep } from '../utils/base';

export interface EasyFlexProviderProps<
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
> {
	/** The component's children. */
	children?: ReactNode;
	/** Gets merged with the default theme. */
	theme: DeepPartial<EasyFlexTheme<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>>;
}

export const createEasyFlexProvider = <
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
>() => {
	const EasyFlexProvider: FC<EasyFlexProviderProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>> = ({
		children,
		theme,
	}) => {
		const mergedTheme = useMemo<EasyFlexTheme<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>>(
			() =>
				mergeDeep(
					defaultEasyFlexTheme as EasyFlexTheme<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>,
					theme
				),
			[theme]
		);

		return <EasyFlexContext.Provider value={mergedTheme}>{children}</EasyFlexContext.Provider>;
	};
	return EasyFlexProvider;
};
