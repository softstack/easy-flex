import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import { IDistance } from '../types';
import { getDistance, toPx, useEasyFlexTheme } from '../utils';

const StyledSpacing = styled.div<{ 'data-horizontal': string; 'data-vertical': string }>`
	display: flex;
	box-sizing: border-box;
	background-color: transparent;
	margin: 0;
	padding: 0;
	min-width: ${({ 'data-horizontal': horizontal }) => horizontal};
	width: ${({ 'data-horizontal': horizontal }) => horizontal};
	max-width: ${({ 'data-horizontal': horizontal }) => horizontal};
	min-height: ${({ 'data-vertical': vertical }) => vertical};
	height: ${({ 'data-vertical': vertical }) => vertical};
	max-height: ${({ 'data-vertical': vertical }) => vertical};
`;

export interface ISpacingProps extends HTMLAttributes<HTMLDivElement> {
	flip?: boolean;
	flipDirection?: boolean;
	horizontal?: IDistance | number;
	vertical?: IDistance | number;
}

export const Spacing: FC<ISpacingProps> = ({ flip, flipDirection = false, horizontal = 0, vertical = 0, ...props }) => {
	const theme = useEasyFlexTheme();

	const processedHorizontal = useMemo<string>(
		() =>
			flipDirection && (flip || (flip === undefined && theme.flipDirection))
				? toPx(getDistance(theme, vertical))
				: toPx(getDistance(theme, horizontal)),
		[theme, flip, flipDirection, horizontal, vertical]
	);

	const processedVertical = useMemo<string>(
		() =>
			flipDirection && (flip || (flip === undefined && theme.flipDirection))
				? toPx(getDistance(theme, horizontal))
				: toPx(getDistance(theme, vertical)),
		[theme, flip, flipDirection, horizontal, vertical]
	);

	return <StyledSpacing data-horizontal={processedHorizontal} data-vertical={processedVertical} {...props} />;
};
