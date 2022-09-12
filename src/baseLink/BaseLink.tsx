import React, { AnchorHTMLAttributes, forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import { Color, CssColor } from '../types';
import { ColorProps, colorStyle, ColorStyleProps, useColor, useColorStyleProps } from '../utils/color';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledBaseLink = styled.a<
	{
		'data-hover-color'?: CssColor;
	} & ColorStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		MarginStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	text-decoration: none;
	padding: 0;
	${colorStyle}
	${flexItemStyle}
	${fontStyle}
	${marginStyle}
	${sizeStyle}

	&:hover {
		color: ${({ 'data-hover-color': hoverColor }) => hoverColor};
	}
`;

export type BaseLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
	ColorProps &
	FlexItemProps &
	FontProps &
	MarginProps &
	SizeProps & {
		/** Component's hover color. */
		hoverColor?: Color;
		/** If true, the link is opened in a new tab. */
		newTab?: boolean;
	};

export const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
	(
		{
			alignSelf,
			backgroundColor,
			basis,
			children,
			color = 'inherit',
			flex,
			fontFamily,
			fontSize,
			fontWeight,
			fullHeight,
			fullWidth,
			grow,
			height,
			hoverColor,
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
			newTab = false,
			shrink,
			underline,
			width,
			...props
		},
		ref
	) => {
		const colorStyleProps = useColorStyleProps({ backgroundColor, color });

		const processedHoverColor = useColor(hoverColor);

		const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

		const fontStyleProps = useFontStyleProps({ fontFamily, fontSize, fontWeight, italic, lineHeight, underline });

		const marginStyleProps = useMarginStyleProps({
			margin,
			marginBottom,
			marginHorizontal,
			marginLeft,
			marginRight,
			marginTop,
			marginVertical,
		});

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

		const newTabProps = useMemo<
			| {
					rel: 'noopener noreferrer';
					target: '_blank';
			  }
			| undefined
		>(
			() =>
				newTab
					? {
							rel: 'noopener noreferrer',
							target: '_blank',
					  }
					: undefined,
			[newTab]
		);

		return (
			<StyledBaseLink
				data-hover-color={processedHoverColor}
				{...colorStyleProps}
				{...flexItemStyleProps}
				{...fontStyleProps}
				{...marginStyleProps}
				{...sizeStyleProps}
				{...newTabProps}
				ref={ref}
				{...props}
			>
				{children}
			</StyledBaseLink>
		);
	}
);

BaseLink.displayName = 'BaseLink';
