import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { IColor, IFontSize, IFontStyle, IFontWeight, IStyleElement } from '../types';
import { getFontSize, getFontWeight, ifNotUndefined, toPx, toRem, useColor, useEasyFlexTheme } from '../utils';

const style = css<{
	'data-background-color'?: string;
	'data-color'?: string;
	'data-font-size'?: string;
	'data-font-weight'?: string | number;
	'data-font-style'?: IFontStyle;
}>`
	box-sizing: border-box;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	font-size: ${({ 'data-font-size': fontSize }) => fontSize};
	font-weight: ${({ 'data-font-weight': fontWeight }) => fontWeight};
	font-style: ${({ 'data-font-style': fontStyle }) => fontStyle};
`;

const B = styled.b`
	${style}
`;

const Cite = styled.cite`
	${style}
`;

const Code = styled.code`
	${style}
`;

const Em = styled.em`
	${style}
`;

const I = styled.i`
	${style}
`;

const Kbd = styled.kbd`
	${style}
`;

const Mark = styled.mark`
	${style}
`;

const S = styled.s`
	${style}
`;

const Samp = styled.samp`
	${style}
`;

const Small = styled.small`
	${style}
`;

const Span = styled.span`
	${style}
`;

const Strong = styled.strong`
	${style}
`;

const Sub = styled.sub`
	${style}
`;

const Sup = styled.sup`
	${style}
`;

const U = styled.u`
	${style}
`;

const Var = styled.var`
	${style}
`;

export interface IStyleProps extends HTMLAttributes<HTMLSpanElement> {
	backgroundColor?: IColor;
	color?: IColor;
	element?: IStyleElement;
	fontSize?: IFontSize | number;
	fontWeight?: IFontWeight | number;
	italic?: boolean;
}

export const Style: FC<IStyleProps> = ({
	backgroundColor,
	color,
	element = 'span',
	fontSize,
	fontWeight,
	italic,
	children,
}) => {
	const theme = useEasyFlexTheme();

	const processedBackgroundColor = useColor(backgroundColor, undefined);

	const processedColor = useColor(color, undefined);

	const processedFontSize = useMemo<string | undefined>(() => {
		if (fontSize === undefined) {
			return undefined;
		}
		const fontSizeValue = getFontSize(theme, fontSize);
		if (theme.font.sizeType === 'rem') {
			return toRem(fontSizeValue);
		}
		return toPx(fontSizeValue);
	}, [fontSize, theme]);

	const processedFontWeight = useMemo<string | number | undefined>(
		() => ifNotUndefined(fontWeight, (fontWeight) => getFontWeight(theme, fontWeight)),
		[fontWeight, theme]
	);

	const fontStyle = useMemo<IFontStyle | undefined>(
		() => ifNotUndefined(italic, (italic) => (italic ? 'italic' : 'normal')),
		[italic]
	);

	const Element = useMemo(() => {
		switch (element) {
			case 'b':
				return B;
			case 'cite':
				return Cite;
			case 'code':
				return Code;
			case 'em':
				return Em;
			case 'i':
				return I;
			case 'kbd':
				return Kbd;
			case 'mark':
				return Mark;
			case 's':
				return S;
			case 'samp':
				return Samp;
			case 'small':
				return Small;
			case 'span':
				return Span;
			case 'strong':
				return Strong;
			case 'sub':
				return Sub;
			case 'sup':
				return Sup;
			case 'u':
				return U;
			case 'var':
				return Var;
		}
	}, [element]);

	return (
		<Element
			data-background-color={processedBackgroundColor}
			data-color={processedColor}
			data-font-size={processedFontSize}
			data-font-weight={processedFontWeight}
			data-font-wtyle={fontStyle}
		>
			{children}
		</Element>
	);
};
