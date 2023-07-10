import React, { forwardRef, HTMLAttributes, memo, useMemo } from 'react';
import styled from 'styled-components';
import { AbsoluteSize, CustomName, Distance, Falsifiable } from '../types';
import { defalsify, getDistance, useEasyFlexTheme } from '../utils/base';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { MiscProps, miscStyle, MiscStyleProps, useMiscStyleProps } from '../utils/misc';

const StyledDiv = styled.div<
	{ 'data-height': AbsoluteSize; 'data-width': AbsoluteSize } & FlexItemStyleProps & MiscStyleProps
>`
	background-color: transparent;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	min-height: ${({ 'data-height': height }) => height};
	height: ${({ 'data-height': height }) => height};
	max-height: ${({ 'data-height': height }) => height};
	min-width: ${({ 'data-width': width }) => width};
	width: ${({ 'data-width': width }) => width};
	max-width: ${({ 'data-width': width }) => width};
	${flexItemStyle}
	${miscStyle}
`;

export interface SpacingProps<CustomDistance extends CustomName>
	extends HTMLAttributes<HTMLDivElement>,
		FlexItemProps,
		MiscProps<CustomDistance> {
	flip?: boolean;
	/** Component's height. */
	height?: Falsifiable<Distance<CustomDistance>>;
	/** Component's width. */
	width?: Falsifiable<Distance<CustomDistance>>;
}

export const createSpacing = <CustomDistance extends CustomName>() => {
	const Spacing = memo(
		forwardRef<HTMLDivElement, SpacingProps<CustomDistance>>(
			(
				{
					alignSelf,
					basis,
					bottom,
					display,
					flex,
					flip,
					grow,
					height,
					left,
					position,
					right,
					shrink,
					top,
					userSelect,
					visibility,
					width,
					...props
				},
				ref
			) => {
				const theme = useEasyFlexTheme();

				const processedHeight = useMemo<AbsoluteSize>(
					() =>
						flip === undefined || flip === false
							? getDistance(theme, defalsify(height) ?? '0px')
							: getDistance(theme, defalsify(width) ?? '0px'),
					[flip, height, theme, width]
				);

				const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

				const miscStyleProps = useMiscStyleProps({
					bottom,
					display: defalsify(display) ?? 'flex',
					left,
					position,
					right,
					top,
					userSelect,
					visibility,
				});

				const processedWidth = useMemo<AbsoluteSize>(
					() =>
						flip === undefined || flip === false
							? getDistance(theme, defalsify(width) ?? '0px')
							: getDistance(theme, defalsify(height) ?? '0px'),
					[flip, height, theme, width]
				);

				return (
					<StyledDiv
						data-height={processedHeight}
						data-width={processedWidth}
						{...flexItemStyleProps}
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
