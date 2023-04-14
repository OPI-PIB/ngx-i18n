import { DecimalPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

import { I18nLocaleIdBase } from '../i18n-localeId-base';

type TransformType = ReturnType<DecimalPipe['transform']>;
type DigitsInfoType = Parameters<DecimalPipe['transform']>[1];
type LocaleType = Parameters<DecimalPipe['transform']>[2];

@Pipe({
	name: 'i18nDecimal',
	standalone: true,
	pure: false,
})
export class I18nDecimalPipeBase<
		TranslationKey extends string,
		TranslationLanguageEnum extends string
	>
	extends DecimalPipe
	implements PipeTransform
{
	constructor(
		@Inject(LOCALE_ID)
		protected localeId: I18nLocaleIdBase<
			TranslationKey,
			TranslationLanguageEnum
		>
	) {
		super(localeId.toString());
	}

	override transform(
		value: number | string,
		digitsInfo?: DigitsInfoType,
		locale?: LocaleType
	): TransformType;

	override transform(
		value: null | undefined,
		digitsInfo?: DigitsInfoType,
		locale?: LocaleType
	): null;

	override transform(
		value: number | string | null | undefined,
		digitsInfo?: DigitsInfoType,
		locale?: LocaleType
	): TransformType {
		locale = locale || this.localeId.toString();
		return super.transform(value, digitsInfo, locale);
	}
}
