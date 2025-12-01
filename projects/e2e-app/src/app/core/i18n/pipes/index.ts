import { I18nDecimalPipeBase, I18nPercentPipeBase, I18nSelectPipeBase } from '@ngx-i18n';

import { I18nCurrencyPipe } from './i18n-currency.pipe';
import { I18nDatePipe } from './i18n-date.pipe';
import { I18nPluralPipe } from './i18n-translate-plural.pipe';
import { I18nTranslatePipe } from './i18n-translate.pipe';

export const i18nPipes = [
	I18nCurrencyPipe,
	I18nDatePipe,
	I18nDecimalPipeBase,
	I18nPercentPipeBase,
	I18nPluralPipe,
	I18nSelectPipeBase,
	I18nTranslatePipe
];
