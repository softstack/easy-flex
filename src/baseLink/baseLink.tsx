import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { IAlignSelf, IColor, IDistance } from '../types';
import { useColor, useDistance } from '../utils';

const StyledBaseLink = styled.a<{
	'data-align-self'?: IAlignSelf;
	'data-color'?: string;
	'data-margin-bottom'?: string;
	'data-margin-left'?: string;
	'data-margin-right'?: string;
	'data-margin-top'?: string;
}>`
	display: flex;
	box-sizing: border-box;
	text-decoration: none;
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
`;

export interface IBaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	alignSelf?: IAlignSelf;
	color?: IColor;
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

	const target = useMemo(() => (newTab ? '_blank' : undefined), [newTab]);

	const { margin } = useDistance({
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
			data-margin-bottom={margin.bottom}
			data-margin-left={margin.left}
			data-margin-right={margin.right}
			data-margin-top={margin.top}
			rel="noopener noreferrer"
			target={target}
			{...props}
		>
			{children}
		</StyledBaseLink>
	);
};
