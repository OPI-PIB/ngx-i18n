/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Pipe, PipeTransform } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Pipe({
	name: 'translate',
	standalone: true,
	pure: false
})
export class I18nTranslatePipeBase<TranslationKey extends string> extends TranslatePipe implements PipeTransform {
	constructor() {
		super();
	}

	override transform(query: TranslationKey, ...args: unknown[]): string {
		return super.transform(query, ...args);
	}
}
