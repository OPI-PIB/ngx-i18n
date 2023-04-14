import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';

import { I18nLocaleId } from '../i18n-localeId';
import { I18nDecimalPipeBase } from '@ngx-i18n';

@Pipe({
	name: 'i18nDecimal',
	standalone: true,
	pure: false,
})
export class I18nDecimalPipe
	extends I18nDecimalPipeBase<TranslationKey, TranslationLanguageEnum>
	implements PipeTransform
{
	constructor(@Inject(LOCALE_ID) protected override localeId: I18nLocaleId) {
		super(localeId);
	}
}
