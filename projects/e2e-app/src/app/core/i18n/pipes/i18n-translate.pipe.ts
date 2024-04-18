import { Pipe } from '@angular/core';
import { I18nTranslatePipeBase } from '@ngx-i18n';
import { TranslationKey } from '@translations/translation-key';

@Pipe({
	name: 'translate',
	standalone: true,
	pure: false,
})
export class I18nTranslatePipe extends I18nTranslatePipeBase<TranslationKey> {}
