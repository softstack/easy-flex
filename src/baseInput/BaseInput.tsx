import React, { forwardRef, InputHTMLAttributes, memo } from 'react';
import styled from 'styled-components';
import { Color, CssColor, CustomName, Falsifiable } from '../types';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColor, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { GridItemProps, gridItemStyle, GridItemStyleProps, useGridItemStyleProps } from '../utils/gridItem';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledInput = styled.input<
	{ 'data-placeholder-color': CssColor | undefined } & BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		GridItemStyleProps &
		MiscStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	border: none;
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexItemStyle}
	${fontStyle}
	${gridItemStyle}
	${miscStyle}
	${sizeStyle}

	&::placeholder {
		color: ${({ 'data-placeholder-color': placeholderColor }) => placeholderColor};
	}
`;

export interface BaseInputProps<
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
> extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'height' | 'width'>,
		BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>,
		ColorProps<CustomColor>,
		DistanceProps<CustomDistance>,
		FlexItemProps,
		FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>,
		GridItemProps,
		MiscProps,
		SizeProps<CustomAspectRatio, CustomHeight, CustomWidth> {
	placeholderColor?: Falsifiable<Color<CustomColor>>;
}

export const createBaseInput = <
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
	const BaseInput = memo(
		forwardRef<
			HTMLInputElement,
			BaseInputProps<
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
		>(
			(
				{
					alignSelf,
					aspectRatio,
					backgroundColor,
					basis,
					borderColor,
					borderRadius,
					borderStyle,
					borderWidth,
					bottom,
					color,
					displayNone,
					flex,
					fontFamily,
					fontSize,
					fontWeight,
					grow,
					height,
					italic,
					justifySelf,
					left,
					lineHeight,
					margin,
					marginBottom,
					marginHorizontal,
					marginLeft,
					marginRight,
					marginTop,
					marginVertical,
					maxHeight,
					maxWidth,
					minHeight,
					minWidth,
					opacity,
					padding,
					paddingBottom,
					paddingHorizontal,
					paddingLeft,
					paddingRight,
					paddingTop,
					paddingVertical,
					placeholderColor,
					position,
					right,
					shrink,
					top,
					underline,
					visibility,
					whiteSpace,
					width,
					wordBreak,
					...props
				},
				ref
			) => {
				const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth });

				const colorStyleProps = useColorStyleProps({ backgroundColor, color });

				const distanceStyleProps = useDistanceStyleProps({
					margin,
					marginBottom,
					marginHorizontal,
					marginLeft,
					marginRight,
					marginTop,
					marginVertical,
					padding,
					paddingBottom,
					paddingHorizontal,
					paddingLeft,
					paddingRight,
					paddingTop,
					paddingVertical,
				});

				const fontStyleProps = useFontStyleProps({
					fontFamily,
					fontSize,
					fontWeight,
					italic,
					lineHeight,
					underline,
					whiteSpace,
					wordBreak,
				});

				const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

				const gridItemStyleProps = useGridItemStyleProps({ justifySelf });

				const miscStyleProps = useMiscStyleProps({
					bottom,
					displayNone,
					left,
					opacity,
					position,
					right,
					top,
					visibility,
				});

				const sizeStyleProps = useSizeStyleProps({
					aspectRatio,
					height,
					maxHeight,
					maxWidth,
					minHeight,
					minWidth,
					width,
				});

				const processedPlaceholderColor = useColor(placeholderColor);

				return (
					<StyledInput
						data-placeholder-color={processedPlaceholderColor}
						{...borderStyleProps}
						{...colorStyleProps}
						{...distanceStyleProps}
						{...flexItemStyleProps}
						{...fontStyleProps}
						{...gridItemStyleProps}
						{...miscStyleProps}
						{...sizeStyleProps}
						ref={ref}
						{...props}
					/>
				);
			}
		)
	);
	BaseInput.displayName = 'BaseInput';
	return BaseInput;
};
