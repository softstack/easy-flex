import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseGrid } from '../baseGrid/BaseGrid';

describe('<BaseGrid />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<BaseGrid />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
