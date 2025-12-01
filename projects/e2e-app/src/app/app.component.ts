import pl from '@angular/common/locales/pl';
import { Component, inject } from '@angular/core';
import { LanguageSwitcherContainerComponent } from '@core/i18n/components/language-switcher-container/language-switcher-container.component';
import { I18nService } from '@core/i18n/i18n.service';

import { HomeComponent } from './pages/home/home.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	imports: [HomeComponent, LanguageSwitcherContainerComponent]
})
export class AppComponent {
	#I18nService = inject(I18nService);

	constructor() {
		this.#I18nService.forRoot([pl]);
	}
}
