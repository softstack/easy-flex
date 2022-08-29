import React, { forwardRef, HTMLAttributes, useMemo } from 'react';
import styled from 'styled-components';
import { AbsoluteSize, Distance, ViewportThreshold } from '../types';
import { getDistance, getViewportThreshold, useDimension, useEasyFlexTheme } from '../utils/utils';

const StyledSpacing = styled.div<{ 'data-height': AbsoluteSize; 'data-width': AbsoluteSize }>`
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

export interface SpacingProps extends HTMLAttributes<HTMLDivElement> {
	/** If true, height and width are flipped if flipping has been enabled. */
	flip?: boolean;
	/** Enables flipping. */
	flipEnabled?: boolean;
	/** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the fallback threshold is used. */
	viewportThreshold?: ViewportThreshold | number;
	/** Component's height. */
	height?: Distance | AbsoluteSize;
	/** Component's width. */
	width?: Distance | AbsoluteSize;
}

export const Spacing = forwardRef<HTMLDivElement, SpacingProps>(
	({ flip, flipEnabled = false, viewportThreshold, height = '0px', width = '0px', ...props }, ref) => {
		const theme = useEasyFlexTheme();
		const { width: displayWidth } = useDimension();

		const processedHeight = useMemo<AbsoluteSize>(
			() =>
				flipEnabled &&
				(flip ||
					(flip === undefined &&
						(viewportThreshold !== undefined
							? displayWidth < getViewportThreshold(theme, viewportThreshold)
							: displayWidth < theme.viewport.fallbackThreshold)))
					? getDistance(theme, width)
					: getDistance(theme, height),
			[displayWidth, flip, flipEnabled, height, theme, viewportThreshold, width]
		);

		const processedWidth = useMemo<AbsoluteSize>(
			() =>
				flipEnabled &&
				(flip ||
					(flip === undefined &&
						(viewportThreshold !== undefined
							? displayWidth < getViewportThreshold(theme, viewportThreshold)
							: displayWidth < theme.viewport.fallbackThreshold)))
					? getDistance(theme, height)
					: getDistance(theme, width),
			[displayWidth, flip, flipEnabled, height, theme, viewportThreshold, width]
		);

		return <StyledSpacing data-height={processedHeight} data-width={processedWidth} ref={ref} {...props} />;
	}
);

Spacing.displayName = 'Spacing';
