import { NgModule } from '@angular/core';

import { i18nPipes } from './pipes';

@NgModule({
	imports: i18nPipes,
	exports: i18nPipes
})
export class I18nModule {}
