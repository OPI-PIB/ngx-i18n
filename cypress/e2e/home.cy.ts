import { Language } from 'cypress/helpers/language';

describe('Home', () => {
	it('translate', () => {
		cy.visit('/');

		cy.getByTestId('messages').should('contain', '2 messages');

		cy.checkScreenshot('home', Language.En);

		cy.getByTestId('change-language-pl-PL').click();

		cy.getByTestId('messages').should('contain', '2 wiadomości');

		cy.checkScreenshot('home', Language.Pl);
	});
});
