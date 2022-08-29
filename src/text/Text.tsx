import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { AlignSelf, Color, CssColor, Size, TextAlign, TextElement, WordBreak } from '../types';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';
import { useColor } from '../utils/utils';

const style = css<
	{
		'data-align'?: TextAlign;
		'data-align-self'?: AlignSelf;
		'data-color'?: CssColor;
		'data-height'?: Size;
		'data-height-max'?: Size;
		'data-height-min'?: Size;
		'data-width'?: Size;
		'data-width-max'?: Size;
		'data-width-min'?: Size;
		'data-word-break'?: WordBreak;
	} & DistanceStyleProps &
		FontStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	text-align: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	word-break: ${({ 'data-word-break': wordBreak }) => wordBreak};
	${distanceStyle}
	${fontStyle}
	${sizeStyle}
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

export interface TextProps extends HTMLAttributes<HTMLParagraphElement>, DistanceProps, FontProps, SizeProps {
	/** Component's text alignment. */
	align?: TextAlign;
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: AlignSelf;
	/** Component's color */
	color?: Color;
	/** Component's html tag. */
	element?: TextElement;
	/** Sets whether line breaks appear wherever the text would otherwise oeverflow the component's content box. */
	wordBreak?: WordBreak;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
	(
		{
			align,
			alignSelf,
			children,
			color,
			element = 'p',
			fontFamily,
			fontSize,
			fontWeight,
			fullHeight,
			fullWidth,
			height,
			italic,
			lineHeight,
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
		const processedColor = useColor(color, undefined);

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight });

		const distanceStyleProps = useDistanceStyleProps({
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

		const sizeStyleProps = useSizeStyleProps({
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
				data-word-break={wordBreak}
				{...distanceStyleProps}
				{...fontStyleProps}
				{...sizeStyleProps}
				ref={ref}
				{...props}
			>
				{children}
			</Element>
		);
	}
);

Text.displayName = 'Text';
