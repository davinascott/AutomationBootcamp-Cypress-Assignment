class CartPage{

    get mainMenuBtn() { 
        return ('#react-burger-menu-btn') 
    }

    get cartQuantityBadge() { 
        return ('.shopping_cart_badge') 
    }

    get cartItemsName() { 
        return ('.inventory_item_name') 
    }

    get cartFirstCartItemName() { 
        return ('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > a > div.inventory_item_name') 
    }

    get cartSecondCartItemName() { 
        //return cy.xpath('//*[@class="cart_item"][2]/div[2]/a/div') 
        return ('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > a > div.inventory_item_name')
    }

    get cartFirstItemRemoveBtn() {
        return ('#cart_contents_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label  > div.item_pricebar > button')
    }

    get cartSecondItemRemoveBtn() {
        return ('#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label  > div.item_pricebar > button')
    }

    get checkoutBtn() {
        return ('#checkout')
    }

    checkout(){
        cy.get(this.checkoutBtn).click()
    }
}
export default new CartPage()
