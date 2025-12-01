import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { I18nDatePipeBase } from '@ngx-i18n';
import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';

import { I18nLocaleId } from '../i18n-localeId';

@Pipe({
	name: 'i18nDate',
	pure: false
})
export class I18nDatePipe extends I18nDatePipeBase<TranslationKey, TranslationLanguageEnum> implements PipeTransform {
	constructor(@Inject(LOCALE_ID) protected override localeId: I18nLocaleId) {
		super(localeId);
	}
}
