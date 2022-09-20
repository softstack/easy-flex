import React, { forwardRef, useMemo } from 'react';
import { BaseFlex, BaseFlexProps } from '../baseFlex/BaseFlex';
import { FlexDirection, FlipDirection, ViewportThreshold } from '../types';
import { getViewportThreshold, useDimension, useEasyFlexTheme } from '../utils/base';

export interface ColProps extends Omit<BaseFlexProps, 'direction'> {
	/** Flips the content in the direction set by flipDirection. */
	flip?: boolean;
	/** Sets what happens if the content shall be flipped. */
	flipDirection?: FlipDirection;
	/** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
	viewportThreshold?: ViewportThreshold;
}

export const Col = forwardRef<HTMLDivElement, ColProps>(
	({ children, flip, flipDirection, viewportThreshold, ...props }, ref) => {
		const theme = useEasyFlexTheme();
		const { width } = useDimension();

		const direction = useMemo<FlexDirection>(() => {
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
						return 'row';
					case 'reverse':
						return 'column-reverse';
					case 'flip-reverse':
						return 'row-reverse';
				}
			}
			return 'column';
		}, [flip, flipDirection, theme, viewportThreshold, width]);

		return (
			<BaseFlex direction={direction} ref={ref} {...props}>
				{children}
			</BaseFlex>
		);
	}
);

Col.displayName = 'Col';
