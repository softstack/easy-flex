import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Color, CssColor, StyleElement } from '../types';
import { useColor } from '../utils/base';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';

const style = css<
	{
		'data-background-color'?: CssColor;
		'data-color'?: CssColor;
	} & FontStyleProps
>`
	box-sizing: border-box;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	${fontStyle}
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

export interface StyleProps extends HTMLAttributes<HTMLSpanElement>, FontProps {
	/** Component's background color. */
	backgroundColor?: Color;
	/** Component's color. */
	color?: Color;
	/** Component's html tag. */
	element?: StyleElement;
}

export const Style = forwardRef<HTMLParagraphElement, StyleProps>(
	(
		{ backgroundColor, children, color, element = 'span', fontFamily, fontSize, fontWeight, italic, lineHeight },
		ref
	) => {
		const processedBackgroundColor = useColor(backgroundColor, undefined);

		const processedColor = useColor(color, undefined);

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight });

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
				{...fontStyleProps}
				ref={ref}
			>
				{children}
			</Element>
		);
	}
);

Style.displayName = 'Style';
