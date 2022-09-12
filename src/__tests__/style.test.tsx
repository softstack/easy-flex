import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { Style } from '../style/Style';

describe('<Style />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<Style />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
