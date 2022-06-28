import React, { FC, useMemo } from 'react';
import { BaseFlex, IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlexDirection, IFlipDirection, IFlipThreshold } from '../types';
import { getFlipThreshold, useDimensions, useEasyFlexTheme } from '../utils';

export interface IColProps extends IBaseFlexProps {
	flip?: boolean;
	flipDirection?: IFlipDirection;
	flipThreshold?: IFlipThreshold;
}

export const Col: FC<IColProps> = ({ children, flip, flipDirection, flipThreshold, ...props }) => {
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
					return 'row';
				case 'reverse':
					return 'column-reverse';
				case 'flip-reverse':
					return 'row-reverse';
			}
		}
		return 'column';
	}, [flip, flipDirection, flipThreshold, theme, width]);

	return (
		<BaseFlex flexDirection={flexDirection} {...props}>
			{children}
		</BaseFlex>
	);
};
