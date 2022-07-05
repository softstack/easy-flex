import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseFlex } from '../baseFlex/baseFlex';

describe('<BaseFlex />', () => {
	test('should have the basic css settings', async () => {
		const foo = render(<BaseFlex />);
		expect(foo.baseElement).toMatchSnapshot();
	});

	test('should have margin-bottom and margin-top not equal 0px', async () => {
		const foo = render(<BaseFlex marginY="m" />);
		expect(foo.baseElement).toMatchSnapshot();
	});
});
