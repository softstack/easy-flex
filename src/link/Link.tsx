import React, { AnchorHTMLAttributes, forwardRef, memo, useMemo } from 'react';
import styled from 'styled-components';
import { Color, CssColor, CustomName, Falsifiable } from '../types';
import { ColorProps, colorStyle, ColorStyleProps, useColor, useColorStyleProps } from '../utils/color';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledA = styled.a<
	{
		'data-hover-color': CssColor | undefined;
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

export interface LinkProps<
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomWidth extends CustomName
> extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'>,
		ColorProps<CustomColor>,
		FlexItemProps,
		FontProps<CustomColor, CustomFontFamily, CustomFontSize, CustomFontWeight, CustomLineHeight>,
		MarginProps<CustomDistance>,
		SizeProps<CustomHeight, CustomWidth> {
	/** Component's hover color. */
	hoverColor?: Falsifiable<Color<CustomColor>>;
	/** If true, the link is opened in a new tab. */
	newTab?: boolean;
}

export const createLink = <
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomFontFamily extends CustomName,
	CustomFontSize extends CustomName,
	CustomFontWeight extends CustomName,
	CustomHeight extends CustomName,
	CustomLineHeight extends CustomName,
	CustomWidth extends CustomName
>() => {
	const Link = memo(
		forwardRef<
			HTMLAnchorElement,
			LinkProps<
				CustomColor,
				CustomDistance,
				CustomFontFamily,
				CustomFontSize,
				CustomFontWeight,
				CustomHeight,
				CustomLineHeight,
				CustomWidth
			>
		>(
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
					opacity,
					shrink,
					underline,
					whiteSpace,
					width,
					wordBreak,
					...props
				},
				ref
			) => {
				const colorStyleProps = useColorStyleProps({ backgroundColor, color, opacity });

				const processedHoverColor = useColor(hoverColor);

				const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

				const fontStyleProps = useFontStyleProps({
					fontFamily,
					fontSize,
					fontWeight,
					italic,
					lineHeight,
					underline,
					whiteSpace,
					wordBreak,
				});

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
					<StyledA
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
					</StyledA>
				);
			}
		)
	);
	Link.displayName = 'Link';
	return Link;
};
