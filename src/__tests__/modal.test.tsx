import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { Modal } from '../modal/Modal';

describe('<Modal />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<Modal onClose={() => undefined} />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
