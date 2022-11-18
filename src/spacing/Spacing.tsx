import React, { forwardRef, HTMLAttributes, memo, useMemo } from 'react';
import styled from 'styled-components';
import { AbsoluteSize, CustomName, Distance, Falsifiable, ViewportThreshold } from '../types';
import { defalsify, getDistance, getViewportThreshold, useDimension, useEasyFlexTheme } from '../utils/base';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';

const StyledDiv = styled.div<{ 'data-height': AbsoluteSize; 'data-width': AbsoluteSize } & MiscStyleProps>`
	box-sizing: border-box;
	display: flex;
	background-color: transparent;
	margin: 0;
	padding: 0;
	min-height: ${({ 'data-height': height }) => height};
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height': height }) => height};
	min-width: ${({ 'data-width': width }) => width};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width': width }) => width};
	${miscStyle}
`;

export interface SpacingProps<CustomDistance extends CustomName, CustomViewportThreshold extends CustomName>
	extends HTMLAttributes<HTMLDivElement>,
		MiscProps {
	/** If true, height and width are flipped if flipping has been enabled. */
	flip?: boolean;
	/** Enables flipping. */
	flipEnabled?: boolean;
	/** Sets the viewport threshold. The content will be flipped if the viewport's width is smaller than the threshold. If no threshold is set, the default threshold is used. */
	viewport?: Falsifiable<ViewportThreshold<CustomViewportThreshold>>;
	/** Component's height. */
	height?: Falsifiable<Distance<CustomDistance>>;
	/** Component's width. */
	width?: Falsifiable<Distance<CustomDistance>>;
}

export const createSpacing = <CustomDistance extends CustomName, CustomViewportThreshold extends CustomName>() => {
	const Spacing = memo(
		forwardRef<HTMLDivElement, SpacingProps<CustomDistance, CustomViewportThreshold>>(
			({ displayNone, flip, flipEnabled = false, viewport, height, visibility, width, ...props }, ref) => {
				const theme = useEasyFlexTheme();
				const { width: displayWidth } = useDimension();

				const processedHeight = useMemo<AbsoluteSize>(
					() =>
						flipEnabled &&
						(flip ||
							(flip === undefined &&
								(viewport !== false && viewport !== undefined
									? displayWidth < getViewportThreshold(theme, viewport)
									: displayWidth < theme.viewport.defaultThreshold)))
							? getDistance(theme, defalsify(width) ?? '0px')
							: getDistance(theme, defalsify(height) ?? '0px'),
					[displayWidth, flip, flipEnabled, height, theme, viewport, width]
				);

				const miscStyleProps = useMiscStyleProps({ displayNone, visibility });

				const processedWidth = useMemo<AbsoluteSize>(
					() =>
						flipEnabled &&
						(flip ||
							(flip === undefined &&
								(viewport !== false && viewport !== undefined
									? displayWidth < getViewportThreshold(theme, viewport)
									: displayWidth < theme.viewport.defaultThreshold)))
							? getDistance(theme, defalsify(height) ?? '0px')
							: getDistance(theme, defalsify(width) ?? '0px'),
					[displayWidth, flip, flipEnabled, height, theme, viewport, width]
				);

				return (
					<StyledDiv
						data-height={processedHeight}
						data-width={processedWidth}
						{...miscStyleProps}
						ref={ref}
						{...props}
					/>
				);
			}
		)
	);
	Spacing.displayName = 'Spacing';
	return Spacing;
};
