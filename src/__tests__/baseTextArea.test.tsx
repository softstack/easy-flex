import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseTextArea } from '../baseTextArea/BaseTextArea';

describe('<BaseTextArea />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<BaseTextArea />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
