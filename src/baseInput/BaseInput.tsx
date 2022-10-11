import React, { forwardRef, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Color, CssColor, Falsifiable, ThemeColor } from '../types';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColor, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledInput = styled.input<
	{ 'data-placeholder-color'?: CssColor } & BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	border: none;
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexItemStyle}
	${fontStyle}
	${sizeStyle}

	&::placeholder {
		color: ${({ 'data-placeholder-color': placeholderColor }) => placeholderColor};
	}
`;

export interface BaseInputProps<T extends ThemeColor>
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'color' | 'height' | 'width'>,
		BorderProps<T>,
		ColorProps<T>,
		DistanceProps,
		FlexItemProps,
		FontProps<T>,
		SizeProps {
	placeholderColor?: Falsifiable<Color<T>>;
}

export const createBaseInput = <T extends ThemeColor>() => {
	const BaseInput = forwardRef<HTMLInputElement, BaseInputProps<T>>(
		(
			{
				alignSelf,
				backgroundColor,
				basis,
				borderColor,
				borderRadius,
				borderStyle,
				borderWidth,
				color,
				flex,
				fontFamily,
				fontSize,
				fontWeight,
				fullHeight,
				fullWidth,
				grow,
				height,
				italic,
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
				padding,
				paddingBottom,
				paddingHorizontal,
				paddingLeft,
				paddingRight,
				paddingTop,
				paddingVertical,
				placeholderColor,
				round,
				shrink,
				underline,
				whiteSpace,
				width,
				wordBreak,
				...props
			},
			ref
		) => {
			const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth, round });

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

			const sizeStyleProps = useSizeStyleProps({
				fullHeight,
				fullWidth,
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
					{...sizeStyleProps}
					ref={ref}
					{...props}
				/>
			);
		}
	);
	BaseInput.displayName = 'BaseInput';
	return BaseInput;
};
