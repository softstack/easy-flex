import React, { FC, ReactNode, useMemo } from 'react';
import { defaultEasyFlexTheme, EasyFlexContext } from '../constants';
import { DeepPartial, EasyFlexTheme } from '../types';
import { mergeDeep } from '../utils/base';

export interface EasyFlexProviderProps {
	/** The component's children. */
	children?: ReactNode;
	/** Gets merged with the default theme. */
	theme: DeepPartial<EasyFlexTheme>;
}

export const EasyFlexProvider: FC<EasyFlexProviderProps> = ({ children, theme }) => {
	const mergedTheme = useMemo<EasyFlexTheme>(() => mergeDeep(defaultEasyFlexTheme, theme), [theme]);

	return <EasyFlexContext.Provider value={mergedTheme}>{children}</EasyFlexContext.Provider>;
};
