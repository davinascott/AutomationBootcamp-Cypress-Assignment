class InventoryPage{

    //Page Selectors
    get pageTitle() {
        return ('.title')
    }
    get itemNames() { 
        return ('.inventory_item_name') 
    }
    get mainMenuBtn() { 
        return ('#react-burger-menu-btn') 
    }
    get logOutBtn() { 
        return ('#logout_sidebar_link') 
    }
    get cartIcon() { 
        return ('.shopping_cart_link') 
    }

    get itemsPrice() { 
        return ('.inventory_item_price') 
    }

    get selectSortDropDown() { 
        return ('.product_sort_container') 
    }

    //Page Methods
    logout(){
        cy.get(this.mainMenuBtn).click()
        cy.get(this.logOutBtn).click()
    }

    applySelectorFormat(itemName){
        return itemName.toLowerCase().replaceAll(' ', '-')
    }

    addToCart(itemName){
        let addToCartBtn = `#add-to-cart-${this.applySelectorFormat(itemName)}`

        cy.get(addToCartBtn).should('be.visible')
        cy.get(addToCartBtn).click()
    }

    selectSort(sort){
        cy.get(this.selectSortDropDown).select(sort)
    }

    openCart(){
        cy.get(this.cartIcon).click()
    }

}
export default new InventoryPage()