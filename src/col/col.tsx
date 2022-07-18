import React, { FC, useMemo } from 'react';
import { BaseFlex, IBaseFlexProps } from '../baseFlex/baseFlex';
import { IFlexDirection, IFlipDirection, IFlipThreshold } from '../types';
import { getFlipThreshold, useDimension, useEasyFlexTheme } from '../utils';

export interface IColProps extends Omit<IBaseFlexProps, 'flexDirection'> {
	/** Flips the content in the direction set by flipDirection. */
	flip?: boolean;
	/** Sets what happens if the content shall be flipped. */
	flipDirection?: IFlipDirection;
	/** Sets the flip threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the fallback threshold is used. */
	flipThreshold?: IFlipThreshold;
}

export const Col: FC<IColProps> = ({ children, flip, flipDirection, flipThreshold, ...props }) => {
	const theme = useEasyFlexTheme();
	const { width } = useDimension();

	const flexDirection = useMemo<IFlexDirection>(() => {
		if (
			flipDirection !== undefined &&
			(flip ||
				(flip === undefined &&
					(flipThreshold !== undefined
						? width < getFlipThreshold(theme, flipThreshold)
						: width < theme.flip.fallbackThreshold)))
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
