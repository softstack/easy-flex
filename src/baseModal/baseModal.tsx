import React, { FC, MouseEvent, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Col, IColProps } from '../col/col';
import { useEasyFlexTheme } from '../utils';

const Background = styled.div<{ 'data-background-color': string }>`
	display: flex;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: ${({ 'data-background-color': backgroundColor }) => backgroundColor};
	align-items: center;
	justify-content: center;
`;

const Container = styled(Col)`
	max-height: 100vh;
	max-width: 100vw;
`;

interface IBaseModalProps extends IColProps {
	onClose: () => void;
}

export const BaseModal: FC<IBaseModalProps> = ({ children, onClose, ...props }) => {
	const theme = useEasyFlexTheme();

	const modalRoot = useMemo(() => document.getElementById(theme.modalRootId), [theme]);

	const handlePropagation = useCallback((event: MouseEvent<HTMLDivElement>) => event.stopPropagation(), []);

	if (!modalRoot) {
		return null;
	}

	return createPortal(
		<Background data-background-color={theme.color.modalBackground} onClick={onClose}>
			<Container onClick={handlePropagation} {...props}>
				{children}
			</Container>
		</Background>,
		modalRoot
	);
};
