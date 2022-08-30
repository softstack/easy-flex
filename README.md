**Example**

```typescript
import { Col, DeepPartial, EasyFlexProvider, EasyFlexTheme, Text } from 'easy-flex';
import { FC } from 'react';

const theme: DeepPartial<EasyFlexTheme> = {
	color: {
		primaryText: 'blue',
	},
	distance: { m: '20px', l: '40px' },
	font: {
		size: {
			m: '12px',
			l: '20px',
		},
	},
};

export const App: FC = () => {
	return (
		<EasyFlexProvider theme={theme}>
			<Col fontSize="m" gap="m" minHeight="100vh" minWidth="100vw" align="center" justify="center">
				<Text fontSize="l">Example</Text>
				<Text>This is an example</Text>
			</Col>
		</EasyFlexProvider>
	);
};
```
