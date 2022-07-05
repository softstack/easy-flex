import React, { FC, HTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import { IDistance, IFlipThreshold } from '../types';
import { getDistance, getFlipThreshold, toPx, useDimension, useEasyFlexTheme } from '../utils';

const StyledSpacing = styled.div<{ 'data-height': string; 'data-width': string }>`
	display: flex;
	box-sizing: border-box;
	background-color: transparent;
	margin: 0;
	padding: 0;
	min-height: ${({ 'data-height': height }) => height};
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height': height }) => height};
	min-width: ${({ 'data-width': width }) => width};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width': width }) => width};
`;

export interface ISpacingProps extends HTMLAttributes<HTMLDivElement> {
	flip?: boolean;
	flipDirection?: boolean;
	flipThreshold?: IFlipThreshold;
	height?: IDistance | number;
	width?: IDistance | number;
}

export const Spacing: FC<ISpacingProps> = ({
	flip,
	flipDirection = false,
	flipThreshold,
	height = 0,
	width = 0,
	...props
}) => {
	const theme = useEasyFlexTheme();
	const { width: displayWidth } = useDimension();

	const processedHeight = useMemo<string>(
		() =>
			flipDirection &&
			(flip ||
				(flip === undefined &&
					(flipThreshold
						? displayWidth < getFlipThreshold(theme, flipThreshold)
						: displayWidth < theme.fallbackFlipThreshold)))
				? toPx(getDistance(theme, width))
				: toPx(getDistance(theme, height)),
		[displayWidth, flip, flipDirection, flipThreshold, height, theme, width]
	);

	const processedWidth = useMemo<string>(
		() =>
			flipDirection &&
			(flip ||
				(flip === undefined &&
					(flipThreshold
						? displayWidth < getFlipThreshold(theme, flipThreshold)
						: displayWidth < theme.fallbackFlipThreshold)))
				? toPx(getDistance(theme, height))
				: toPx(getDistance(theme, width)),
		[displayWidth, flip, flipDirection, flipThreshold, height, theme, width]
	);

	return <StyledSpacing data-height={processedHeight} data-width={processedWidth} {...props} />;
};
