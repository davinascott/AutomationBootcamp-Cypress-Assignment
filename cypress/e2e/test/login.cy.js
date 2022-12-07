import loginPage from '../page/login.page'
import inventoryPage from '../page/inventory.page'
import loginData from '../data/login.data'

describe('Login', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Login with a valid user', () => {
        cy.get(loginData.Users).each(($elem,index) => {
            loginPage.login(loginData.Users[index].username,loginData.Users[index].password)
            if (loginData.Users[index].scenario == 'Valid User' || loginData.Users[index].scenario == 'Problem User') {
                cy.get(inventoryPage.itemNames).should('be.visible')
                cy.get(inventoryPage.pageTitle).contains('Products')
                cy.url().should('contain', 'inventory')
                inventoryPage.logout()
            } else if (loginData.Users[index].scenario == 'Locked Out User') {
                cy.get(loginPage.errorMsgContainer).should('be.visible')
                cy.get(loginPage.errorMsgText).should('have.text','Epic sadface: Sorry, this user has been locked out.')
                loginPage.clearLoginFields()
            } else {
                cy.get(loginPage.errorMsgContainer).should('be.visible')
                cy.get(loginPage.errorMsgText).should('have.text','Epic sadface: Username and password do not match any user in this service')
                loginPage.clearLoginFields()
            } 
        })
    })
});