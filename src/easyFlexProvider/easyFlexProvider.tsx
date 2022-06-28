import React, { FC, ReactNode, useMemo } from 'react';
import { EasyFlexContext, initialFlexTheme } from '../constants';
import { IDeepPartial, IEasyFlexTheme } from '../types';

export interface IEasyFlexProviderProps {
	children?: ReactNode;
	theme: IDeepPartial<IEasyFlexTheme>;
}

export const EasyFlexProvider: FC<IEasyFlexProviderProps> = ({ children, theme }) => {
	const mergedTheme = useMemo<IEasyFlexTheme>(
		() => ({
			...initialFlexTheme,
			...theme,
			flipThreshold: { ...initialFlexTheme.flipThreshold, ...theme.flipThreshold },
			distance: { ...initialFlexTheme.distance, ...theme.distance },
			fontSize: { ...initialFlexTheme.fontSize, ...theme.fontSize },
			fontWeight: { ...initialFlexTheme.fontWeight, ...theme.fontWeight },
			color: { ...initialFlexTheme.color, ...theme.color },
		}),
		[theme]
	);

	return <EasyFlexContext.Provider value={mergedTheme}>{children}</EasyFlexContext.Provider>;
};
