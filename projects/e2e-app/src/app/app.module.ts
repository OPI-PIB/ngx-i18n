import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import pl from '@angular/common/locales/pl';
import { I18nRootModule } from '@core/i18n';
import { languages } from '@translations/translation-languages';
import { LanguageSwitcherContainerComponent } from '@core/i18n/components/language-switcher-container/language-switcher-container.component';

import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		I18nRootModule.forRoot({
			languages,
			localesToRegister: [pl],
			logMissingTranslations: true,
		}),
		HomeComponent,
		LanguageSwitcherContainerComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
