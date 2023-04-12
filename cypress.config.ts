import { defineConfig } from 'cypress';

const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

export default defineConfig({
	viewportWidth: 1280,
	e2e: {
		baseUrl: 'http://localhost:4200',
		specPattern: 'cypress/e2e/**/*.cy.ts',
		video: false,
		setupNodeEvents(on, config) {
			getCompareSnapshotsPlugin(on, config);
		},
	},
});
