import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
	AbsoluteSize,
	AlignItems,
	AlignSelf,
	BaseFlexElement,
	BorderRadius,
	BorderWidth,
	Color,
	CssColor,
	Distance,
	FlexDirection,
	JustifyContent,
	Overflow,
} from '../types';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';
import {
	getBorderRadius,
	getBorderWidth,
	getDistance,
	ifNotUndefined,
	useColor,
	useEasyFlexTheme,
} from '../utils/utils';

const style = css<
	{
		'data-align'?: AlignItems;
		'data-align-self'?: AlignSelf;
		'data-background-color'?: CssColor;
		'data-border-color'?: CssColor;
		'data-border-radius'?: AbsoluteSize;
		'data-border-style'?: 'solid';
		'data-border-width'?: AbsoluteSize;
		'data-color'?: CssColor;
		'data-flex-direction'?: FlexDirection;
		'data-column-gap'?: AbsoluteSize;
		'data-row-gap'?: AbsoluteSize;
		'data-grow'?: number;
		'data-justify'?: JustifyContent;
		'data-overflow'?: Overflow;
		'data-overflow-x'?: Overflow;
		'data-overflow-y'?: Overflow;
		'data-shrink'?: number;
	} & DistanceStyleProps &
		FontStyleProps &
		SizeStyleProps
>`
	display: flex;
	box-sizing: border-box;
	align-items: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	border-color: ${({ 'data-border-color': borderColor }) => borderColor};
	border-radius: ${({ 'data-border-radius': borderRadius }) => borderRadius};
	border-style: ${({ 'data-border-style': borderStyle }) => borderStyle};
	border-width: ${({ 'data-border-width': borderWidth }) => borderWidth};
	color: ${({ 'data-color': color }) => color};
	flex-direction: ${({ 'data-flex-direction': flexDirection }) => flexDirection};
	column-gap: ${({ 'data-column-gap': columnGap }) => columnGap};
	row-gap: ${({ 'data-row-gap': rowGap }) => rowGap};
	flex-grow: ${({ 'data-grow': grow }) => grow};
	justify-content: ${({ 'data-justify': justify }) => justify};
	overflow: ${({ 'data-overflow': overflow }) => overflow};
	overflow-x: ${({ 'data-overflow-x': overflowX }) => overflowX};
	overflow-y: ${({ 'data-overflow-y': overflowY }) => overflowY};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
	${distanceStyle}
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

export interface BaseFlexProps extends HTMLAttributes<HTMLDivElement>, FontProps, DistanceProps, SizeProps {
	/** The alignment of the component's children on the cross axis. */
	align?: AlignItems;
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: AlignSelf;
	/** Component's background color. */
	backgroundColor?: Color;
	/** Component's border color. */
	borderColor?: Color;
	/** Component's border radius. */
	borderRadius?: BorderRadius | AbsoluteSize;
	/** Component's border width. */
	borderWidth?: BorderWidth | AbsoluteSize;
	/** Component's color. */
	color?: Color;
	/** Component's html tag. */
	element?: BaseFlexElement;
	/** Component's flex direction. */
	flexDirection?: FlexDirection;
	/** Sets the gap between the component's children. If colum-gap or row-gap depends on flexDirection. */
	gap?: Distance | AbsoluteSize;
	/** Component's flex grow. */
	grow?: number;
	/** Sets how the browser distributes space between and around the component's children along the main axis. */
	justify?: JustifyContent;
	/** Component's overflow behaviour. */
	overflow?: Overflow;
	/** Component's verflow behaviour on left and right edges. */
	overflowX?: Overflow;
	/** Component's overflow behaviour on top and bottom edges. */
	overflowY?: Overflow;
	/** Component's flex shrink. */
	shrink?: number;
}

export const BaseFlex = forwardRef<HTMLDivElement, BaseFlexProps>(
	(
		{
			align,
			alignSelf,
			backgroundColor,
			borderColor,
			borderRadius,
			borderWidth,
			children,
			color,
			element = 'div',
			flexDirection,
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
			marginLeft,
			marginRight,
			marginTop,
			marginHorizontal,
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
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingHorizontal,
			paddingVertical,
			shrink,
			width,
			...props
		},
		ref
	) => {
		const theme = useEasyFlexTheme();

		const processedBackgroundColor = useColor(backgroundColor, undefined);

		const processedBorderColor = useColor(borderColor, undefined);

		const processedBorderRadius = useMemo<AbsoluteSize | undefined>(
			() => ifNotUndefined(borderRadius, (borderRadius) => getBorderRadius(theme, borderRadius)),
			[borderRadius, theme]
		);

		const processedBorderStyle = useMemo<'solid' | undefined>(() => (borderWidth ? 'solid' : undefined), [borderWidth]);

		const processedBorderWidth = useMemo<AbsoluteSize | undefined>(
			() => ifNotUndefined(borderWidth, (borderWidth) => getBorderWidth(theme, borderWidth)),
			[borderWidth, theme]
		);

		const processedColor = useColor(color, undefined);

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight });

		const columnGap = useMemo<AbsoluteSize | undefined>(() => {
			if (gap === undefined) {
				return undefined;
			}
			if (flexDirection === 'row' || flexDirection === 'row-reverse') {
				return getDistance(theme, gap);
			}
			return undefined;
		}, [flexDirection, gap, theme]);

		const rowGap = useMemo<AbsoluteSize | undefined>(() => {
			if (gap === undefined) {
				return undefined;
			}
			if (flexDirection === 'column' || flexDirection === 'column-reverse') {
				return getDistance(theme, gap);
			}
			return undefined;
		}, [flexDirection, gap, theme]);

		const distanceStyleProps = useDistanceStyleProps({
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginHorizontal,
			marginVertical,
			padding,
			paddingBottom,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingHorizontal,
			paddingVertical,
		});

		const sizeStyleProps = useSizeStyleProps({
			fullHeight,
			fullWidth,
			height,
			heightMax: maxHeight,
			heightMin: minHeight,
			width,
			widthMax: maxWidth,
			widthMin: minWidth,
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
				data-align={align}
				data-align-self={alignSelf}
				data-background-color={processedBackgroundColor}
				data-border-color={processedBorderColor}
				data-border-radius={processedBorderRadius}
				data-border-style={processedBorderStyle}
				data-border-width={processedBorderWidth}
				data-color={processedColor}
				data-flex-direction={flexDirection}
				data-column-gap={columnGap}
				data-row-gap={rowGap}
				data-grow={grow}
				data-justify={justify}
				data-overflow={overflow}
				data-overflow-x={overflowX}
				data-overflow-y={overflowY}
				data-shrink={shrink}
				{...distanceStyleProps}
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

BaseFlex.displayName = 'BaseFlex';
