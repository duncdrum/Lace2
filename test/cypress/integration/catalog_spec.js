/* global cy */
describe.skip('The Catalog', () => {
    // TODO need some data to load here
    it('should load ', () => {
      cy.visit('./catalog.html')
      .title()
      .should('eq', 'Lace: Visualizing, Editing and Searching Polylingual OCR Results')
    })
})