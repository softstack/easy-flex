import React, { FC, useMemo } from 'react';
import { BaseFlex, IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlexDirection, IFlipDirection } from '../types';
import { useEasyFlexTheme } from '../utils';

export interface IRowProps extends IBaseFlexProps {
	flip?: boolean;
	flipDirection?: IFlipDirection;
}

export const Row: FC<IRowProps> = ({ children, flip, flipDirection, ...props }) => {
	const theme = useEasyFlexTheme();

	const flexDirection = useMemo<IFlexDirection>(() => {
		if (flipDirection && (flip || (flip === undefined && theme.flipDirection))) {
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
	}, [theme, flip, flipDirection]);

	return (
		<BaseFlex flexDirection={flexDirection} {...props}>
			{children}
		</BaseFlex>
	);
};
