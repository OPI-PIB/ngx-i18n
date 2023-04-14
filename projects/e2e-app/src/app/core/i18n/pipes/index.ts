import { I18nCurrencyPipe } from './i18n-currency.pipe';
import { I18nDatePipe } from './i18n-date.pipe';
import { I18nTranslatePipe } from './i18n-translate.pipe';
import { I18nPluralPipe } from './i18n-translate-plural.pipe';
import { I18nDecimalPipe } from './i18n-decimal.pipe';
import { I18nPercentPipe } from './i18n-percent.pipe';
import { I18nSelectPipe } from './i18n-select.pipe';

export const i18nPipes = [
	I18nTranslatePipe,
	I18nDatePipe,
	I18nCurrencyPipe,
	I18nPluralPipe,
	I18nDecimalPipe,
	I18nPercentPipe,
	I18nSelectPipe,
];
