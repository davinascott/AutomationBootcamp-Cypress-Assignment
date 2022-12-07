import loginPage from '../page/login.page'
import inventoryPage from '../page/inventory.page'
import cartProducts from '../data/products.data'


describe('Sort', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should sort product list from Z-A', () => {
        loginPage.login('standard_user','secret_sauce')
        cy.get(inventoryPage.itemNames).should('be.visible')
        cy.get(inventoryPage.selectSortDropDown).select('za')
        cartProducts.products.sort().reverse()

        cy.get(inventoryPage.itemNames).each(($elem, index) => {
            expect($elem.text()).equal(cartProducts.products[index].name)
        })
        inventoryPage.logout();
    })

    it('should sort product list from A-Z', () => {
        loginPage.login('standard_user','secret_sauce')
        cy.get(inventoryPage.itemNames).should('be.visible')
        cy.get(inventoryPage.selectSortDropDown).select('az')
        cy.get(inventoryPage.itemNames).should('be.visible')
        cartProducts.products.sort().reverse()

        cy.get(inventoryPage.itemNames).each(($elem, index) => {
            expect($elem.text()).equal(cartProducts.products[index].name)
        })
        inventoryPage.logout();
    })

    it('should sort product list from low to high', () => {
        loginPage.login('standard_user','secret_sauce')
        cy.get(inventoryPage.selectSortDropDown).select('lohi')
        cy.get(inventoryPage.itemNames).should('be.visible')
        cartProducts.products.sort((a, b) => a.price - b.price)

        cy.get(inventoryPage.itemsPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${cartProducts.products[index].price}`)
        })
        inventoryPage.logout();
    })

    it('should sort product list from high to low', () => {
        loginPage.login('standard_user','secret_sauce')
        cy.get(inventoryPage.selectSortDropDown).select('hilo')
        cy.get(inventoryPage.itemNames).should('be.visible')

        // Sort data list based on price, from high to low
        cartProducts.products.sort((a, b) => b.price - a.price)
        cy.get(inventoryPage.itemsPrice).each(($elem, index) => {
            expect($elem.text()).equal(`$${cartProducts.products[index].price}`)
        })
        inventoryPage.logout();
    })
})