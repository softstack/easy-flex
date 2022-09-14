import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { Link } from '../link/Link';

describe('<Link />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<Link />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
