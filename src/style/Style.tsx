import React, { forwardRef, HTMLAttributes, memo, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { CustomName, Falsifiable, StyleElement } from '../types';
import { defalsify } from '../utils/base';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';

const style = css<ColorStyleProps & FontStyleProps & MiscStyleProps>`
	box-sizing: border-box;
	${colorStyle}
	${fontStyle}
	${miscStyle}
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

export interface StyleProps<
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomLineHeight extends CustomName
> extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'>,
		ColorProps<CustomColor>,
		FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>,
		MiscProps<CustomDistance> {
	/** Component's html tag. */
	element?: Falsifiable<StyleElement>;
}

export const createStyle = <
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomLineHeight extends CustomName
>() => {
	const Style = memo(
		forwardRef<
			HTMLSpanElement,
			StyleProps<CustomColor, CustomDistance, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>
		>(
			(
				{
					backgroundColor,
					bottom,
					children,
					color,
					display,
					element,
					fontFamily,
					fontSize,
					fontWeight,
					italic,
					left,
					lineHeight,
					opacity,
					position,
					right,
					textOverflow,
					top,
					underline,
					userSelect,
					visibility,
					whiteSpace,
					wordBreak,
					...props
				},
				ref
			) => {
				const colorStyleProps = useColorStyleProps({ backgroundColor, color });

				const fontStyleProps = useFontStyleProps({
					fontFamily,
					fontSize,
					fontWeight,
					italic,
					lineHeight,
					textOverflow,
					underline,
					whiteSpace,
					wordBreak,
				});

				const miscStyleProps = useMiscStyleProps({
					bottom,
					display,
					left,
					opacity,
					position,
					right,
					top,
					userSelect,
					visibility,
				});

				const Element = useMemo(() => {
					switch (defalsify(element) ?? 'span') {
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
					<Element {...colorStyleProps} {...fontStyleProps} {...miscStyleProps} ref={ref} {...props}>
						{children}
					</Element>
				);
			}
		)
	);
	Style.displayName = 'Style';
	return Style;
};
