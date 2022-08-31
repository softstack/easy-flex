**Example**

```typescript
import { Col, DeepPartial, EasyFlexProvider, EasyFlexTheme, Text } from 'easy-flex';
import { FC } from 'react';

const theme: DeepPartial<EasyFlexTheme> = {
	color: {
		primaryText: 'blue',
		secondaryText: '#bd3bc2',
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
			<Col color="primaryText" fontSize="m" gap="m" minHeight="100vh" minWidth="100vw" align="center" justify="center">
				<Text color="secondaryText" fontSize="l">
					Example
				</Text>
				<Text>This is an example</Text>
			</Col>
		</EasyFlexProvider>
	);
};
```
