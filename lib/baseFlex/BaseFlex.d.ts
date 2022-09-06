import React, { HTMLAttributes } from 'react';
import { BaseFlexElement } from '../types';
import { BorderProps } from '../utils/border';
import { ColorProps } from '../utils/color';
import { DistanceProps } from '../utils/distance';
import { FlexContainerProps } from '../utils/flexContainer';
import { FlexItemProps } from '../utils/flexItem';
import { FontProps } from '../utils/font';
import { OverflowProps } from '../utils/overflow';
import { SizeProps } from '../utils/size';
export declare type BaseFlexProps = HTMLAttributes<HTMLDivElement> & BorderProps & ColorProps & FlexContainerProps & FlexItemProps & FontProps & DistanceProps & OverflowProps & SizeProps & {
    /** Component's html tag. */
    element?: BaseFlexElement;
};
export declare const BaseFlex: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & BorderProps & ColorProps & FlexContainerProps & FlexItemProps & FontProps & import("..").MarginProps & import("..").PaddingProps & OverflowProps & SizeProps & {
    /** Component's html tag. */
    element?: BaseFlexElement | undefined;
} & React.RefAttributes<HTMLDivElement>>;
