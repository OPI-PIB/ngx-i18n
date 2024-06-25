import { I18nSelectPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'i18nSelect',
	standalone: true,
	pure: false,
})
export class I18nSelectPipeBase<TranslationKey extends string>
	extends I18nSelectPipe
	implements PipeTransform
{
	override transform(
		value: string | null | undefined,
		mapping: Record<string, TranslationKey>
	): TranslationKey {
		return super.transform(value, mapping) as TranslationKey;
	}
}
