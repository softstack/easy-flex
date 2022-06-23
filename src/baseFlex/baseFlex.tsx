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
import { getColor, getDistance, toPx, useEasyFlexTheme } from '../utils';

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
	'data-horizontal-margin': string;
	'data-horizontal-padding': string;
	'data-justify'?: IJustifyContent;
	'data-shrink'?: number;
	'data-vertical-margin': string;
	'data-vertical-padding': string;
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
	margin-left: ${({ 'data-horizontal-margin': horizontalMargin }) => horizontalMargin};
	margin-right: ${({ 'data-horizontal-margin': horizontalMargin }) => horizontalMargin};
	padding-left: ${({ 'data-horizontal-padding': horizontalPadding }) => horizontalPadding};
	padding-right: ${({ 'data-horizontal-padding': horizontalPadding }) => horizontalPadding};
	justify-content: ${({ 'data-justify': justify }) => justify};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
	margin-top: ${({ 'data-vertical-margin': verticalMargin }) => verticalMargin};
	margin-bottom: ${({ 'data-vertical-margin': verticalMargin }) => verticalMargin};
	padding-top: ${({ 'data-vertical-padding': verticalPadding }) => verticalPadding};
	padding-bottom: ${({ 'data-vertical-padding': verticalPadding }) => verticalPadding};
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
	horizontalMargin?: IDistance | number;
	horizontalPadding?: IDistance | number;
	justify?: IJustifyContent;
	shrink?: number;
	verticalMargin?: IDistance | number;
	verticalPadding?: IDistance | number;
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
	horizontalMargin = 0,
	horizontalPadding = 0,
	justify,
	shrink,
	verticalMargin = 0,
	verticalPadding = 0,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const processedBackgroundColor = useMemo<string | undefined>(
		() => (backgroundColor === undefined ? undefined : getColor(theme, backgroundColor)),
		[theme, backgroundColor]
	);

	const processedColor = useMemo<string | undefined>(
		() => (color === undefined ? undefined : getColor(theme, color)),
		[theme, color]
	);

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
	}, [theme, flexDirection, gap]);

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
	}, [theme, flexDirection, gap]);

	const processedHorizontalMargin = useMemo<string>(
		() => toPx(getDistance(theme, horizontalMargin)),
		[theme, horizontalMargin]
	);

	const processedHorizontalPadding = useMemo<string>(
		() => toPx(getDistance(theme, horizontalPadding)),
		[theme, horizontalPadding]
	);

	const processedVerticalMargin = useMemo<string>(
		() => toPx(getDistance(theme, verticalMargin)),
		[theme, verticalMargin]
	);

	const processedVerticalPadding = useMemo<string>(
		() => toPx(getDistance(theme, verticalPadding)),
		[theme, verticalPadding]
	);

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
			data-horizontal-margin={processedHorizontalMargin}
			data-horizontal-padding={processedHorizontalPadding}
			data-justify={justify}
			data-shrink={shrink}
			data-vertical-margin={processedVerticalMargin}
			data-vertical-padding={processedVerticalPadding}
			{...props}
		>
			{children}
		</Element>
	);
};
