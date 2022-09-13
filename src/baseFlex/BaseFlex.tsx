import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BaseFlexElement } from '../types';
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
import { OverflowProps, overflowStyle, OverflowStyleProps, useOverflowStyleProps } from '../utils/overflow';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const style = css<
	BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexContainerStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		OverflowStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	display: flex;
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexContainerStyle}
	${flexItemStyle}
	${fontStyle}
	${overflowStyle}
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

export interface BaseFlexProps
	extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
		BorderProps,
		ColorProps,
		FlexContainerProps,
		FlexItemProps,
		FontProps,
		DistanceProps,
		OverflowProps,
		SizeProps {
	/** Component's html tag. */
	element?: BaseFlexElement;
}

export const BaseFlex = forwardRef<HTMLDivElement, BaseFlexProps>(
	(
		{
			align,
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
			direction,
			fontFamily,
			fontSize,
			fontWeight,
			fullHeight,
			fullWidth,
			gap,
			grow,
			height,
			italic,
			justify,
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

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight, underline });

		const flexContainerStyleProps = useFlexContainerStyleProps({ align, direction, gap, justify });

		const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

		const overflowStyleProps = useOverflowStyleProps({ overflow, overflowX, overflowY });

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
				{...fontStyleProps}
				{...flexContainerStyleProps}
				{...flexItemStyleProps}
				{...overflowStyleProps}
				{...sizeStyleProps}
				ref={ref}
				{...props}
			>
				{children}
			</Element>
		);
	}
);

BaseFlex.displayName = 'BaseFlex';
