import { render } from '@testing-library/react';
import 'jest-styled-components';
import React from 'react';
import { BaseModal } from '../baseModal/BaseModal';

describe('<BaseModal />', () => {
	test('should have the basic css settings', async () => {
		const result = render(<BaseModal onClose={() => undefined} />);
		expect(result.baseElement).toMatchSnapshot();
	});
});
