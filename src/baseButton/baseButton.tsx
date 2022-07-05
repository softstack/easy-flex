import React, { ButtonHTMLAttributes, FC, useMemo } from 'react';
import styled from 'styled-components';
import { IAlignItems, IAlignSelf, IColor, IDistance, IJustifyContent } from '../types';
import { useColor, useDistance } from '../utils';

const StyledBaseButton = styled.button<{
	'data-align'?: IAlignItems;
	'data-align-self'?: IAlignSelf;
	'data-background-color': string;
	'data-color'?: string;
	'data-full-width'?: '100%';
	'data-grow'?: number;
	'data-justify'?: IJustifyContent;
	'data-margin-bottom': string;
	'data-margin-left': string;
	'data-margin-right': string;
	'data-margin-top': string;
	'data-padding-bottom': string;
	'data-padding-left': string;
	'data-padding-right': string;
	'data-padding-top': string;
	'data-shrink'?: number;
}>`
	display: flex;
	box-sizing: border-box;
	flex-direction: row;
	border: none;
	cursor: pointer;
	outline: none;
	align-items: ${({ 'data-align': align }) => align};
	align-self: ${({ 'data-align-self': alignSelf }) => alignSelf};
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	color: ${({ 'data-color': color }) => color};
	width: ${({ 'data-full-width': fullWidth }) => fullWidth};
	flex-grow: ${({ 'data-grow': grow }) => grow};
	justify-content: ${({ 'data-justify': justify }) => justify};
	margin-bottom: ${({ 'data-margin-bottom': marginBottom }) => marginBottom};
	margin-left: ${({ 'data-margin-left': marginLeft }) => marginLeft};
	margin-right: ${({ 'data-margin-right': marginRight }) => marginRight};
	margin-top: ${({ 'data-margin-top': marginTop }) => marginTop};
	padding-bottom: ${({ 'data-padding-bottom': paddingBottom }) => paddingBottom};
	padding-left: ${({ 'data-padding-left': paddingLeft }) => paddingLeft};
	padding-right: ${({ 'data-padding-right': paddingRight }) => paddingRight};
	padding-top: ${({ 'data-padding-top': paddingTop }) => paddingTop};
	flex-shrink: ${({ 'data-shrink': shrink }) => shrink};
`;

export interface IBaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	align?: IAlignItems;
	alignSelf?: IAlignSelf;
	backgroundColor?: IColor;
	color?: IColor;
	fullWidth?: boolean;
	grow?: number;
	justify?: IJustifyContent;
	marginBottom?: IDistance | number;
	marginLeft?: IDistance | number;
	marginRight?: IDistance | number;
	marginTop?: IDistance | number;
	marginX?: IDistance | number;
	marginY?: IDistance | number;
	paddingBottom?: IDistance | number;
	paddingLeft?: IDistance | number;
	paddingRight?: IDistance | number;
	paddingTop?: IDistance | number;
	paddingX?: IDistance | number;
	paddingY?: IDistance | number;
	shrink?: number;
}

export type IExternalBaseButtonProps = Omit<
	IBaseButtonProps,
	| 'align'
	| 'backgroundColor'
	| 'color'
	| 'justify'
	| 'paddingBottom'
	| 'paddingLeft'
	| 'paddingRight'
	| 'paddingTop'
	| 'paddingX'
	| 'paddingY'
>;

export const BaseButton: FC<IBaseButtonProps> = ({
	align,
	alignSelf,
	backgroundColor,
	children,
	color,
	fullWidth = false,
	grow,
	justify,
	marginBottom,
	marginLeft,
	marginRight,
	marginTop,
	marginX,
	marginY,
	paddingBottom,
	paddingLeft,
	paddingRight,
	paddingTop,
	paddingX,
	paddingY,
	shrink,
	...props
}) => {
	const processedBackgroundColor = useColor(backgroundColor, 'transparent');

	const processedColor = useColor(color, undefined);

	const processedFullWidth = useMemo<'100%' | undefined>(() => (fullWidth ? '100%' : undefined), [fullWidth]);

	const distance = useDistance({
		marginBottom,
		marginLeft,
		marginRight,
		marginTop,
		marginX,
		marginY,
		paddingBottom,
		paddingLeft,
		paddingRight,
		paddingTop,
		paddingX,
		paddingY,
	});

	return (
		<StyledBaseButton
			data-align={align}
			data-align-self={alignSelf}
			data-background-color={processedBackgroundColor}
			data-color={processedColor}
			data-full-width={processedFullWidth}
			data-grow={grow}
			data-justify={justify}
			data-margin-bottom={distance.marginBottom}
			data-margin-left={distance.marginLeft}
			data-margin-right={distance.marginRight}
			data-margin-top={distance.marginTop}
			data-padding-bottom={distance.paddingBottom}
			data-padding-left={distance.paddingLeft}
			data-padding-right={distance.paddingRight}
			data-padding-top={distance.paddingTop}
			data-shrink={shrink}
			{...props}
		>
			{children}
		</StyledBaseButton>
	);
};
