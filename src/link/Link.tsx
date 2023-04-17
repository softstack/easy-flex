import React, { AnchorHTMLAttributes, forwardRef, memo, useMemo } from 'react';
import styled from 'styled-components';
import { Color, CssColor, CustomName, Falsifiable } from '../types';
import { defalsify } from '../utils/base';
import { ColorProps, colorStyle, ColorStyleProps, useColor, useColorStyleProps } from '../utils/color';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { FontProps, fontStyle, FontStyleProps, useFontStyleProps } from '../utils/font';
import { GridItemProps, gridItemStyle, GridItemStyleProps, useGridItemStyleProps } from '../utils/gridItem';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledA = styled.a<
	{
		'data-hover-color': CssColor | undefined;
	} & ColorStyleProps &
		FlexItemStyleProps &
		FontStyleProps &
		GridItemStyleProps &
		MarginStyleProps &
		MiscStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	padding: 0;
	text-decoration: none;
	${colorStyle}
	${flexItemStyle}
	${fontStyle}
	${gridItemStyle}
	${marginStyle}
	${miscStyle}
	${sizeStyle}

	&:hover {
		color: ${({ 'data-hover-color': hoverColor }) => hoverColor};
	}
`;

export interface LinkProps<
	CustomAspectRatio extends CustomName,
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
		GridItemProps,
		MarginProps<CustomDistance>,
		MiscProps,
		SizeProps<CustomAspectRatio, CustomHeight, CustomWidth> {
	/** Component's hover color. */
	hoverColor?: Falsifiable<Color<CustomColor>>;
	/** If true, the link is opened in a new tab. */
	newTab?: boolean;
}

export const createLink = <
	CustomAspectRatio extends CustomName,
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
				CustomAspectRatio,
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
					aspectRatio,
					backgroundColor,
					basis,
					bottom,
					children,
					color,
					displayNone,
					flex,
					fontFamily,
					fontSize,
					fontWeight,
					grow,
					height,
					hoverColor,
					italic,
					justifySelf,
					left,
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
					position,
					right,
					shrink,
					top,
					underline,
					userSelect,
					visibility,
					whiteSpace,
					width,
					wordBreak,
					...props
				},
				ref
			) => {
				const colorStyleProps = useColorStyleProps({ backgroundColor, color: defalsify(color) ?? 'inherit' });

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

				const gridItemStyleProps = useGridItemStyleProps({ justifySelf });

				const marginStyleProps = useMarginStyleProps({
					margin,
					marginBottom,
					marginHorizontal,
					marginLeft,
					marginRight,
					marginTop,
					marginVertical,
				});

				const miscStyleProps = useMiscStyleProps({
					bottom,
					displayNone,
					left,
					opacity,
					position,
					right,
					top,
					userSelect,
					visibility,
				});

				const sizeStyleProps = useSizeStyleProps({
					aspectRatio,
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
						{...gridItemStyleProps}
						{...marginStyleProps}
						{...miscStyleProps}
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
