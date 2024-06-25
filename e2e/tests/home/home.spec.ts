import { test, expect } from '@playwright/test';

import { VisualRegression } from '../../modules/visual-regression.po';
import { Language } from '../../language';

test.describe('Strona główna', () => {
	test('wcag and vr', async ({ page }) => {
		await page.goto('/');

		await expect(page.getByTestId('messages')).toContainText(
			'2 wiadomości'
		);

		await VisualRegression.check(page, 'home', {
			language: Language.Pl,
		});

		await page.getByTestId('change-language-en-US').click();

		await expect(page.getByTestId('messages')).toContainText('2 messages');

		await VisualRegression.check(page, 'home', {
			language: Language.En,
		});
	});
});
