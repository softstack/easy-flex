import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { TextAlign, TextElement, WordBreak } from '../types';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { DistanceProps, distanceStyle, DistanceStyleProps, useDistanceStyleProps } from '../utils/distance';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { OverflowProps, overflowStyle, OverflowStyleProps, useOverflowStyleProps } from '../utils/overflow';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const style = css<
	{
		'data-align'?: TextAlign;
		'data-word-break'?: WordBreak;
	} & BorderStyleProps &
		ColorStyleProps &
		DistanceStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		OverflowStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	text-align: ${({ 'data-align': align }) => align};
	word-break: ${({ 'data-word-break': wordBreak }) => wordBreak};
	${borderStyle}
	${colorStyle}
	${distanceStyle}
	${flexItemStyle}
	${fontStyle}
	${overflowStyle}
	${sizeStyle}
`;

const StyledH1 = styled.h1`
	${style}
`;

const StyledH2 = styled.h2`
	${style}
`;

const StyledH3 = styled.h3`
	${style}
`;

const StyledH4 = styled.h4`
	${style}
`;

const StyledH5 = styled.h5`
	${style}
`;

const StyledH6 = styled.h6`
	${style}
`;

const StyledP = styled.p`
	${style}
`;

export interface TextProps
	extends Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>,
		BorderProps,
		ColorProps,
		DistanceProps,
		FlexItemProps,
		FontProps,
		OverflowProps,
		SizeProps {
	/** Component's text alignment. */
	align?: TextAlign;
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
			backgroundColor,
			basis,
			borderColor,
			borderRadius,
			borderStyle,
			borderWidth,
			children,
			color,
			element = 'p',
			flex,
			fontFamily,
			fontSize,
			fontWeight,
			fullHeight,
			fullWidth,
			grow,
			height,
			italic,
			lineHeight,
			margin,
			marginBottom,
			marginHorizontal,
			marginLeft,
			marginRight,
			marginTop,
			marginVertical,
			maxHeight,
			maxWidth,
			minHeight,
			minWidth,
			overflow,
			overflowX,
			overflowY,
			padding,
			paddingBottom,
			paddingHorizontal,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingVertical,
			round,
			shrink,
			underline,
			width,
			wordBreak,
			...props
		},
		ref
	) => {
		const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth, round });

		const colorStyleProps = useColorStyleProps({ backgroundColor, color });

		const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight, underline });

		const distanceStyleProps = useDistanceStyleProps({
			margin,
			marginBottom,
			marginHorizontal,
			marginLeft,
			marginRight,
			marginTop,
			marginVertical,
			padding,
			paddingBottom,
			paddingHorizontal,
			paddingLeft,
			paddingRight,
			paddingTop,
			paddingVertical,
		});

		const overflowStyleProps = useOverflowStyleProps({ overflow, overflowX, overflowY });

		const sizeStyleProps = useSizeStyleProps({
			fullHeight,
			fullWidth,
			height,
			maxHeight,
			maxWidth,
			minHeight,
			minWidth,
			width,
		});

		const Element = useMemo(() => {
			switch (element) {
				case 'h1':
					return StyledH1;
				case 'h2':
					return StyledH2;
				case 'h3':
					return StyledH3;
				case 'h4':
					return StyledH4;
				case 'h5':
					return StyledH5;
				case 'h6':
					return StyledH6;
				case 'p':
					return StyledP;
			}
		}, [element]);

		return (
			<Element
				data-align={align}
				data-word-break={wordBreak}
				{...borderStyleProps}
				{...colorStyleProps}
				{...distanceStyleProps}
				{...flexItemStyleProps}
				{...fontStyleProps}
				{...overflowStyleProps}
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
