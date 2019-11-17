
context('Index', () => {

	// beforeEach(function () {
	// 	cy.viewport('iphone-6');
	// });

	it('Intro', () => {
		cy.visit('localhost:8005/index.html');
		cy.get('#start').should('be.visible');
		// cy.wait(3000);
		cy.get('#start').click();
	});

	it('Menu', () => {
		// cy.wait(3000);
		cy.get('#play').should('be.visible');
		cy.get('#listen').should('be.visible');
		cy.get('#play').click();
	});

});
