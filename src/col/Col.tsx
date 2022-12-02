import React, { forwardRef, memo, useMemo } from 'react';
import { BaseFlexProps, createBaseFlex } from '../baseFlex/BaseFlex';
import { CustomName, FlexDirection } from '../types';
import { defalsify } from '../utils/base';

export type ColProps<
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomWidth extends CustomName
> = BaseFlexProps<
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
>;

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
				CustomWidth
			>
		>(({ children, direction, ...props }, ref) => {
			const processedDirection = useMemo<FlexDirection>(() => defalsify(direction) ?? 'column', [direction]);

			return (
				<BaseFlex direction={processedDirection} ref={ref} {...props}>
					{children}
				</BaseFlex>
			);
		})
	);
	Col.displayName = 'Col';
	return Col;
};
