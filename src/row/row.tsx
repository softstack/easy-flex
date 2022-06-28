import React, { FC, useMemo } from 'react';
import { BaseFlex, IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlexDirection, IFlipDirection, IFlipThreshold } from '../types';
import { getFlipThreshold, useDimensions, useEasyFlexTheme } from '../utils';

export interface IRowProps extends IBaseFlexProps {
	flip?: boolean;
	flipDirection?: IFlipDirection;
	flipThreshold?: IFlipThreshold;
}

export const Row: FC<IRowProps> = ({ children, flip, flipDirection, flipThreshold, ...props }) => {
	const theme = useEasyFlexTheme();
	const { width } = useDimensions();

	const flexDirection = useMemo<IFlexDirection>(() => {
		if (
			flipDirection &&
			(flip ||
				(flip === undefined &&
					(flipThreshold ? width < getFlipThreshold(theme, flipThreshold) : width < theme.fallbackFlipThreshold)))
		) {
			switch (flipDirection) {
				case 'flip':
					return 'column';
				case 'reverse':
					return 'row-reverse';
				case 'flip-reverse':
					return 'column-reverse';
			}
		}
		return 'row';
	}, [flip, flipDirection, flipThreshold, theme, width]);

	return (
		<BaseFlex flexDirection={flexDirection} {...props}>
			{children}
		</BaseFlex>
	);
};
