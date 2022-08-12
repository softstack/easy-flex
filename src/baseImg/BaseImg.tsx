import React, { forwardRef, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { ObjectFit } from '../types';

const StyledBaseImg = styled.img<{ 'data-object-fit'?: ObjectFit }>``;

export interface BaseImgProps extends ImgHTMLAttributes<HTMLImageElement> {
	objectFit?: ObjectFit;
}

export const BaseImg = forwardRef<HTMLImageElement, BaseImgProps>(({ objectFit, ...props }, ref) => {
	return <StyledBaseImg data-object-fit={objectFit} ref={ref} {...props} />;
});

BaseImg.displayName = 'BaseImg';
