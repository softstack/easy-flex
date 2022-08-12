import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
	AbsoluteSize,
	AlignSelf,
	Color,
	CssColor,
	CssFontWeight,
	CssLineHeight,
	Distance,
	FontFamily,
	FontSize,
	FontStyle,
	FontWeight,
	Height,
	LineHeight,
	Size,
	TextAlign,
	TextElement,
	Width,
	WordBreak,
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
	'data-align'?: TextAlign;
	'data-align-self'?: AlignSelf;
	'data-color': CssColor;
	'data-font-family': string;
	'data-font-size': Size;
	'data-font-weight': CssFontWeight | number;
	'data-font-style'?: FontStyle;
	'data-height'?: Size;
	'data-height-max'?: Size;
	'data-height-min'?: Size;
	'data-line-height'?: CssLineHeight;
	'data-margin-bottom': AbsoluteSize;
	'data-margin-left': AbsoluteSize;
	'data-margin-right': AbsoluteSize;
	'data-margin-top': AbsoluteSize;
	'data-padding-bottom': AbsoluteSize;
	'data-padding-left': AbsoluteSize;
	'data-padding-right': AbsoluteSize;
	'data-padding-top': AbsoluteSize;
	'data-width'?: Size;
	'data-width-max'?: Size;
	'data-width-min'?: Size;
	'data-word-break'?: WordBreak;
}>`
	box-sizing: border-box;
	text-align: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	font-family: ${({ 'data-font-family': fontFamily }) => fontFamily};
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

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
	/** Component's text alignment. */
	align?: TextAlign;
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: AlignSelf;
	/** Component's color */
	color?: Color;
	/** Component's html tag. */
	element?: TextElement;
	fontFamily?: FontFamily;
	/** Component's font size. */
	fontSize?: FontSize | Size;
	/** Component's font weight. */
	fontWeight?: FontWeight | number;
	/** Sets the component's height to 100% if true. */
	fullHeight?: boolean;
	/** Sets the component's width to 100% if true. */
	fullWidth?: boolean;
	/** Component's height. */
	height?: Height | Size;
	/** If true, the text style is set to italic. */
	italic?: boolean;
	lineHeight?: CssLineHeight | LineHeight;
	/** Component's margin of all sides. */
	margin?: Distance | AbsoluteSize;
	/** Component's bottom margin. */
	marginBottom?: Distance | AbsoluteSize;
	/** Component's left margin. */
	marginLeft?: Distance | AbsoluteSize;
	/** Component's right margin. */
	marginRight?: Distance | AbsoluteSize;
	/** Component's top margin. */
	marginTop?: Distance | AbsoluteSize;
	/** Component's left and right margin. */
	marginHorizontal?: Distance | AbsoluteSize;
	/** Component's top and bottom margin. */
	marginVertical?: Distance | AbsoluteSize;
	/** Component's maximum height. */
	maxHeight?: Height | Size;
	/** Component's maximum width. */
	maxWidth?: Width | Size;
	/** Component's miniumum height. */
	minHeight?: Height | Size;
	/** Component's minimum width. */
	minWidth?: Width | Size;
	/** Padding of all sides. */
	padding?: Distance | AbsoluteSize;
	/** Component's bottom padding. */
	paddingBottom?: Distance | AbsoluteSize;
	/** Component's left padding. */
	paddingLeft?: Distance | AbsoluteSize;
	/** Component's right padding. */
	paddingRight?: Distance | AbsoluteSize;
	/** Component's top padding. */
	paddingTop?: Distance | AbsoluteSize;
	/** Component's left and right padding. */
	paddingHorizontal?: Distance | AbsoluteSize;
	/** Component's top and bottom padding. */
	paddingVertical?: Distance | AbsoluteSize;
	/** Component's width. */
	width?: Width | Size;
	/** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
	wordBreak?: WordBreak;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
	(
		{
			align,
			alignSelf,
			children,
			color = 'primaryText',
			element = 'p',
			fontFamily = 'primary',
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
		},
		ref
	) => {
		const theme = useEasyFlexTheme();

		const processedColor = useMemo<CssColor>(() => getColor(theme, color), [color, theme]);

		const processedFontFamily = useMemo<string>(() => theme.font.family[fontFamily], [fontFamily, theme]);

		const processedFontSize = useMemo<Size>(() => getFontSize(theme, fontSize), [fontSize, theme]);

		const processedFontWeight = useMemo<CssFontWeight | number>(
			() => getFontWeight(theme, fontWeight),
			[fontWeight, theme]
		);

		const fontStyle = useMemo<FontStyle | undefined>(
			() => ifNotUndefined(italic, (italic) => (italic ? 'italic' : 'normal')),
			[italic]
		);

		const processedLineHeight = useMemo<CssLineHeight | undefined>(
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
				data-font-family={processedFontFamily}
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
				ref={ref}
				{...props}
			>
				{children}
			</Element>
		);
	}
);

Text.displayName = 'Text';
