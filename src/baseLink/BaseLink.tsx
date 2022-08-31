import React, { AnchorHTMLAttributes, forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import { Color, CssColor } from '../types';
import { useColor } from '../utils/base';
import { FlexItemProps, flexItemStyle, FlexItemStyleProps, useFlexItemStyleProps } from '../utils/flexItem';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';

const StyledBaseLink = styled.a<
	{
		'data-color'?: CssColor;
		'data-hover-color'?: CssColor;
	} & FlexItemStyleProps &
		MarginStyleProps
>`
	box-sizing: border-box;
	text-decoration: none;
	padding: 0;
	color: ${({ 'data-color': color }) => color};
	${flexItemStyle}
	${marginStyle}

	&:hover {
		color: ${({ 'data-hover-color': hoverColor }) => hoverColor};
	}
`;

export interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, FlexItemProps, MarginProps {
	/** Component's color. */
	color?: Color;
	/** Component's hover color. */
	hoverColor?: Color;
	/** If true, the link is opened in a new tab. */
	newTab?: boolean;
}

export const BaseLink = forwardRef<HTMLAnchorElement, BaseLinkProps>(
	(
		{
			alignSelf,
			basis,
			children,
			color = 'inherit',
			flex,
			grow,
			hoverColor,
			margin,
			marginBottom,
			marginHorizontal,
			marginLeft,
			marginRight,
			marginTop,
			marginVertical,
			newTab = false,
			shrink,
			...props
		},
		ref
	) => {
		const processedColor = useColor(color, undefined);

		const processedHoverColor = useColor(hoverColor, undefined);

		const target = useMemo<'_blank' | undefined>(() => (newTab ? '_blank' : undefined), [newTab]);

		const flexItemStyleProps = useFlexItemStyleProps({ alignSelf, basis, flex, grow, shrink });

		const marginStyleProps = useMarginStyleProps({
			margin,
			marginBottom,
			marginHorizontal,
			marginLeft,
			marginRight,
			marginTop,
			marginVertical,
		});

		return (
			<StyledBaseLink
				data-color={processedColor}
				data-hover-color={processedHoverColor}
				{...flexItemStyleProps}
				{...marginStyleProps}
				rel="noopener noreferrer"
				target={target}
				ref={ref}
				{...props}
			>
				{children}
			</StyledBaseLink>
		);
	}
);

BaseLink.displayName = 'BaseLink';
