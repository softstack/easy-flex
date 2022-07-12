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
			border: {
				...initialFlexTheme.border,
				...theme.border,
				radius: { ...initialFlexTheme.border.radius, ...theme.border?.radius },
				width: { ...initialFlexTheme.border.width, ...theme.border?.width },
			},
			color: { ...initialFlexTheme.color, ...theme.color },
			distance: { ...initialFlexTheme.distance, ...theme.distance },
			flip: {
				...initialFlexTheme.flip,
				...theme.flip,
				threshold: { ...initialFlexTheme.flip.threshold, ...theme.flip?.threshold },
			},
			font: {
				...initialFlexTheme.font,
				...theme.font,
				size: { ...initialFlexTheme.font.size, ...theme.font?.size },
				weight: {
					...initialFlexTheme.font.weight,
					...theme.font?.weight,
				},
			},
			modal: { ...initialFlexTheme.modal, ...theme.modal },
		}),
		[theme]
	);

	return <EasyFlexContext.Provider value={mergedTheme}>{children}</EasyFlexContext.Provider>;
};
