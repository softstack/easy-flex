import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseButton } from '../baseButton/BaseButton';

describe('<BaseButton />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<BaseButton />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
