import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import {
	IAlignSelf,
	IColor,
	IDistance,
	IFontSize,
	IFontStyle,
	IFontWeight,
	ITextAlign,
	ITextElement,
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
} from '../utils';

const style = css<{
	'data-align'?: ITextAlign;
	'data-align-self'?: IAlignSelf;
	'data-color': string;
	'data-font-size': string;
	'data-font-weight': string | number;
	'data-full-width'?: '100%';
	'data-font-style'?: IFontStyle;
	'data-margin-bottom'?: string;
	'data-margin-left'?: string;
	'data-margin-right'?: string;
	'data-margin-top'?: string;
	'data-padding-bottom'?: string;
	'data-padding-left'?: string;
	'data-padding-right'?: string;
	'data-padding-top'?: string;
	'data-word-break'?: IWordBreak;
}>`
	display: flex;
	box-sizing: border-box;
	text-align: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	font-size: ${({ 'data-font-size': fontSize }) => fontSize};
	font-weight: ${({ 'data-font-weight': fontWeight }) => fontWeight};
	width: ${({ 'data-full-width': fullWidth }) => fullWidth};
	font-style: ${({ 'data-font-style': fontStyle }) => fontStyle};
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
	padding-bottom: ${({ 'data-padding-bottom': paddingBottom }) => paddingBottom};
	padding-left: ${({ 'data-padding-left': paddingLeft }) => paddingLeft};
	padding-right: ${({ 'data-padding-right': paddingRight }) => paddingRight};
	padding-top: ${({ 'data-padding-top': paddingTop }) => paddingTop};
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
	align?: ITextAlign;
	alignSelf?: IAlignSelf;
	color?: IColor;
	element?: ITextElement;
	fontSize?: number | IFontSize;
	fontWeight?: number | IFontWeight;
	fullWidth?: boolean;
	italic?: boolean;
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
	fullWidth,
	italic,
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

	const processedFullWidth = useMemo<'100%' | undefined>(() => (fullWidth ? '100%' : undefined), [fullWidth]);

	const fontStyle = useMemo<IFontStyle | undefined>(
		() => ifNotUndefined(italic, (italic) => (italic ? 'italic' : 'normal')),
		[italic]
	);

	const { margin, padding } = useDistance({
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
			data-full-width={processedFullWidth}
			data-font-style={fontStyle}
			data-margin-bottom={margin.bottom}
			data-margin-left={margin.left}
			data-margin-right={margin.right}
			data-margin-top={margin.top}
			data-padding-bottom={padding.bottom}
			data-padding-left={padding.left}
			data-padding-right={padding.right}
			data-padding-top={padding.top}
			data-word-break={wordBreak}
			{...props}
		>
			{children}
		</Element>
	);
};
