import React, { forwardRef, HTMLAttributes, memo, useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
	AbsoluteSize,
	AlignContent,
	AlignItems,
	BaseGridElement,
	CustomName,
	Distance,
	Falsifiable,
	JustifyContent,
	JustifyItems,
} from '../types';
import { defalsify, getDistance, ifDefined, useEasyFlexTheme } from '../utils/base';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { GridItemProps, gridItemStyle, GridItemStyleProps, useGridItemStyleProps } from '../utils/gridItem';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const style = css<
	{
		'data-align-content': AlignContent | undefined;
		'data-align-items': AlignItems | undefined;
		'data-column-gap': AbsoluteSize | undefined;
		'data-justify-content': JustifyContent | undefined;
		'data-justify-items': JustifyItems | undefined;
		'data-row-gap': AbsoluteSize | undefined;
	} & BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		GridItemStyleProps &
		MiscStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	display: grid;
	align-content: ${({ 'data-align-content': alignContent }) => alignContent};
	align-items: ${({ 'data-align-items': alignItems }) => alignItems};
	column-gap: ${({ 'data-column-gap': columnGap }) => columnGap};
	justify-content: ${({ 'data-justify-content': justifyContent }) => justifyContent};
	justify-items: ${({ 'data-justify-items': justifyItems }) => justifyItems};
	row-gap: ${({ 'data-row-gap': rowGap }) => rowGap};
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexItemStyle}
	${fontStyle}
	${gridItemStyle}
	${miscStyle}
	${sizeStyle}
`;

const StyledArticle = styled.article`
	${style}
`;

const StyledAside = styled.aside`
	${style}
`;

const StyledDiv = styled.div`
	${style}
`;

const StyledFigure = styled.figure`
	${style}
`;

const StyledFooter = styled.footer`
	${style}
`;

const StyledHeader = styled.header`
	${style}
`;

const StyledMain = styled.main`
	${style}
`;

const StyledNav = styled.nav`
	${style}
`;

const StyledSection = styled.section`
	${style}
`;

const StyledSummary = styled.summary`
	${style}
`;

export interface BaseGridProps<
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
> extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
		BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>,
		ColorProps<CustomColor>,
		FlexItemProps,
		FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>,
		DistanceProps<CustomDistance>,
		GridItemProps,
		MiscProps,
		SizeProps<CustomAspectRatio, CustomHeight, CustomWidth> {
	alignContent?: Falsifiable<AlignContent>;
	alignItems?: Falsifiable<AlignItems>;
	columnGap?: Falsifiable<Distance<CustomDistance>>;
	/** Component's html tag. */
	element?: Falsifiable<BaseGridElement>;
	justifyContent?: Falsifiable<JustifyContent>;
	justifyItems?: Falsifiable<JustifyItems>;
	rowGap?: Falsifiable<Distance<CustomDistance>>;
}

export const createBaseGrid = <
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
	const BaseGrid = memo(
		forwardRef<
			HTMLDivElement,
			BaseGridProps<
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
					alignContent,
					alignItems,
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
					columnGap,
					displayNone,
					element,
					flex,
					fontFamily,
					fontSize,
					fontWeight,
					grow,
					height,
					italic,
					justifyContent,
					justifyItems,
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
					position,
					right,
					rowGap,
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
				const theme = useEasyFlexTheme();

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

				const processedAlignContent = useMemo<AlignContent | undefined>(
					() => ifDefined(alignContent, (alignContent) => alignContent),
					[alignContent]
				);

				const processedAlignItems = useMemo<AlignItems | undefined>(
					() => ifDefined(alignItems, (alignItems) => alignItems),
					[alignItems]
				);

				const processedColumnGap = useMemo<AbsoluteSize | undefined>(
					() => ifDefined(columnGap, (columnGap) => getDistance(theme, columnGap)),
					[columnGap, theme]
				);

				const processedJustifyContent = useMemo<JustifyContent | undefined>(
					() => ifDefined(justifyContent, (justifyContent) => justifyContent),
					[justifyContent]
				);

				const processedJustifyItems = useMemo<JustifyItems | undefined>(
					() => ifDefined(justifyItems, (justifyItems) => justifyItems),
					[justifyItems]
				);

				const processedRowGap = useMemo<AbsoluteSize | undefined>(
					() => ifDefined(rowGap, (rowGap) => getDistance(theme, rowGap)),
					[rowGap, theme]
				);

				const Element = useMemo(() => {
					switch (defalsify(element) ?? 'div') {
						case 'article':
							return StyledArticle;
						case 'aside':
							return StyledAside;
						case 'div':
							return StyledDiv;
						case 'figure':
							return StyledFigure;
						case 'footer':
							return StyledFooter;
						case 'header':
							return StyledHeader;
						case 'main':
							return StyledMain;
						case 'nav':
							return StyledNav;
						case 'section':
							return StyledSection;
						case 'summary':
							return StyledSummary;
					}
				}, [element]);

				return (
					<Element
						data-align-content={processedAlignContent}
						data-align-items={processedAlignItems}
						data-column-gap={processedColumnGap}
						data-justify-content={processedJustifyContent}
						data-justify-items={processedJustifyItems}
						data-row-gap={processedRowGap}
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
					>
						{children}
					</Element>
				);
			}
		)
	);
	BaseGrid.displayName = 'BaseGrid';
	return BaseGrid;
};
