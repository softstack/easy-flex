import React, { forwardRef, HTMLAttributes, memo, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { CustomName, Falsifiable, TextAlign, TextElement } from '../types';
import { defalsify } from '../utils/base';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { GridItemProps, gridItemStyle, GridItemStyleProps, useGridItemStyleProps } from '../utils/gridItem';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';
import { OverflowProps, overflowStyle, OverflowStyleProps, useOverflowStyleProps } from '../utils/overflow';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const style = css<
	{
		'data-align': Falsifiable<TextAlign> | undefined;
	} & BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		GridItemStyleProps &
		MiscStyleProps &
		OverflowStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	text-align: ${({ 'data-align': align }) => align};
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexItemStyle}
	${fontStyle}
	${gridItemStyle}
	${miscStyle}
	${overflowStyle}
	${sizeStyle}
`;

const StyledH1 = styled.h1`
	${style}
`;

const StyledH2 = styled.h2`
	${style}
`;

const StyledH3 = styled.h3`
	${style}
`;

const StyledH4 = styled.h4`
	${style}
`;

const StyledH5 = styled.h5`
	${style}
`;

const StyledH6 = styled.h6`
	${style}
`;

const StyledP = styled.p`
	${style}
`;

export interface TextProps<
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
> extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>,
		BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>,
		ColorProps<CustomColor>,
		DistanceProps<CustomDistance>,
		FlexItemProps,
		FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>,
		GridItemProps,
		MiscProps,
		OverflowProps,
		SizeProps<CustomAspectRatio, CustomHeight, CustomWidth> {
	/** Component's text alignment. */
	align?: Falsifiable<TextAlign>;
	/** Component's html tag. */
	element?: Falsifiable<TextElement>;
}

export const createText = <
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
	const Text = memo(
		forwardRef<
			HTMLParagraphElement,
			TextProps<
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
					displayNone,
					element,
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
					top,
					underline,
					userSelect,
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

				const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

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

				const gridItemStyleProps = useGridItemStyleProps({ justifySelf });

				const miscStyleProps = useMiscStyleProps({
					bottom,
					displayNone,
					left,
					opacity,
					position,
					right,
					top,
					userSelect,
					visibility,
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

				const Element = useMemo(() => {
					switch (defalsify(element) ?? 'p') {
						case 'h1':
							return StyledH1;
						case 'h2':
							return StyledH2;
						case 'h3':
							return StyledH3;
						case 'h4':
							return StyledH4;
						case 'h5':
							return StyledH5;
						case 'h6':
							return StyledH6;
						case 'p':
							return StyledP;
					}
				}, [element]);

				return (
					<Element
						data-align={align}
						{...borderStyleProps}
						{...colorStyleProps}
						{...distanceStyleProps}
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
					</Element>
				);
			}
		)
	);
	Text.displayName = 'Text';
	return Text;
};
