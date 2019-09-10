module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	extends: ['eslint:recommended', 'plugin:ember/recommended', 'plugin:prettier/recommended'],
	env: {
		browser: true
	},
	overrides: [
		// node files
		{
			files: [
				'.eslintrc.js',
				'.template-lintrc.js',
				'ember-cli-build.js',
				'testem.js',
				'blueprints/*/index.js',
				'config/**/*.js',
				'lib/*/index.js',
				'server/**/*.js'
			],
			parserOptions: {
				sourceType: 'script'
			},
			env: {
				browser: false,
				node: true
			},
			plugins: ['node', 'prettier'],
			rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
				// add your custom rules and overrides for node files here

				// this can be removed once the following is fixed
				// https://github.com/mysticatea/eslint-plugin-node/issues/77
				'node/no-unpublished-require': 'off',
				'prettier/prettier': 'error',
				'no-console': [
					1,
					{
						allow: ['warn', 'error']
					}
				],
				'comma-dangle': [2, 'only-multiline'],
				semi: [2, 'always'],
				'no-extra-semi': 2,
				'space-before-function-paren': 'off',
				quotes: [2, 'single', 'avoid-escape']
			})
		}
	]
};
