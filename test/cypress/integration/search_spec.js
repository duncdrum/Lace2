/* global cy */
describe('The search page', () => {
    it('should load ', () => {
      cy.visit('search.html')
      .title()
      .should('eq', 'Lace: Visualizing, Editing and Searching Polylingual OCR Results')
    })
})