import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseImg } from '../baseImg/BaseImg';

describe('<BaseImg />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<BaseImg />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
