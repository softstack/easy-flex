import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
	IAlignItems,
	IAlignSelf,
	IBaseFlexElement,
	IColor,
	IDistance,
	IFlexDirection,
	IJustifyContent,
} from '../types';
import { getDistance, toPx, useColor, useDistance, useEasyFlexTheme } from '../utils';

const style = css<{
	'data-align'?: IAlignItems;
	'data-align-self'?: IAlignSelf;
	'data-background-color'?: string;
	'data-color'?: string;
	'data-flex-direction'?: IFlexDirection;
	'data-full-width'?: '100%';
	'data-column-gap'?: string;
	'data-row-gap'?: string;
	'data-grow'?: number;
	'data-justify'?: IJustifyContent;
	'data-margin-bottom': string;
	'data-margin-left': string;
	'data-margin-right': string;
	'data-margin-top': string;
	'data-padding-bottom': string;
	'data-padding-left': string;
	'data-padding-right': string;
	'data-padding-top': string;
	'data-shrink'?: number;
}>`
	display: flex;
	box-sizing: border-box;
	align-items: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	flex-direction: ${({ 'data-flex-direction': flexDirection }) => flexDirection};
	width: ${({ 'data-full-width': fullWidth }) => fullWidth};
	column-gap: ${({ 'data-column-gap': columnGap }) => columnGap};
	row-gap: ${({ 'data-row-gap': rowGap }) => rowGap};
	flex-grow: ${({ 'data-grow': grow }) => grow};
	justify-content: ${({ 'data-justify': justify }) => justify};
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
	padding-bottom: ${({ 'data-padding-bottom': paddingBottom }) => paddingBottom};
	padding-left: ${({ 'data-padding-left': paddingLeft }) => paddingLeft};
	padding-right: ${({ 'data-padding-right': paddingRight }) => paddingRight};
	padding-top: ${({ 'data-padding-top': paddingTop }) => paddingTop};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
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

export interface IBaseFlexProps extends HTMLAttributes<HTMLDivElement> {
	align?: IAlignItems;
	alignSelf?: IAlignSelf;
	backgroundColor?: IColor;
	color?: IColor;
	element?: IBaseFlexElement;
	flexDirection?: IFlexDirection;
	fullWidth?: boolean;
	gap?: number | IDistance;
	grow?: number;
	justify?: IJustifyContent;
	marginBottom?: IDistance | number;
	marginLeft?: IDistance | number;
	marginRight?: IDistance | number;
	marginTop?: IDistance | number;
	marginX?: IDistance | number;
	marginY?: IDistance | number;
	paddingBottom?: IDistance | number;
	paddingLeft?: IDistance | number;
	paddingRight?: IDistance | number;
	paddingTop?: IDistance | number;
	paddingX?: IDistance | number;
	paddingY?: IDistance | number;
	shrink?: number;
}

export const BaseFlex: FC<IBaseFlexProps> = ({
	align,
	alignSelf,
	backgroundColor,
	children,
	color,
	element = 'div',
	flexDirection,
	fullWidth = false,
	gap,
	grow,
	justify,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginX,
	marginY,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
	shrink,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const processedBackgroundColor = useColor(backgroundColor, undefined);

	const processedColor = useColor(color, undefined);

	const processedFullWidth = useMemo<'100%' | undefined>(() => (fullWidth ? '100%' : undefined), [fullWidth]);

	const columnGap = useMemo<string | undefined>(() => {
		if (gap === undefined) {
			return undefined;
		}
		switch (flexDirection) {
			case 'row':
			case 'row-reverse':
				return toPx(getDistance(theme, gap));
			default:
				undefined;
		}
	}, [flexDirection, gap, theme]);

	const rowGap = useMemo(() => {
		if (gap === undefined) {
			return undefined;
		}
		switch (flexDirection) {
			case 'column':
			case 'column-reverse':
				return toPx(getDistance(theme, gap));
			default:
				undefined;
		}
	}, [flexDirection, gap, theme]);

	const distance = useDistance({
		marginBottom,
		marginLeft,
		marginRight,
		marginTop,
		marginX,
		marginY,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingX,
		paddingY,
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
			data-color={processedColor}
			data-flex-direction={flexDirection}
			data-full-width={processedFullWidth}
			data-column-gap={columnGap}
			data-row-gap={rowGap}
			data-grow={grow}
			data-justify={justify}
			data-margin-bottom={distance.marginBottom}
			data-margin-left={distance.marginLeft}
			data-margin-right={distance.marginRight}
			data-margin-top={distance.marginTop}
			data-padding-bottom={distance.paddingBottom}
			data-padding-left={distance.paddingLeft}
			data-padding-right={distance.paddingRight}
			data-padding-top={distance.paddingTop}
			data-shrink={shrink}
			{...props}
		>
			{children}
		</Element>
	);
};
