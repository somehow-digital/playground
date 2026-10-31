import { defineConfig } from 'vite-plus';

export default defineConfig({
	staged: {
		'**/*.{js,md,json,yml,yaml}': ['prettier --check', 'cspell --no-progress --no-must-find-files'],
	},
});
