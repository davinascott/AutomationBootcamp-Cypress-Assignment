import loginPage from '../page/login.page'
import inventoryPage from '../page/inventory.page'
import cartProducts from '../data/products.data'
import shoppingCart from '../page/cart.page'
import checkoutYourInfo from '../page/checkoutone.page'
import checkoutData from '../data/checkout.data'


describe('Checkout Flow', () => {
    before(() => {
        cy.visit('/')
    })

    it('Negative Test - Checkout single cart item with missing First Name', () => {
        loginPage.login('standard_user','secret_sauce')
        inventoryPage.addToCart(cartProducts.products[1].name)
        inventoryPage.openCart()
        cy.url().should('contain', 'cart')
        cy.get(shoppingCart.cartQuantityBadge).should('have.text','1')
        cy.get(shoppingCart.cartFirstCartItemName).should('have.text', cartProducts.products[1].name)
        shoppingCart.checkout()
        cy.url().should('contain', 'one')
        checkoutYourInfo.fillInfo(checkoutData.information[0].firstName,checkoutData.information[0].lastName,checkoutData.information[0].zipcode)
        checkoutYourInfo.continueForm()
        cy.get(checkoutYourInfo.errorMsgContainer).should('be.visible')
        cy.get(checkoutYourInfo.errorMsgText).should('have.text', 'Error: First Name is required')
        inventoryPage.logout()
        // cy.get(checkoutData).each((index) => {
        //     //expect(elem.text()).equal(productList[index])
        //     checkoutYourInfo.fillInfo(checkoutData.information[index].firstName)
        // })
    })

    it('Positive Test - Checkout single cart item with valid information', () => {
        loginPage.login('standard_user','secret_sauce')
        inventoryPage.addToCart(cartProducts.products[0].name)
        inventoryPage.openCart()
        cy.url().should('contain', 'cart')
        cy.get(shoppingCart.cartQuantityBadge).should('have.text','1')
        cy.get(shoppingCart.cartFirstCartItemName).should('have.text', cartProducts.products[0].name)
        shoppingCart.checkout()
        cy.url().should('contain', 'one')
        checkoutYourInfo.fillInfo(checkoutData.information[1].firstName,checkoutData.information[1].lastName,checkoutData.information[1].zipcode)
        checkoutYourInfo.continueForm()
        cy.url().should('contain', 'two')
        cy.get('.inventory_item_name').each(($elem,index) => {
            expect($elem.text()).equal(cartProducts.products[index].name)
        })
        cy.get('#finish').should('be.visible')
        cy.get('#finish').click()
        cy.get('.title').should('be.visible')
        cy.get('.title').should('have.text','Checkout: Complete!')
        inventoryPage.logout()
    })

    it('Positive Test - Checkout multiple cart items with valid information', () => {
        loginPage.login('standard_user','secret_sauce')
        inventoryPage.addToCart(cartProducts.products[0].name)
        inventoryPage.addToCart(cartProducts.products[1].name)
        inventoryPage.openCart()
        cy.url().should('contain', 'cart')
        cy.get(shoppingCart.cartQuantityBadge).should('have.text','2')
        cy.get(shoppingCart.cartFirstCartItemName).should('have.text', cartProducts.products[0].name)
        cy.get(shoppingCart.cartSecondCartItemName).should('have.text', cartProducts.products[1].name)
        shoppingCart.checkout()
        cy.url().should('contain', 'one')
        checkoutYourInfo.fillInfo(checkoutData.information[1].firstName,checkoutData.information[1].lastName,checkoutData.information[1].zipcode)
        checkoutYourInfo.continueForm()
        cy.url().should('contain', 'two')
        cy.get('.inventory_item_name').each(($elem,index) => {
            expect($elem.text()).equal(cartProducts.products[index].name)
        })
        cy.get('#finish').should('be.visible')
        cy.get('#finish').click()
        cy.get('.title').should('be.visible')
        cy.get('.title').should('have.text','Checkout: Complete!')
        inventoryPage.logout()
    })
    
})
