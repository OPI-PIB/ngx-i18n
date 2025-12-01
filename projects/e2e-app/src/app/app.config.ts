import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import pl from '@angular/common/locales/pl';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

registerLocaleData(pl);

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideHttpClient(),
		provideTranslateService({
			loader: provideTranslateHttpLoader({
				prefix: '/assets/i18n/',
				suffix: '.json'
			})
		})
	]
};
