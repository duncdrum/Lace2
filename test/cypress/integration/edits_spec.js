/* global cy */
describe('The latest edits page', () => {
    it('should load ', () => {
      cy.visit('latest-edits.html')
      .title()
      .should('eq', 'Lace: Visualizing, Editing and Searching Polylingual OCR Results')
    })
})