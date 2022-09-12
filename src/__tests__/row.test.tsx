import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { Row } from '../row/Row';

describe('<Row />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<Row />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
