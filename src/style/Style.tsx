import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { StyleElement } from '../types';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';

const style = css<ColorStyleProps & FontStyleProps>`
	box-sizing: border-box;
	${colorStyle}
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

export type StyleProps = HTMLAttributes<HTMLSpanElement> &
	ColorProps &
	FontProps & {
		/** Component's html tag. */
		element?: StyleElement;
	};

export const Style = forwardRef<HTMLParagraphElement, StyleProps>(
	(
		{
			backgroundColor,
			children,
			color,
			element = 'span',
			fontFamily,
			fontSize,
			fontWeight,
			italic,
			lineHeight,
			underline,
		},
		ref
	) => {
		const colorStyleProps = useColorStyleProps({ backgroundColor, color });

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight, underline });

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
			<Element {...colorStyleProps} {...fontStyleProps} ref={ref}>
				{children}
			</Element>
		);
	}
);

Style.displayName = 'Style';
