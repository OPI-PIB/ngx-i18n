import { expect, test } from '@playwright/test';

import { Language } from '../../language';
import { VisualRegression } from '../../modules/visual-regression.po';

test.describe('Strona główna', () => {
	test('wcag and vr', async ({ page }) => {
		await page.goto('/');

		await expect(page.getByTestId('messages')).toContainText('2 wiadomości');

		await VisualRegression.check(page, 'home', {
			language: Language.Pl
		});

		await page.getByTestId('change-language-en').click();

		await expect(page.getByTestId('messages')).toContainText('2 messages');

		await VisualRegression.check(page, 'home', {
			language: Language.En
		});
	});
});
