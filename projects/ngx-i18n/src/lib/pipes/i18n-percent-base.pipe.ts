import { PercentPipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

import { I18nLocaleIdBase } from '../i18n-localeId-base';

type TransformType = ReturnType<PercentPipe['transform']>;
type DigitsInfoType = Parameters<PercentPipe['transform']>[1];
type LocaleType = Parameters<PercentPipe['transform']>[2];

@Pipe({
	name: 'i18nPercent',
	standalone: true,
	pure: false,
})
export class I18nPercentPipeBase<
		TranslationKey extends string,
		TranslationLanguageEnum extends string
	>
	extends PercentPipe
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
