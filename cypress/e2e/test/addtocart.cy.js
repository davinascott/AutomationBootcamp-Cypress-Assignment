import loginPage from '../page/login.page'
import inventoryPage from '../page/inventory.page'
import cartProducts from '../data/products.data'
import shoppingCart from '../page/cart.page'


describe('Checkout Flow', () => {
    before(() => {
        cy.visit('/')
    })

    it('Add a single product to cart', () => {
        loginPage.login('standard_user','secret_sauce')
        let firstIndex = 0;
        inventoryPage.addToCart(cartProducts.products[firstIndex].name)
        inventoryPage.openCart()
        cy.url().should('contain', 'cart')
        cy.get(shoppingCart.cartQuantityBadge).should('have.text','1')
        cy.get(shoppingCart.cartFirstCartItemName).should('have.text', cartProducts.products[firstIndex].name)
        inventoryPage.logout();
    })

    it('Add multiple product to cart', () => {
        loginPage.login('standard_user','secret_sauce')
        let firstIndex = 0;
        let secondIndex = 1;
        inventoryPage.addToCart(cartProducts.products[firstIndex].name)
        inventoryPage.addToCart(cartProducts.products[secondIndex].name)
        inventoryPage.openCart()
        cy.url().should('contain', 'cart')
        cy.get(shoppingCart.cartQuantityBadge).should('have.text','2')
        cy.get(shoppingCart.cartFirstCartItemName).should('have.text', cartProducts.products[firstIndex].name)
        cy.get(shoppingCart.cartSecondCartItemName).should('have.text', cartProducts.products[secondIndex].name)
        inventoryPage.logout();
    })

})