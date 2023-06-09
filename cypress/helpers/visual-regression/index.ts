import { checkScreenshot } from './check-screenshot';
import { Options } from './options';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const compareSnapshotCommand = require('cypress-image-diff-js/dist/command');

export class VisualRegression {
	/**
	 * Add visual regression commands
	 *
	 * @param options
	 * default:
	 * {
			customSnapshotsDir: 'cypress/screenshots',
			failureThreshold: 0,
			failureThresholdType: 'percent',
			customDiffConfig: { threshold: 0 },
		}
	 */
	static addCommands(options: Options = {}): void {
		compareSnapshotCommand(options);

		Cypress.Commands.add('checkScreenshot', checkScreenshot);
	}

	/**
	 * Generate html report
	 */
	static generateReport(): void {
		cy.task('generateReport');
	}
}
