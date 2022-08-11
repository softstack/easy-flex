import React, { FC, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ObjectFit } from '../types';

const StyledBaseImg = styled.img<{ 'data-object-fit'?: ObjectFit }>``;

export interface BaseImgProps extends ImgHTMLAttributes<HTMLImageElement> {
	objectFit?: ObjectFit;
}

export const BaseImg: FC<BaseImgProps> = ({ objectFit, ...props }) => {
	return <StyledBaseImg data-object-fit={objectFit} {...props} />;
};
