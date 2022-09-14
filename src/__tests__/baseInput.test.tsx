import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseInput } from '../baseInput/BaseInput';

describe('<BaseInput />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<BaseInput />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
