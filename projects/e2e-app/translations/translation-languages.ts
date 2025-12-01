export type TranslationLanguageEnum = 'en' | 'pl';

export const languages: TranslationLanguageEnum[] = ['en', 'pl'];

export const isTranslationLanguageEnum = (value: unknown): value is TranslationLanguageEnum =>
	languages.includes(value as TranslationLanguageEnum);
