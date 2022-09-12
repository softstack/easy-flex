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

const Article = styled.article`
	${style}
`;

const Aside = styled.aside`
	${style}
`;

const Div = styled.div`
	${style}
`;

const Figure = styled.figure`
	${style}
`;

const Footer = styled.footer`
	${style}
`;

const Header = styled.header`
	${style}
`;

const Main = styled.main`
	${style}
`;

const Nav = styled.nav`
	${style}
`;

const Section = styled.section`
	${style}
`;

const Summary = styled.summary`
	${style}
`;

export type BaseGridProps = HTMLAttributes<HTMLDivElement> &
	BorderProps &
	ColorProps &
	FlexItemProps &
	FontProps &
	DistanceProps &
	SizeProps & {
		/** Component's html tag. */
		element?: BaseGridElement;
	};

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
					return Article;
				case 'aside':
					return Aside;
				case 'div':
					return Div;
				case 'figure':
					return Figure;
				case 'footer':
					return Footer;
				case 'header':
					return Header;
				case 'main':
					return Main;
				case 'nav':
					return Nav;
				case 'section':
					return Section;
				case 'summary':
					return Summary;
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
