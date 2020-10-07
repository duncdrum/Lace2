const { contains } = require("jquery")  

/* global cy */
describe('The try-it page', () => {
    it('should load ', () => {
      cy.visit('http://trylace.org/index.html')
      .title()
      .should('eq', 'Lace: Visualizing, Editing and Searching Polylingual OCR Results')
    })
})

describe('Navbar', () => {
    context('720p Desktop', () => {
        beforeEach(() => {
            cy.viewport(1280, 720)
        })

        it('should display full nav header', () => {
            cy.get('.navbar')
            .contains('Lace')
            .parents()
            .contains('Latest Edits')
            .parents()
            .contains('Search')
            .parents()
            .contains('FAQ')
            .parents()
            .contains('Editing Guide')
            .parents()
            .contains('About')
        })
        
        it('should not show mobile pill', () => {
            cy.get('.navbar-toggle').should('not.be.visible')
        })
    })

    context('mobile view', () => {
        beforeEach(() => {
            cy.viewport('iphone-6')
        })

        it('should show mobile pill', () => {
            cy.get('.navbar-toggle').should('be.visible')
        })
    })
    
})

describe('Editable texts', () => {
    it('should show different texts', () => {
      cy.get('#container')
      .find('h3')
      .contains('Texts')
      .parents()
      .find('table.table')
      .contains('Funk')
      .parents()
      .contains('Aeschines')
    })

    describe('Aeschines text', () => {
        it('should open side-by-side editor', () => {
            cy.get(':nth-child(1) > td')
            .contains('Aeschines')
            .click()
            .url()
            .should('include', 'side_by_side_view')
            cy.go('back')
        })
    })

    describe('Funk text', () => {
        it('should open runs interface', () => {
            cy.get(':nth-child(2) > td')
            .contains('Funk')
            .click()
            .url()
            .should('include', 'runs')
            cy.go('back')
        })
    })
    
    it('should not show info', () => {
        cy.get('#indexInfo').should('not.be.visible')
    })
})

describe('The footer', () => {
    it('should contain lace version', () => {
      cy.get('#footer')
      .should('be.visible')
      .contains('Lace v.')
    })
})
