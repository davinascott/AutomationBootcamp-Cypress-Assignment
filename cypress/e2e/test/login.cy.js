import loginPage from '../page/login.page'
import inventoryPage from '../page/inventory.page'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Login with a valid user', () => {
        loginPage.login('standard_user','secret_sauce')
        cy.get(inventoryPage.itemNames).should('be.visible')
        cy.get(inventoryPage.pageTitle).contains('Products')
        cy.url().should('contain', 'inventory')
        // Enter username & password then click the login button
        // cy.get('#user-name').type('standard_user')
        // cy.get('#password').type('secret_sauce')
        // cy.get('#login-button').click()

        // // Assert that the user is taken to the Products page
        // cy.get('.inventory_item_name').should('be.visible')
        // cy.get('.title').contains('Products')
        // cy.url().should('contain', 'inventory')
    })
});