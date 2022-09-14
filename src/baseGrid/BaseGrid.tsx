import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BaseGridElement } from '../types';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const style = css<
	BorderStyleProps & ColorStyleProps & DistanceStyleProps & FlexItemStyleProps & FontStyleProps & SizeStyleProps
>`
	box-sizing: border-box;
	display: grid;
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

export interface BaseGridProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
		BorderProps,
		ColorProps,
		FlexItemProps,
		FontProps,
		DistanceProps,
		SizeProps {
	/** Component's html tag. */
	element?: BaseGridElement;
}

export const BaseGrid = forwardRef<HTMLDivElement, BaseGridProps>(
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
			shrink,
			underline,
			width,
			...props
		},
		ref
	) => {
		const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth, round });

		const colorStyleProps = useColorStyleProps({ backgroundColor, color });

		const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight, underline });

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

		const Element = useMemo(() => {
			switch (element) {
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
