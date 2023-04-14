import { Language } from 'cypress/helpers/language';

describe('Home', () => {
	it('translate', () => {
		cy.visit('/');

		cy.getByTestId('messages').should('contain', '2 wiadomości');

		cy.checkScreenshot('home', Language.Pl);

		cy.getByTestId('change-language-en-US').click();

		cy.getByTestId('messages').should('contain', '2 messages');

		cy.checkScreenshot('home', Language.En);
	});
});
