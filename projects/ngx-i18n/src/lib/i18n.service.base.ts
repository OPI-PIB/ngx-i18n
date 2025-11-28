import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { TranslationLanguageBase } from './translation-language-base';
import { TranslationParams } from './translation-params';

@Injectable({
	providedIn: 'root'
})
export abstract class I18nServiceBase<
	TranslationKey extends string,
	TranslationLanguageEnum extends string,
	TranslationLanguage extends TranslationLanguageBase<TranslationLanguageEnum, TranslationKey>
> {
	constructor(protected translateService: TranslateService) {}

	abstract getCurrentLanguage(): TranslationLanguage;

	translate$(key: TranslationKey, interpolateParams?: TranslationParams): Observable<string>;

	translate$(
		key: TranslationKey[],
		interpolateParams?: TranslationParams
	): Observable<{ [k in TranslationKey]: string }>;

	translate$(
		key: TranslationKey | TranslationKey[],
		interpolateParams?: TranslationParams
	): Observable<string> | Observable<{ [k in TranslationKey]: string }> {
		return this.translateService.stream(key, interpolateParams) as
			| Observable<string>
			| Observable<{ [k in TranslationKey]: string }>;
	}

	instant(key: TranslationKey, interpolateParams?: TranslationParams): string;

	instant(key: TranslationKey[], interpolateParams?: TranslationParams): { [k in TranslationKey]: string };

	instant(
		key: TranslationKey | TranslationKey[],
		interpolateParams?: TranslationParams
	): string | { [k in TranslationKey]: string } {
		return this.translateService.instant(key, interpolateParams) as string | { [k in TranslationKey]: string };
	}

	setLanguage(lang: TranslationLanguage): void {
		this.translateService.use(lang.toDto());
	}

	protected registerLocales(locales: any[] = []): void {
		locales.forEach((locale) => registerLocaleData(locale));
	}
}
