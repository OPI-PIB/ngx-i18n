import { TranslationKey } from '@translations/translation-key';
import { TranslationLanguageEnum } from '@translations/translation-languages';
import { t } from '@translations/translation-marker';

type TranslationLanguageMap = Record<
	TranslationLanguageEnum,
	{
		translationKey: TranslationKey;
		icon: string;
	}
>;

export const translationLanguageMap: TranslationLanguageMap = {
	en: {
		translationKey: t('languageSwitcher.lang.en'),
		icon: 'gb'
	},
	pl: {
		translationKey: t('languageSwitcher.lang.pl'),
		icon: 'pl'
	}
};
