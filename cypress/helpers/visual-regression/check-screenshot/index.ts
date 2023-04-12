import { Language } from '../../language';

import { SnapshotOptions } from './snapshot-options';

export function checkScreenshot(
	name: string,
	language: Language,
	options?: SnapshotOptions
): any {
	const wait: number = options?.wait ?? 1000;
	const testThreshold: number = options?.testThreshold ?? 0;

	return cy
		.wait(wait)
		.compareSnapshot(
			`${name}--${language}`,
			testThreshold,
			options?.retryOptions
		);
}
