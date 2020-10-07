/* global cy */
describe('The Runs site', () => {
    it('should load ', () => {
      // TODO: adjust URL
      cy.visit('http://trylace.org/runs.html?archive_number=didascaliaetcons00funk')
      .title()
      .should('eq', 'Lace: Visualizing, Editing and Searching Polylingual OCR Results')
    })
})