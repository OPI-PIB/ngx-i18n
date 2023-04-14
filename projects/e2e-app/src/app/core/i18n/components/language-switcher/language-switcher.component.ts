import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	Output,
} from '@angular/core';
import { Maybe } from '@opi_pib/ts-utility';
import { CommonModule } from '@angular/common';

import { I18nModule } from '@core/i18n';

import { TranslationLanguage } from '../../translation-language';

@Component({
	selector: 'app-language-switcher',
	templateUrl: './language-switcher.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [CommonModule, I18nModule],
})
export class LanguageSwitcherComponent {
	@Input() languages: Maybe<TranslationLanguage[]>;

	@Output() selected = new EventEmitter<TranslationLanguage>();

	protected onSelect(language: Maybe<TranslationLanguage>): void {
		if (language instanceof TranslationLanguage) {
			this.selected.emit(language);
		}
	}
}
