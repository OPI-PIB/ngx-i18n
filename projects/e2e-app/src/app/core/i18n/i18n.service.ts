import { DOCUMENT, Inject, Injectable, signal, WritableSignal } from '@angular/core';
import { I18nServiceBase } from '@ngx-i18n';
import { TranslateService } from '@ngx-translate/core';
import { always } from '@opi_pib/ts-utility';
import { TranslationKey } from '@translations/translation-key';
import { isTranslationLanguageEnum, TranslationLanguageEnum } from '@translations/translation-languages';
import { BehaviorSubject, distinctUntilChanged, map, Observable, tap } from 'rxjs';

import { TranslationLanguage } from './translation-language';

@Injectable({
	providedIn: 'root'
})
export class I18nService extends I18nServiceBase<TranslationKey, TranslationLanguageEnum, TranslationLanguage> {
	#langChange$!: BehaviorSubject<TranslationLanguage>;

	#langChange!: WritableSignal<TranslationLanguage>;

	constructor(
		protected override translateService: TranslateService,
		@Inject(DOCUMENT) protected document: Document
	) {
		super(translateService);
	}

	forRoot(locales: any[]): void {
		this.registerLocales(locales);
		this.translateService.addLangs(['en', 'pl']);

		const initialLanguage: TranslationLanguage = this.#getInitialLanguage();
		this.translateService.setFallbackLang(initialLanguage.toDto());
		this.translateService.use(initialLanguage.toDto());

		this.#langChange$ = new BehaviorSubject(initialLanguage);
		this.#langChange = signal<TranslationLanguage>(initialLanguage);

		this.translateService.onLangChange
			.pipe(
				map(({ lang }) => {
					always(isTranslationLanguageEnum(lang), 'u9um8kqu');

					return TranslationLanguage.create({ lang });
				}),
				tap((lang) => {
					this.document.documentElement.lang = lang.toDto();
					this.#langChange.set(lang);
				})
			)
			.subscribe(this.#langChange$);
	}

	#getInitialLanguage(): TranslationLanguage {
		const browserLanguage = this.translateService.getBrowserLang();
		if (isTranslationLanguageEnum(browserLanguage)) {
			return TranslationLanguage.create({ lang: browserLanguage });
		}

		return this.getAvailableLanguages()[0];
	}

	get langChange() {
		return this.#langChange.asReadonly();
	}

	getCurrentLanguage(): TranslationLanguage {
		return this.#langChange$.getValue();
	}

	getCurrentLanguage$(): Observable<TranslationLanguage> {
		return this.#langChange$.pipe(distinctUntilChanged((a, b) => a.equals(b)));
	}

	getAvailableLanguages(): TranslationLanguage[] {
		return this.translateService.getLangs().map((lang) => {
			always(isTranslationLanguageEnum(lang), '5bpriqmx');

			return TranslationLanguage.create({ lang });
		});
	}
}
