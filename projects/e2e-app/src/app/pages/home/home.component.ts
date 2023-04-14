import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	LOCALE_ID,
} from '@angular/core';
import { I18nModule } from '@core/i18n';
import { I18nLocaleId } from '@core/i18n/i18n-localeId';
import { TranslationKey } from '@translations/translation-key';
import { t } from '@translations/translation-marker';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [CommonModule, I18nModule],
})
export class HomeComponent {
	today = new Date('2023-04-06');

	messages0: string[] = [];

	messages1: string[] = ['1'];

	messages2: string[] = ['1', '2'];

	messageMapping: { [k: string]: TranslationKey } = {
		'=0': t('messages.0'),
		'=1': t('messages.1'),
		other: t('messages.other'),
	};

	selectMapping: { [k: string]: TranslationKey } = {
		first: t('select.first'),
		second: t('select.second'),
		other: t('select.other'),
	};

	constructor(@Inject(LOCALE_ID) protected locale: I18nLocaleId) {}
}
