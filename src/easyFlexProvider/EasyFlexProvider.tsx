import React, { FC, ReactNode, useMemo } from 'react';
import { EasyFlexContext, initialFlexTheme } from '../constants';
import { DeepPartial, EasyFlexTheme } from '../types';

const mergeDeep = <T,>(a: T, b: DeepPartial<T>): T => {
	if (b === undefined) {
		return a;
	} else if (typeof b === 'object') {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const tmp: any = {};
		for (const [key] of Object.entries(a) as unknown as Array<[keyof T, T]>) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			tmp[key] = mergeDeep(a[key], b[key as keyof DeepPartial<T>] as any);
		}
		return tmp;
	}
	return b as T;
};

export interface EasyFlexProviderProps {
	/** The component's children. */
	children?: ReactNode;
	/** Gets merged with the default theme. */
	theme: DeepPartial<EasyFlexTheme>;
}

export const EasyFlexProvider: FC<EasyFlexProviderProps> = ({ children, theme }) => {
	const mergedTheme = useMemo<EasyFlexTheme>(() => mergeDeep(initialFlexTheme, theme), [theme]);

	return <EasyFlexContext.Provider value={mergedTheme}>{children}</EasyFlexContext.Provider>;
};
