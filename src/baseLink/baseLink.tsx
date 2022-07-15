import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { IAlignSelf, IColor, IDistance } from '../types';
import { useColor, useDistance } from '../utils';

const StyledBaseLink = styled.a<{
	'data-align-self'?: IAlignSelf;
	'data-color'?: string;
	'data-hover-color'?: string;
	'data-margin-bottom'?: string;
	'data-margin-left'?: string;
	'data-margin-right'?: string;
	'data-margin-top'?: string;
}>`
	box-sizing: border-box;
	text-decoration: none;
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

export interface IBaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	alignSelf?: IAlignSelf;
	color?: IColor;
	hoverColor?: IColor;
	margin?: IDistance | number;
	marginBottom?: IDistance | number;
	marginLeft?: IDistance | number;
	marginRight?: IDistance | number;
	marginTop?: IDistance | number;
	marginX?: IDistance | number;
	marginY?: IDistance | number;
	newTab?: boolean;
}

export const BaseLink: FC<IBaseLinkProps> = ({
	alignSelf,
	children,
	color,
	hoverColor,
	margin,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginX,
	marginY,
	newTab = false,
	...props
}) => {
	const processedColor = useColor(color, undefined);

	const processedHoverColor = useColor(hoverColor, undefined);

	const target = useMemo(() => (newTab ? '_blank' : undefined), [newTab]);

	const distance = useDistance({
		margin,
		marginBottom,
		marginLeft,
		marginRight,
		marginTop,
		marginX,
		marginY,
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
