/* global cy */
describe.skip('The teiPreflight page', () => {
    it('should load ', () => {
      cy.visit('teiPreflight.html')
      .title()
      .should('eq', 'Lace: Visualizing, Editing and Searching Polylingual OCR Results')
    })
})