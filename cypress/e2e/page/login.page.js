class LoginPage{
    
    //#region Selectors
    get userNameField() { 
        return ('#user-name') 
    }
    get passwordField() { 
        return ('#password') 
    }
    get loginBtn() { 
        return ('#login-button') 
    }
    get errorMsgContainer(){
        return ('div.error-message-container.error')
    }
    get errorMsgText() {
        return ('[data-test="error"]')
    }

    //#endregion

    //#region Methods
    login(username, password){
        cy.get(this.userNameField).type(username)
        cy.get(this.passwordField).type(password)
        cy.get(this.loginBtn).click()
    }

    clearLoginFields(){
        cy.get(this.userNameField).clear()
        cy.get(this.passwordField).clear()
    }
    //#endregion
}
export default new LoginPage()