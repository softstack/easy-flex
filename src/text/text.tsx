import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
	IAbsoluteSize,
	IAlignSelf,
	IColor,
	ICssColor,
	ICssFontWeight,
	ICssLineHeight,
	IDistance,
	IFontSize,
	IFontStyle,
	IFontWeight,
	IHeight,
	ILineHeight,
	ISize,
	ITextAlign,
	ITextElement,
	IWidth,
	IWordBreak,
} from '../types';
import {
	getColor,
	getFontSize,
	getFontWeight,
	getLineHeight,
	ifNotUndefined,
	useDistance,
	useEasyFlexTheme,
	useSize,
} from '../utils';

const style = css<{
	'data-align'?: ITextAlign;
	'data-align-self'?: IAlignSelf;
	'data-color': ICssColor;
	'data-font-size': ISize;
	'data-font-weight': ICssFontWeight | number;
	'data-font-style'?: IFontStyle;
	'data-height'?: ISize;
	'data-height-max'?: ISize;
	'data-height-min'?: ISize;
	'data-line-height'?: ICssLineHeight;
	'data-margin-bottom': IAbsoluteSize;
	'data-margin-left': IAbsoluteSize;
	'data-margin-right': IAbsoluteSize;
	'data-margin-top': IAbsoluteSize;
	'data-padding-bottom': IAbsoluteSize;
	'data-padding-left': IAbsoluteSize;
	'data-padding-right': IAbsoluteSize;
	'data-padding-top': IAbsoluteSize;
	'data-width'?: ISize;
	'data-width-max'?: ISize;
	'data-width-min'?: ISize;
	'data-word-break'?: IWordBreak;
}>`
	box-sizing: border-box;
	text-align: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	font-size: ${({ 'data-font-size': fontSize }) => fontSize};
	font-weight: ${({ 'data-font-weight': fontWeight }) => fontWeight};
	font-style: ${({ 'data-font-style': fontStyle }) => fontStyle};
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height-max': heightMax }) => heightMax};
	min-height: ${({ 'data-height-min': heightMin }) => heightMin};
	line-height: ${({ 'data-line-height': lineHeight }) => lineHeight};
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
	padding-bottom: ${({ 'data-padding-bottom': paddingBottom }) => paddingBottom};
	padding-left: ${({ 'data-padding-left': paddingLeft }) => paddingLeft};
	padding-right: ${({ 'data-padding-right': paddingRight }) => paddingRight};
	padding-top: ${({ 'data-padding-top': paddingTop }) => paddingTop};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width-max': widthMax }) => widthMax};
	min-width: ${({ 'data-width-min': widthMin }) => widthMin};
	word-break: ${({ 'data-word-break': wordBreak }) => wordBreak};
`;

const H1 = styled.h1`
	${style}
`;

const H2 = styled.h2`
	${style}
`;

const H3 = styled.h3`
	${style}
`;

const H4 = styled.h4`
	${style}
`;

const H5 = styled.h5`
	${style}
`;

const H6 = styled.h6`
	${style}
`;

const P = styled.p`
	${style}
`;

