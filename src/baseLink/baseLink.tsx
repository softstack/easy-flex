import React, { AnchorHTMLAttributes, FC, useMemo } from 'react';
import styled from 'styled-components';
import { IAbsoluteSize, IAlignSelf, IColor, ICssColor, IDistance } from '../types';
import { useColor, useDistance } from '../utils';

const StyledBaseLink = styled.a<{
	'data-align-self'?: IAlignSelf;
	'data-color'?: ICssColor;
	'data-hover-color'?: ICssColor;
	'data-margin-bottom': IAbsoluteSize;
	'data-margin-left': IAbsoluteSize;
	'data-margin-right': IAbsoluteSize;
	'data-margin-top': IAbsoluteSize;
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

export interface IBaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: IAlignSelf;
	/** Component's color. */
	color?: IColor;
	/** Component's hover color. */
	hoverColor?: IColor;
	/** Component's margin of all sides. */
	margin?: IDistance | IAbsoluteSize;
	/** Component's bottom margin. */
	marginBottom?: IDistance | IAbsoluteSize;
	/** Component's left margin. */
	marginLeft?: IDistance | IAbsoluteSize;
	/** Component's right margin. */
	marginRight?: IDistance | IAbsoluteSize;
	/** Component's top margin. */
	marginTop?: IDistance | IAbsoluteSize;
	/** Component's left and right margin. */
	marginHorizontal?: IDistance | IAbsoluteSize;
	/** Component's top and bottom margin. */
	marginVertical?: IDistance | IAbsoluteSize;
	/** If true, the link is opened in a new tab. */
	newTab?: boolean;
}

export const BaseLink: FC<IBaseLinkProps> = ({
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
