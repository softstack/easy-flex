import React, { forwardRef, ImgHTMLAttributes, memo } from 'react';
import styled from 'styled-components';
import { CustomName, Falsifiable, ObjectFit } from '../types';
import { BorderProps, borderStyle, BorderStyleProps, useBorderStyleProps } from '../utils/border';
import { ColorProps, colorStyle, ColorStyleProps, useColorStyleProps } from '../utils/color';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { GridItemProps, gridItemStyle, GridItemStyleProps, useGridItemStyleProps } from '../utils/gridItem';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';
import { SizeProps, sizeStyle, SizeStyleProps, useSizeStyleProps } from '../utils/size';

const StyledImg = styled.img<
	{
		'data-object-fit': Falsifiable<ObjectFit> | undefined;
	} & BorderStyleProps &
		ColorStyleProps &
		FlexItemStyleProps &
		GridItemStyleProps &
		MarginStyleProps &
		MiscStyleProps &
		SizeStyleProps
>`
	box-sizing: border-box;
	object-fit: ${({ 'data-object-fit': objectFit }) => objectFit};
	${borderStyle}
	${colorStyle}
	${flexItemStyle}
	${gridItemStyle}
	${marginStyle}
	${miscStyle}
	${sizeStyle}
`;

export interface ImgProps<
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
> extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'color' | 'height' | 'width'>,
		BorderProps<CustomBorderRadius, CustomBorderWidth, CustomColor>,
		ColorProps<CustomColor>,
		FlexItemProps,
		GridItemProps,
		MarginProps<CustomDistance>,
		MiscProps<CustomDistance>,
		SizeProps<CustomAspectRatio, CustomHeight, CustomWidth> {
	objectFit?: Falsifiable<ObjectFit>;
}

export const createImg = <
	CustomAspectRatio extends CustomName,
	CustomBorderRadius extends CustomName,
	CustomBorderWidth extends CustomName,
	CustomColor extends CustomName,
	CustomDistance extends CustomName,
	CustomHeight extends CustomName,
	CustomWidth extends CustomName
>() => {
	const Img = memo(
		forwardRef<
			HTMLImageElement,
			ImgProps<
				CustomAspectRatio,
				CustomBorderRadius,
				CustomBorderWidth,
				CustomColor,
				CustomDistance,
				CustomHeight,
				CustomWidth
			>
		>(
			(
				{
					alignSelf,
					aspectRatio,
					backgroundColor,
					basis,
					borderColor,
					borderRadius,
					borderStyle,
					borderWidth,
					bottom,
					color,
					display,
					flex,
					grow,
					height,
					justifySelf,
					left,
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
					objectFit,
					opacity,
					position,
					right,
					shrink,
					top,
					userSelect,
					visibility,
					width,
					zIndex,
					...props
				},
				ref
			) => {
				const borderStyleProps = useBorderStyleProps({ borderColor, borderRadius, borderStyle, borderWidth });

				const colorStyleProps = useColorStyleProps({ backgroundColor, color });

				const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

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
					display,
					left,
					opacity,
					position,
					right,
					top,
					userSelect,
					visibility,
					zIndex,
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

				return (
					<StyledImg
						data-object-fit={objectFit}
						{...borderStyleProps}
						{...colorStyleProps}
						{...flexItemStyleProps}
						{...gridItemStyleProps}
						{...marginStyleProps}
						{...miscStyleProps}
						{...sizeStyleProps}
						ref={ref}
						{...props}
					/>
				);
			}
		)
	);
	Img.displayName = 'Img';
	return Img;
};
