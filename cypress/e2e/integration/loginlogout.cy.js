/// <reference types="cypress" />

describe('Login/Logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        
    })

    it('should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').clear()
        cy.get('#user_password').type('invalid username')
        cy.get('input[name="submit"]').click()
    });

    it('shoul display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    it('should login to application with valid data', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.login(username, password)

            cy.get('h2').should('contain.text', 'Cash Accounts') //assertion success login
        })
    });

    it('should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()

        cy.get('strong').should('contain.text', 'Home') //assertion success logout
    });
});
