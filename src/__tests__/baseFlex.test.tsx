import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseFlex } from '../baseFlex/baseFlex';

describe('<BaseFlex />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<BaseFlex />);
		expect(result.baseElement).toMatchSnapshot();
	});

	test('should have margin-bottom and margin-top not equal 0px', async () => {
		const result = render(<BaseFlex marginY="m" />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
