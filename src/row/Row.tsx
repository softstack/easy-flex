import React, { forwardRef, useMemo } from 'react';
import { BaseFlex, BaseFlexProps } from '../baseFlex/BaseFlex';
import { FlexDirection, FlipDirection, ViewportThreshold } from '../types';
import { getViewportThreshold, useDimension, useEasyFlexTheme } from '../utils/base';

export interface RowProps extends Omit<BaseFlexProps, 'flexDirection'> {
	/** Flips the content in the direction set by flipDirection. */
	flip?: boolean;
	/** Sets what happens if the content shall be flipped. */
	flipDirection?: FlipDirection;
	/** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
	viewportThreshold?: ViewportThreshold | number;
}

export const Row = forwardRef<HTMLDivElement, RowProps>(
	({ children, flip, flipDirection, viewportThreshold, ...props }, ref) => {
		const theme = useEasyFlexTheme();
		const { width } = useDimension();

		const flexDirection = useMemo<FlexDirection>(() => {
			if (
				flipDirection !== undefined &&
				(flip ||
					(flip === undefined &&
						(viewportThreshold !== undefined
							? width < getViewportThreshold(theme, viewportThreshold)
							: width < theme.viewport.defaultThreshold)))
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
		}, [flip, flipDirection, theme, viewportThreshold, width]);

		return (
			<BaseFlex flexDirection={flexDirection} ref={ref} {...props}>
				{children}
			</BaseFlex>
		);
	}
);

Row.displayName = 'Row';
