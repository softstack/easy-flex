import React, { FC, useMemo } from 'react';
import { BaseFlex, IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlexDirection, IFlipDirection } from '../types';
import { useEasyFlexTheme } from '../utils';

export interface IColProps extends IBaseFlexProps {
	flip?: boolean;
	flipDirection?: IFlipDirection;
}

export const Col: FC<IColProps> = ({ children, flip, flipDirection, ...props }) => {
	const theme = useEasyFlexTheme();

	const flexDirection = useMemo<IFlexDirection>(() => {
		if (flipDirection && (flip || (flip === undefined && theme.flipDirection))) {
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
	}, [theme, flip, flipDirection]);

	return (
		<BaseFlex flexDirection={flexDirection} {...props}>
			{children}
		</BaseFlex>
	);
};
