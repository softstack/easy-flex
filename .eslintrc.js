module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
	],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1, offsetTernaryExpressions: true }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		'no-mixed-spaces-and-tabs': 'off',
	},
};
