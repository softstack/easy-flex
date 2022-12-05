import React, { forwardRef, memo, useMemo } from 'react';
import { BaseFlexProps, createBaseFlex } from '../baseFlex/BaseFlex';
import { CustomName, FlexDirection } from '../types';
import { defalsify } from '../utils/base';

export type RowProps<
	CustomAspectRatio extends CustomName,
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
	CustomAspectRatio,
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

export const createRow = <
	CustomAspectRatio extends CustomName,
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
	const Row = memo(
		forwardRef<
			HTMLDivElement,
			RowProps<
				CustomAspectRatio,
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
			const processedDirection = useMemo<FlexDirection>(() => defalsify(direction) ?? 'row', [direction]);

			return (
				<BaseFlex direction={processedDirection} ref={ref} {...props}>
					{children}
				</BaseFlex>
			);
		})
	);
	Row.displayName = 'Row';
	return Row;
};
