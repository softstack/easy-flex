import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseLink } from '../baseLink/BaseLink';

describe('<BaseLink />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<BaseLink />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
