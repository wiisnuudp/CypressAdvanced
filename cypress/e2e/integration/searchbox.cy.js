/// <reference types="cypress" />

describe('searchbox test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
    it('type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}') //using enter
    });

    it('searchbox result', () => {
        cy.get('h2').should('contain.text', 'Search Results:') //assertion text
        cy.get(':nth-child(4) > :nth-child(1) > a').should('have.attr', 'href') //assertion link
    });
});
