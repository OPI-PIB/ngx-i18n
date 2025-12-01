import { Injectable } from '@angular/core';
import { MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class I18nMissingTranslationHandler implements MissingTranslationHandler {
	handle(params: MissingTranslationHandlerParams): string {
		const key = params.key;

		console.warn(`[i18n] Missing translation for key: "${key}"`);

		return key;
	}
}
