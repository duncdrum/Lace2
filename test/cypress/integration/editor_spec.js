/* global cy */
describe.skip('The Editor GUI', () => {
    // TODO need some data to load here
    it('should load ', () => {
      cy.visit('./side_by_side_view.html')
      .title()
      .should('eq', 'Lace: Visualizing, Editing and Searching Polylingual OCR Results')
    })
})