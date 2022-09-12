import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { Spacing } from '../spacing/Spacing';

describe('<Spacing />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<Spacing />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
