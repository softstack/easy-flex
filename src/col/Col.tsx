import React, { forwardRef, memo, useMemo } from 'react';
import { BaseFlexProps, createBaseFlex } from '../baseFlex/BaseFlex';
import { CustomName, Falsifiable, FlexDirection, FlipDirection, ViewportThreshold } from '../types';
import { getViewportThreshold, useDimension, useEasyFlexTheme } from '../utils/base';

export interface ColProps<
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
> extends Omit<
		BaseFlexProps<
			CustomBorderRadius,
			CustomBorderWidth,
			CustomColor,
			CustomDistance,
			CustomFontFamily,
			CustomFontSize,
			CustomFontWeight,
			CustomHeight,
			CustomLineHeight,
			CustomWidth
		>,
		'direction'
	> {
	/** Flips the content in the direction set by flipDirection. */
	flip?: boolean;
	/** Sets what happens if the content shall be flipped. */
	flipDirection?: Falsifiable<FlipDirection>;
	/** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
	viewport?: Falsifiable<ViewportThreshold<CustomViewportThreshold>>;
}

export const createCol = <
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomViewportThreshold extends CustomName,
	CustomWidth extends CustomName
>() => {
	const BaseFlex = createBaseFlex();
	const Col = memo(
		forwardRef<
			HTMLDivElement,
			ColProps<
				CustomBorderRadius,
				CustomBorderWidth,
				CustomColor,
				CustomDistance,
				CustomFontFamily,
				CustomFontSize,
				CustomFontWeight,
				CustomHeight,
				CustomLineHeight,
				CustomViewportThreshold,
				CustomWidth
			>
		>(({ children, flip, flipDirection, viewport, ...props }, ref) => {
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
		})
	);
	Col.displayName = 'Col';
	return Col;
};
