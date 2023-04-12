import { LOCALE_ID, Provider } from '@angular/core';

import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';

import { I18nService } from './i18n.service';
import { I18nLocaleIdBase } from '@ngx-i18n';

export class I18nLocaleId extends I18nLocaleIdBase<TranslationKey, TranslationLanguageEnum> {
	constructor(protected override i18nService: I18nService) {
		super(i18nService);
	}
}

export const I18nLocaleIdProvider: Provider = {
	provide: LOCALE_ID,
	useClass: I18nLocaleId,
	deps: [I18nService],
};
