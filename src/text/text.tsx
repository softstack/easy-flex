import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
	IAlignSelf,
	IColor,
	IDistance,
	IFontSize,
	IFontStyle,
	IFontWeight,
	IHeight,
	ITextAlign,
	ITextElement,
	IWidth,
	IWordBreak,
} from '../types';
import {
	getFontSize,
	getFontWeight,
	ifNotUndefined,
	toPx,
	toRem,
	useColor,
	useDistance,
	useEasyFlexTheme,
	useSize,
} from '../utils';

const style = css<{
	'data-align'?: ITextAlign;
	'data-align-self'?: IAlignSelf;
	'data-color': string;
	'data-font-size': string;
	'data-font-weight': string | number;
	'data-font-style'?: IFontStyle;
	'data-height'?: string;
	'data-height-max'?: string;
	'data-height-min'?: string;
	'data-margin-bottom'?: string;
	'data-margin-left'?: string;
	'data-margin-right'?: string;
	'data-margin-top'?: string;
	'data-padding-bottom'?: string;
	'data-padding-left'?: string;
	'data-padding-right'?: string;
	'data-padding-top'?: string;
	'data-width'?: string;
	'data-width-max'?: string;
	'data-width-min'?: string;
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
	fontSize?: IFontSize | number;
	/** Component's font weight. */
	fontWeight?: IFontWeight | number;
	/** Sets the component's height to 100% if true. */
	fullHeight?: boolean;
	/** Sets the component's width to 100% if true. */
	fullWidth?: boolean;
	/** Component's height. */
	height?: IHeight | number;
	/** If true, the text style is set to italic. */
	italic?: boolean;
	/** Component's margin of all sides. */
	margin?: IDistance | number;
	/** Component's bottom margin. */
	marginBottom?: IDistance | number;
	/** Component's left margin. */
	marginLeft?: IDistance | number;
	/** Component's right margin. */
	marginRight?: IDistance | number;
	/** Component's top margin. */
	marginTop?: IDistance | number;
	/** Component's left and right margin. */
	marginX?: IDistance | number;
	/** Component's top and bottom margin. */
	marginY?: IDistance | number;
	/** Component's maximum height. */
	maxHeight?: IHeight | number;
	/** Component's maximum width. */
	maxWidth?: IWidth | number;
	/** Component's miniumum height. */
	minHeight?: IHeight | number;
	/** Component's minimum width. */
	minWidth?: IWidth | number;
	/** Padding of all sides. */
	padding?: IDistance | number;
	/** Component's bottom padding. */
	paddingBottom?: IDistance | number;
	/** Component's left padding. */
	paddingLeft?: IDistance | number;
	/** Component's right padding. */
	paddingRight?: IDistance | number;
	/** Component's top padding. */
	paddingTop?: IDistance | number;
	/** Component's left and right padding. */
	paddingX?: IDistance | number;
	/** Component's top and bottom padding. */
	paddingY?: IDistance | number;
	/** Component's width. */
	width?: IWidth | number;
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
	margin,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginX,
	marginY,
	maxHeight,
	maxWidth,
	minHeight,
	minWidth,
	padding,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
	width,
	wordBreak,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const processedColor = useColor(color, '');

	const processedFontSize = useMemo<string>(() => {
		const fontSizeValue = getFontSize(theme, fontSize);
		if (theme.font.sizeType === 'rem') {
			return toRem(fontSizeValue);
		}
		return toPx(fontSizeValue);
	}, [fontSize, theme]);

	const processedFontWeight = useMemo<string | number>(() => getFontWeight(theme, fontWeight), [fontWeight, theme]);

	const fontStyle = useMemo<IFontStyle | undefined>(
		() => ifNotUndefined(italic, (italic) => (italic ? 'italic' : 'normal')),
		[italic]
	);

	const distance = useDistance({
		margin,
		marginBottom,
		marginLeft,
		marginRight,
		marginTop,
		marginX,
		marginY,
		padding,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingX,
		paddingY,
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
