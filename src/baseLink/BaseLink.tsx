import React, { AnchorHTMLAttributes, FC, useMemo } from 'react';
import styled from 'styled-components';
import { AbsoluteSize, AlignSelf, Color, CssColor, Distance } from '../types';
import { useColor, useDistance } from '../utils';

const StyledBaseLink = styled.a<{
	'data-align-self'?: AlignSelf;
	'data-color'?: CssColor;
	'data-hover-color'?: CssColor;
	'data-margin-bottom': AbsoluteSize;
	'data-margin-left': AbsoluteSize;
	'data-margin-right': AbsoluteSize;
	'data-margin-top': AbsoluteSize;
}>`
	box-sizing: border-box;
	text-decoration: none;
	padding: 0;
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};

	&:hover {
		color: ${({ 'data-hover-color': hoverColor }) => hoverColor};
	}
`;

export interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: AlignSelf;
	/** Component's color. */
	color?: Color;
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
	/** If true, the link is opened in a new tab. */
	newTab?: boolean;
}

export const BaseLink: FC<BaseLinkProps> = ({
	alignSelf,
	children,
	color = 'inherit',
	hoverColor,
	margin,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginHorizontal,
	marginVertical,
	newTab = false,
	...props
}) => {
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

	return (
		<StyledBaseLink
			data-align-self={alignSelf}
			data-color={processedColor}
			data-hover-color={processedHoverColor}
			data-margin-bottom={distance.margin.bottom}
			data-margin-left={distance.margin.left}
			data-margin-right={distance.margin.right}
			data-margin-top={distance.margin.top}
			rel="noopener noreferrer"
			target={target}
			{...props}
		>
			{children}
		</StyledBaseLink>
	);
};
