import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { Img } from '../img/Img';

describe('<Img />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<Img />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
