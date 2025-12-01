import { expect, type Page } from '@playwright/test';

import { Language } from '../language';

interface Options {
	language: Language;
	timeout: number;
	fullPage: boolean;
}

export class VisualRegression {
	static async check(page: Page, name: string, options: Partial<Options> = {}) {
		const defaultOptions: Options = {
			language: Language.Pl,
			timeout: 10_000,
			fullPage: true
		};

		const mergedOptions: Options = { ...defaultOptions, ...options };

		await expect(page).toHaveScreenshot(`${name}--${mergedOptions.language}.png`, {
			mask: [page.locator('.e2e-blackout')],
			fullPage: mergedOptions.fullPage,
			maxDiffPixelRatio: 0.01,
			timeout: mergedOptions.timeout
		});
	}
}
