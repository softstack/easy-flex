import React, { AnchorHTMLAttributes, forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import { AbsoluteSize, AlignSelf, Color, CssColor, Distance, Height, Size, Width } from '../types';
import { useColor, useDistance, useSize } from '../utils';

const StyledBaseLink = styled.a<{
	'data-align-self'?: AlignSelf;
	'data-color'?: CssColor;
	'data-height'?: Size;
	'data-height-max'?: Size;
	'data-height-min'?: Size;
	'data-hover-color'?: CssColor;
	'data-margin-bottom': AbsoluteSize;
	'data-margin-left': AbsoluteSize;
	'data-margin-right': AbsoluteSize;
	'data-margin-top': AbsoluteSize;
	'data-width'?: Size;
	'data-width-max'?: Size;
	'data-width-min'?: Size;
}>`
	box-sizing: border-box;
	text-decoration: none;
	padding: 0;
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height-max': heightMax }) => heightMax};
	min-height: ${({ 'data-height-min': heightMin }) => heightMin};
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width-max': widthMax }) => widthMax};
	min-width: ${({ 'data-width-min': widthMin }) => widthMin};

	&:hover {
		color: ${({ 'data-hover-color': hoverColor }) => hoverColor};
	}
`;

export interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: AlignSelf;
	/** Component's color. */
	color?: Color;
	/** Sets the component's height to 100% if true. */
	fullHeight?: boolean;
	/** Sets the component's width to 100% if true. */
	fullWidth?: boolean;
	/** Component's height. */
	height?: Height | Size;
	/** Component's hover color. */
	hoverColor?: Color;
	/** Component's margin of all sides. */
	margin?: Distance | AbsoluteSize;
	/** Component's bottom margin. */
	marginBottom?: Distance | AbsoluteSize;
	/** Component's left margin. */
	marginLeft?: Distance | AbsoluteSize;
	/** Component's right margin. */
	marginRight?: Distance | AbsoluteSize;
	/** Component's top margin. */
	marginTop?: Distance | AbsoluteSize;
	/** Component's left and right margin. */
	marginHorizontal?: Distance | AbsoluteSize;
	/** Component's top and bottom margin. */
	marginVertical?: Distance | AbsoluteSize;
	/** Component's maximum height. */
	maxHeight?: Height | Size;
	/** Component's maximum width. */
	maxWidth?: Width | Size;
	/** Component's miniumum height. */
	minHeight?: Height | Size;
	/** Component's minimum width. */
	minWidth?: Width | Size;
	/** If true, the link is opened in a new tab. */
	newTab?: boolean;
	/** Component's width. */
	width?: Width | Size;
}

export const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
	(
		{
			alignSelf,
			children,
			color = 'inherit',
			fullHeight = false,
			fullWidth = false,
			height,
			hoverColor,
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
			newTab = false,
			width,
			...props
		},
		ref
	) => {
		const processedColor = useColor(color, undefined);

		const processedHoverColor = useColor(hoverColor, undefined);

		const target = useMemo<'_blank' | undefined>(() => (newTab ? '_blank' : undefined), [newTab]);

		const distance = useDistance({
			margin,
			marginBottom,
			marginLeft,
			marginRight,
			marginTop,
			marginHorizontal,
			marginVertical,
		});

		const size = useSize({
			fullHeight,
			fullWidth,
			height,
			heightMax: maxHeight,
			heightMin: minHeight,
			width,
			widthMax: maxWidth,
			widthMin: minWidth,
		});

		return (
			<StyledBaseLink
				data-align-self={alignSelf}
				data-color={processedColor}
				data-height={size.height}
				data-height-max={size.heightMax}
				data-height-min={size.heightMin}
				data-hover-color={processedHoverColor}
				data-margin-bottom={distance.margin.bottom}
				data-margin-left={distance.margin.left}
				data-margin-right={distance.margin.right}
				data-margin-top={distance.margin.top}
				data-width={size.width}
				data-width-max={size.widthMax}
				data-width-min={size.widthMin}
				rel="noopener noreferrer"
				target={target}
				ref={ref}
				{...props}
			>
				{children}
			</StyledBaseLink>
		);
	}
);

BaseLink.displayName = 'BaseLink';
