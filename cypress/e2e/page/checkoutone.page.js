class CheckOutOnePage{
    get firstname() {
        return ('#first-name')
    }

    get lastname() {
        return ('#last-name')
    }

    get zipcode() {
        return ('#postal-code')
    }

    get continueBtn() {
        return ('#continue')
    }

    get cancelBtn() {
        return ('#cancel')
    }

    get errorMsgContainer(){
        return ('div.error-message-container.error')
    }

    get errorMsgText() {
        return ('[data-test="error"]')
    }

    fillInfo(firstname, lastname, zipcode){
        cy.get(this.firstname).type(firstname)
        cy.get(this.lastname).type(lastname)
        cy.get(this.zipcode).type(zipcode)
    }

    continueForm(){
        cy.get(this.continueBtn).click()
    }

    cancelForm(){
        cy.get(this.cancelBtn).click()
    }
}
export default new CheckOutOnePage()