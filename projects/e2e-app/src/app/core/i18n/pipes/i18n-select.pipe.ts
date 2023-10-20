import { Pipe, PipeTransform } from '@angular/core';
import { I18nSelectPipeBase } from '@ngx-i18n';
import { TranslationKey } from '@translations/translation-key';

@Pipe({
	name: 'i18nSelect',
	standalone: true,
	pure: false,
})
export class I18nSelectPipe
	extends I18nSelectPipeBase<TranslationKey>
	implements PipeTransform {}
