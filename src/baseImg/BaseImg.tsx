import { FC, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';
import { IObjectFit } from '../types';

const StyledBaseImg = styled.img<{ 'data-object-fit'?: IObjectFit }>``;

export interface IBaseImgProps extends ImgHTMLAttributes<HTMLImageElement> {
	objectFit?: IObjectFit;
}

export const BaseImg: FC<IBaseImgProps> = ({ objectFit, ...props }) => {
	return <StyledBaseImg data-object-fit={objectFit} {...props} />;
};