export interface ITextProps extends HTMLAttributes<HTMLParagraphElement> {
	/** Component's text alignment. */
	align?: ITextAlign;
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: IAlignSelf;
	/** Component's color */
	color?: IColor;
	/** Component's html tag. */
	element?: ITextElement;
	/** Component's font size. */
	fontSize?: IFontSize | ISize;
	/** Component's font weight. */
	fontWeight?: IFontWeight | number;
	/** Sets the component's height to 100% if true. */
	fullHeight?: boolean;
	/** Sets the component's width to 100% if true. */
	fullWidth?: boolean;
	/** Component's height. */
	height?: IHeight | ISize;
	/** If true, the text style is set to italic. */
	italic?: boolean;
	lineHeight?: ICssLineHeight | ILineHeight;
	/** Component's margin of all sides. */
	margin?: IDistance | IAbsoluteSize;
	/** Component's bottom margin. */
	marginBottom?: IDistance | IAbsoluteSize;
	/** Component's left margin. */
	marginLeft?: IDistance | IAbsoluteSize;
	/** Component's right margin. */
	marginRight?: IDistance | IAbsoluteSize;
	/** Component's top margin. */
	marginTop?: IDistance | IAbsoluteSize;
	/** Component's left and right margin. */
	marginHorizontal?: IDistance | IAbsoluteSize;
	/** Component's top and bottom margin. */
	marginVertical?: IDistance | IAbsoluteSize;
	/** Component's maximum height. */
	maxHeight?: IHeight | ISize;
	/** Component's maximum width. */
	maxWidth?: IWidth | ISize;
	/** Component's miniumum height. */
	minHeight?: IHeight | ISize;
	/** Component's minimum width. */
	minWidth?: IWidth | ISize;
	/** Padding of all sides. */
	padding?: IDistance | IAbsoluteSize;
	/** Component's bottom padding. */
	paddingBottom?: IDistance | IAbsoluteSize;
	/** Component's left padding. */
	paddingLeft?: IDistance | IAbsoluteSize;
	/** Component's right padding. */
	paddingRight?: IDistance | IAbsoluteSize;
	/** Component's top padding. */
	paddingTop?: IDistance | IAbsoluteSize;
	/** Component's left and right padding. */
	paddingHorizontal?: IDistance | IAbsoluteSize;
	/** Component's top and bottom padding. */
	paddingVertical?: IDistance | IAbsoluteSize;
	/** Component's width. */
	width?: IWidth | ISize;
	/** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
	wordBreak?: IWordBreak;
}

export const Text: FC<ITextProps> = ({
	align,
	alignSelf,
	children,
	color = 'primaryText',
	element = 'p',
	fontSize = 'm',
	fontWeight = 'normal',
	fullHeight = false,
	fullWidth = false,
	height,
	italic,
	lineHeight = 'm',
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
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingHorizontal,
	paddingVertical,
	width,
	wordBreak,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const processedColor = useMemo<ICssColor>(() => getColor(theme, color), [color, theme]);

	const processedFontSize = useMemo<ISize>(() => getFontSize(theme, fontSize), [fontSize, theme]);

	const processedFontWeight = useMemo<ICssFontWeight | number>(
		() => getFontWeight(theme, fontWeight),
		[fontWeight, theme]
	);

	const fontStyle = useMemo<IFontStyle | undefined>(
		() => ifNotUndefined(italic, (italic) => (italic ? 'italic' : 'normal')),
		[italic]
	);

	const processedLineHeight = useMemo<ICssLineHeight | undefined>(
		() => getLineHeight(theme, lineHeight),
		[lineHeight, theme]
	);

	const distance = useDistance({
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

	const size = useSize({
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
			case 'h1':
				return H1;
			case 'h2':
				return H2;
			case 'h3':
				return H3;
			case 'h4':
				return H4;
			case 'h5':
				return H5;
			case 'h6':
				return H6;
			case 'p':
				return P;
		}
	}, [element]);

	return (
		<Element
			data-align={align}
			data-align-self={alignSelf}
			data-color={processedColor}
			data-font-size={processedFontSize}
			data-font-weight={processedFontWeight}
			data-font-style={fontStyle}
			data-height={size.height}
			data-height-max={size.heightMax}
			data-height-min={size.heightMin}
			data-line-height={processedLineHeight}
			data-margin-bottom={distance.margin.bottom}
			data-margin-left={distance.margin.left}
			data-margin-right={distance.margin.right}
			data-margin-top={distance.margin.top}
			data-padding-bottom={distance.padding.bottom}
			data-padding-left={distance.padding.left}
			data-padding-right={distance.padding.right}
			data-padding-top={distance.padding.top}
			data-width={size.width}
			data-width-max={size.widthMax}
			data-width-min={size.widthMin}
			data-word-break={wordBreak}
			{...props}
		>
			{children}
		</Element>
	);
};
