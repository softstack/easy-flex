import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { Text } from '../text/Text';

describe('<Text />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<Text />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
