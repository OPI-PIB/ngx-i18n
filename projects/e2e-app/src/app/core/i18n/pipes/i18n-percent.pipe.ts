import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';

import { I18nLocaleId } from '../i18n-localeId';
import { I18nPercentPipeBase } from '@ngx-i18n';

@Pipe({
	name: 'i18nPercent',
	standalone: true,
	pure: false,
})
export class I18nPercentPipe
	extends I18nPercentPipeBase<TranslationKey, TranslationLanguageEnum>
	implements PipeTransform
{
	constructor(@Inject(LOCALE_ID) protected override localeId: I18nLocaleId) {
		super(localeId);
	}
}
