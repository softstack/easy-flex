import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import { IAlignSelf, IColor, IDistance } from '../types';
import { getColor, getDistance, toPx, useEasyFlexTheme } from '../utils';

const StyledBaseLink = styled.a<{
	'data-align-self'?: IAlignSelf;
	'data-color'?: string;
	'data-horizontal-margin': string;
	'data-vertical-margin': string;
}>`
	box-sizing: border-box;
	text-decoration: none;
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	margin-left: ${({ 'data-horizontal-margin': horizontalMargin }) => horizontalMargin};
	margin-right: ${({ 'data-horizontal-margin': horizontalMargin }) => horizontalMargin};
	margin-top: ${({ 'data-vertical-margin': verticalMargin }) => verticalMargin};
	margin-bottom: ${({ 'data-vertical-margin': verticalMargin }) => verticalMargin};
`;

export interface IBaseLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	alignSelf?: IAlignSelf;
	color?: IColor;
	horizontalMargin?: IDistance | number;
	newTab?: boolean;
	verticalMargin?: IDistance | number;
}

export const BaseLink: FC<IBaseLinkProps> = ({
	alignSelf,
	children,
	color,
	horizontalMargin = 0,
	newTab,
	verticalMargin = 0,
	...props
}) => {
	const theme = useEasyFlexTheme();

	const processedColor = useMemo<string | undefined>(
		() => (color === undefined ? undefined : getColor(theme, color)),
		[theme, color]
	);

	const processedHorizontalMargin = useMemo<string>(
		() => toPx(getDistance(theme, horizontalMargin)),
		[theme, horizontalMargin]
	);

	const target = useMemo(() => (newTab ? '_blank' : undefined), [newTab]);

	const processedVerticalMargin = useMemo<string>(
		() => toPx(getDistance(theme, verticalMargin)),
		[theme, verticalMargin]
	);

	return (
		<StyledBaseLink
			data-align-self={alignSelf}
			data-color={processedColor}
			data-horizontal-margin={processedHorizontalMargin}
			data-vertical-margin={processedVerticalMargin}
			rel="noopener noreferrer"
			target={target}
			{...props}
		>
			{children}
		</StyledBaseLink>
	);
};
