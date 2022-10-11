import React, { FC, ReactNode, useMemo } from 'react';
import { defaultEasyFlexTheme, EasyFlexContext } from '../constants';
import { DeepPartial, EasyFlexTheme, ThemeColor } from '../types';
import { mergeDeep } from '../utils/base';

export interface EasyFlexProviderProps<T extends ThemeColor> {
	/** The component's children. */
	children?: ReactNode;
	/** Gets merged with the default theme. */
	theme: DeepPartial<EasyFlexTheme<T>>;
}

export const createEasyFlexProvider = <T extends ThemeColor>() => {
	const EasyFlexProvider: FC<EasyFlexProviderProps<T>> = ({ children, theme }) => {
		const mergedTheme = useMemo<EasyFlexTheme<T>>(
			() => mergeDeep(defaultEasyFlexTheme as EasyFlexTheme<T>, theme),
			[theme]
		);

		return <EasyFlexContext.Provider value={mergedTheme}>{children}</EasyFlexContext.Provider>;
	};
	return EasyFlexProvider;
};
