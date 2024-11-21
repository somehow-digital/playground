export default {
	'**/*.{js,md,json,yml,yaml}': [
		'prettier --check',
		'cspell --no-progress --no-must-find-files',
	],
};
