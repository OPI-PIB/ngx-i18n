import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';
import { I18nPercentPipeBase } from '@ngx-i18n';

import { I18nLocaleId } from '../i18n-localeId';

@Pipe({
	name: 'i18nPercent',
	standalone: true,
	pure: false,
})
export class I18nPercentPipe extends I18nPercentPipeBase<
	TranslationKey,
	TranslationLanguageEnum
> {
	constructor(@Inject(LOCALE_ID) protected override localeId: I18nLocaleId) {
		super(localeId);
	}
}
