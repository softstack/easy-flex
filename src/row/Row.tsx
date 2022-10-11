import React, { forwardRef, useMemo } from 'react';
import { BaseFlexProps, createBaseFlex } from '../baseFlex/BaseFlex';
import { CustomName, Falsifiable, FlexDirection, FlipDirection, ViewportThreshold } from '../types';
import { getViewportThreshold, useDimension, useEasyFlexTheme } from '../utils/base';

export interface RowProps<
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
> extends Omit<BaseFlexProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>, 'direction'> {
	/** Flips the content in the direction set by flipDirection. */
	flip?: boolean;
	/** Sets what happens if the content shall be flipped. */
	flipDirection?: Falsifiable<FlipDirection>;
	/** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
	viewport?: Falsifiable<ViewportThreshold>;
}

export const createRow = <
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
>() => {
	const BaseFlex = createBaseFlex();
	const Row = forwardRef<HTMLDivElement, RowProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>>(
		({ children, flip, flipDirection, viewport, ...props }, ref) => {
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
							return 'column';
						case 'reverse':
							return 'row-reverse';
						case 'flip-reverse':
							return 'column-reverse';
					}
				}
				return 'row';
			}, [flip, flipDirection, theme, viewport, width]);

			return (
				<BaseFlex direction={direction} ref={ref} {...props}>
					{children}
				</BaseFlex>
			);
		}
	);
	Row.displayName = 'Row';
	return Row;
};
