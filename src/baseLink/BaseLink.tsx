import React, { AnchorHTMLAttributes, forwardRef, useMemo } from 'react';
import styled from 'styled-components';
import { AlignSelf, Color, CssColor } from '../types';
import { MarginProps, marginStyle, MarginStyleProps, useMarginStyleProps } from '../utils/margin';
import { useColor } from '../utils/utils';

const StyledBaseLink = styled.a<
	{
		'data-align-self'?: AlignSelf;
		'data-color'?: CssColor;
		'data-hover-color'?: CssColor;
	} & MarginStyleProps
>`
	box-sizing: border-box;
	text-decoration: none;
	padding: 0;
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	color: ${({ 'data-color': color }) => color};
	${marginStyle}

	&:hover {
		color: ${({ 'data-hover-color': hoverColor }) => hoverColor};
	}
`;

export interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, MarginProps {
	/** The alignment of the component on the parent's element cross axis. */
	alignSelf?: AlignSelf;
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
		},
		ref
	) => {
		const processedColor = useColor(color, undefined);

		const processedHoverColor = useColor(hoverColor, undefined);

		const target = useMemo<'_blank' | undefined>(() => (newTab ? '_blank' : undefined), [newTab]);

		const marginStyleProps = useMarginStyleProps({
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
