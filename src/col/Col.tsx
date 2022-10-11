import React, { forwardRef, useMemo } from 'react';
import { BaseFlexProps, createBaseFlex } from '../baseFlex/BaseFlex';
import { Falsifiable, FlexDirection, FlipDirection, ThemeColor, ViewportThreshold } from '../types';
import { getViewportThreshold, useDimension, useEasyFlexTheme } from '../utils/base';

export interface ColProps<T extends ThemeColor> extends Omit<BaseFlexProps<T>, 'direction'> {
	/** Flips the content in the direction set by flipDirection. */
	flip?: boolean;
	/** Sets what happens if the content shall be flipped. */
	flipDirection?: Falsifiable<FlipDirection>;
	/** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
	viewport?: Falsifiable<ViewportThreshold>;
}

export const createCol = <T extends ThemeColor>() => {
	const BaseFlex = createBaseFlex();
	const Col = forwardRef<HTMLDivElement, ColProps<T>>(({ children, flip, flipDirection, viewport, ...props }, ref) => {
		const theme = useEasyFlexTheme();
		const { width } = useDimension();

		const direction = useMemo<FlexDirection>(() => {
			if (
				flipDirection !== false &&
				flipDirection !== undefined &&
				(flip ||
					(flip === undefined &&
						(viewport !== false && viewport !== undefined
							? width < getViewportThreshold(theme, viewport)
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
		}, [flip, flipDirection, theme, viewport, width]);

		return (
			<BaseFlex direction={direction} ref={ref} {...props}>
				{children}
			</BaseFlex>
		);
	});
	Col.displayName = 'Col';
	return Col;
};
