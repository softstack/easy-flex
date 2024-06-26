import React, { ButtonHTMLAttributes, forwardRef, memo } from 'react';
import styled from 'styled-components';
import { CustomName } from '../types';
import { defalsify } from '../utils/base';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import {
	FlexContainerProps,
	flexContainerStyle,
	FlexContainerStyleProps,
	useFlexContainerStyleProps,
} from '../utils/flexContainer';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { GridItemProps, gridItemStyle, GridItemStyleProps, useGridItemStyleProps } from '../utils/gridItem';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';
import { OverflowProps, overflowStyle, OverflowStyleProps, useOverflowStyleProps } from '../utils/overflow';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledButton = styled.button<
	BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexContainerStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		GridItemStyleProps &
		MiscStyleProps &
		OverflowStyleProps &
		SizeStyleProps
>`
	background-color: transparent;
	border: none;
	box-sizing: border-box;
	color: inherit; /* For Safari on iOS */
	cursor: pointer;
	font-family: inherit;
	font-size: inherit;
	font-weight: inherit;
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexContainerStyle}
	${flexItemStyle}
	${fontStyle}
	${gridItemStyle}
	${miscStyle}
	${overflowStyle}
	${sizeStyle}
	
	&:disabled {
		cursor: not-allowed;
	}

	&:focus:not(:focus-visible) {
		outline: none;
	}
`;

export type BaseButtonProps<
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
> = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> &
	BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor> &
	ColorProps<CustomColor> &
	DistanceProps<CustomDistance> &
	FlexContainerProps<CustomDistance> &
	FlexItemProps &
	FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight> &
	GridItemProps &
	MiscProps<CustomDistance> &
	OverflowProps &
	SizeProps<CustomAspectRatio, CustomHeight, CustomWidth>;

export type ExternalBaseButtonProps<
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
> = Omit<
	BaseButtonProps<
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
	>,
	| 'align'
	| 'backgroundColor'
	| 'borderColor'
	| 'borderRadius'
	| 'borderStyle'
	| 'borderWidth'
	| 'color'
	| 'direction'
	| 'fontFamily'
	| 'fontSize'
	| 'fontWeight'
	| 'gap'
	| 'italic'
	| 'justify'
	| 'lineHeight'
	| 'overflow'
	| 'overflowX'
	| 'overflowY'
	| 'padding'
	| 'paddingBottom'
	| 'paddingHorizontal'
	| 'paddingLeft'
	| 'paddingRight'
	| 'paddingTop'
	| 'paddingVertical'
	| 'round'
	| 'underline'
	| 'underlineColor'
>;

export const createBaseButton = <
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
	const BaseButton = memo(
		forwardRef<
			HTMLButtonElement,
			BaseButtonProps<
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
					align,
					alignSelf,
					aspectRatio,
					backgroundColor,
					basis,
					borderColor,
					borderRadius,
					borderStyle,
					borderWidth,
					bottom,
					children,
					color,
					direction,
					display,
					flex,
					fontFamily,
					fontSize,
					fontWeight,
					gap,
					grow,
					height,
					italic,
					justify,
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
					overflow,
					overflowX,
					overflowY,
					padding,
					paddingBottom,
					paddingHorizontal,
					paddingLeft,
					paddingRight,
					paddingTop,
					paddingVertical,
					position,
					right,
					shrink,
					textOverflow,
					top,
					underline,
					userSelect,
					visibility,
					whiteSpace,
					width,
					wordBreak,
					wrap,
					wrapGap,
					zIndex,
					...props
				},
				ref
			) => {
				const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth });

				const colorStyleProps = useColorStyleProps({
					backgroundColor: defalsify(backgroundColor) ?? 'transparent',
					color,
				});

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

				const flexContainerStyleProps = useFlexContainerStyleProps({
					align,
					direction: defalsify(direction) ?? 'row',
					gap,
					justify,
					wrap,
					wrapGap,
				});

				const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

				const fontStyleProps = useFontStyleProps({
					fontFamily,
					fontSize,
					fontWeight,
					italic,
					lineHeight,
					textOverflow,
					underline,
					whiteSpace,
					wordBreak,
				});

				const gridItemStyleProps = useGridItemStyleProps({ justifySelf });

				const miscStyleProps = useMiscStyleProps({
					bottom,
					display: defalsify(display) ?? 'flex',
					left,
					opacity,
					position,
					right,
					top,
					userSelect,
					visibility,
					zIndex,
				});

				const overflowStyleProps = useOverflowStyleProps({ overflow, overflowX, overflowY });

				const sizeStyleProps = useSizeStyleProps({
					aspectRatio,
					height,
					maxHeight,
					maxWidth,
					minHeight,
					minWidth,
					width,
				});

				return (
					<StyledButton
						{...borderStyleProps}
						{...colorStyleProps}
						{...distanceStyleProps}
						{...flexContainerStyleProps}
						{...flexItemStyleProps}
						{...fontStyleProps}
						{...gridItemStyleProps}
						{...miscStyleProps}
						{...overflowStyleProps}
						{...sizeStyleProps}
						ref={ref}
						{...props}
					>
						{children}
					</StyledButton>
				);
			}
		)
	);
	BaseButton.displayName = 'BaseButton';
	return BaseButton;
};
