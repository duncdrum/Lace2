/* global cy */
describe('The side-by-side Editor', () => {
    it('should load', () => {
        // TODO: adjust URL
      cy.visit('http://trylace.org/side_by_side_view.html?collectionUri=/db/apps/aeschinisoration00aesc_2019-07-10-16-30-00&positionInCollection=2')
      .title()
      .should('eq', 'Lace: Visualizing, Editing and Searching Polylingual OCR Results')
    })
})

describe('The Text-center navigation', () => {
    it('should …', () => {

    })
})

describe('The image area', () => {
    it('should …', () => {
        
    })
})

describe('The editor area', () => {
    it('should …', () => {
        
    })
})