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

const StyledB = styled.b`
	${style}
`;

const StyledCite = styled.cite`
	${style}
`;

const StyledCode = styled.code`
	${style}
`;

const StyledEm = styled.em`
	${style}
`;

const StyledI = styled.i`
	${style}
`;

const StyledKbd = styled.kbd`
	${style}
`;

const StyledMark = styled.mark`
	${style}
`;

const StyledS = styled.s`
	${style}
`;

const StyledSamp = styled.samp`
	${style}
`;

const StyledSmall = styled.small`
	${style}
`;

const StyledSpan = styled.span`
	${style}
`;

const StyledStrong = styled.strong`
	${style}
`;

const StyledSub = styled.sub`
	${style}
`;

const StyledSup = styled.sup`
	${style}
`;

const StyledU = styled.u`
	${style}
`;

const StyledVar = styled.var`
	${style}
`;

export interface StyleProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>, ColorProps, FontProps {
	/** Component's html tag. */
	element?: StyleElement;
}

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
					return StyledB;
				case 'cite':
					return StyledCite;
				case 'code':
					return StyledCode;
				case 'em':
					return StyledEm;
				case 'i':
					return StyledI;
				case 'kbd':
					return StyledKbd;
				case 'mark':
					return StyledMark;
				case 's':
					return StyledS;
				case 'samp':
					return StyledSamp;
				case 'small':
					return StyledSmall;
				case 'span':
					return StyledSpan;
				case 'strong':
					return StyledStrong;
				case 'sub':
					return StyledSub;
				case 'sup':
					return StyledSup;
				case 'u':
					return StyledU;
				case 'var':
					return StyledVar;
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
