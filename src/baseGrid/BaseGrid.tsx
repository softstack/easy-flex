import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { AbsoluteSize, BaseGridElement, CustomName, Distance, Falsifiable } from '../types';
import { getDistance, ifDefined, useEasyFlexTheme } from '../utils/base';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const style = css<
	{
		'data-column-gap'?: AbsoluteSize;
		'data-row-gap'?: AbsoluteSize;
	} & BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	display: grid;
	column-gap: ${({ 'data-column-gap': columnGap }) => columnGap};
	row-gap: ${({ 'data-row-gap': rowGap }) => rowGap};
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexItemStyle}
	${fontStyle}
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
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
> extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
		BorderProps<CustomColor>,
		ColorProps<CustomColor>,
		FlexItemProps,
		FontProps<CustomColor, CustomFontFamily>,
		DistanceProps,
		SizeProps<CustomHeight, CustomWidth> {
	columnGap?: Falsifiable<Distance>;
	/** Component's html tag. */
	element?: Falsifiable<BaseGridElement>;
	rowGap?: Falsifiable<Distance>;
}

export const createBaseGrid = <
	CustomColor extends CustomName,
	CustomFontFamily extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
>() => {
	const BaseGrid = forwardRef<HTMLDivElement, BaseGridProps<CustomColor, CustomFontFamily, CustomHeight, CustomWidth>>(
		(
			{
				alignSelf,
				backgroundColor,
				basis,
				borderColor,
				borderRadius,
				borderStyle,
				borderWidth,
				children,
				color,
				columnGap,
				element = 'div',
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
				round,
				rowGap,
				shrink,
				underline,
				whiteSpace,
				width,
				wordBreak,
				...props
			},
			ref
		) => {
			const theme = useEasyFlexTheme();

			const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth, round });

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

			const processedColumnGap = useMemo<AbsoluteSize | undefined>(
				() => ifDefined(columnGap, (columnGap) => getDistance(theme, columnGap)),
				[columnGap, theme]
			);

			const processedRowGap = useMemo<AbsoluteSize | undefined>(
				() => ifDefined(rowGap, (rowGap) => getDistance(theme, rowGap)),
				[rowGap, theme]
			);

			const Element = useMemo(() => {
				switch (element) {
					case 'article':
						return StyledArticle;
					case 'aside':
						return StyledAside;
					case 'div':
					case false:
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
					data-column-gap={processedColumnGap}
					data-row-gap={processedRowGap}
					{...borderStyleProps}
					{...colorStyleProps}
					{...distanceStyleProps}
					{...flexItemStyleProps}
					{...fontStyleProps}
					{...sizeStyleProps}
					ref={ref}
					{...props}
				>
					{children}
				</Element>
			);
		}
	);
	BaseGrid.displayName = 'BaseGrid';
	return BaseGrid;
};
