import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';
import { I18nCurrencyPipeBase } from '@ngx-i18n';

import { I18nLocaleId } from '../i18n-localeId';

@Pipe({
	name: 'i18nCurrency',
	standalone: true,
	pure: false,
})
export class I18nCurrencyPipe extends I18nCurrencyPipeBase<
	TranslationKey,
	TranslationLanguageEnum
> {
	constructor(@Inject(LOCALE_ID) protected override localeId: I18nLocaleId) {
		super(localeId);
	}
}
