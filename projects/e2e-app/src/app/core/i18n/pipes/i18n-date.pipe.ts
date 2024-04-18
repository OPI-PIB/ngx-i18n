import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';
import { I18nDatePipeBase } from '@ngx-i18n';

import { I18nLocaleId } from '../i18n-localeId';

@Pipe({
	name: 'i18nDate',
	standalone: true,
	pure: false,
})
export class I18nDatePipe extends I18nDatePipeBase<
	TranslationKey,
	TranslationLanguageEnum
> {
	constructor(@Inject(LOCALE_ID) protected override localeId: I18nLocaleId) {
		super(localeId);
	}
}
