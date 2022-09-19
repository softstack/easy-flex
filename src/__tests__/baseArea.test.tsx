import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseArea } from '../baseArea/BaseArea';

describe('<BaseArea />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<BaseArea />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
