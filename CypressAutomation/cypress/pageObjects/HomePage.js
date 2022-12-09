class HomePage{

    getLogin(){
        return cy.get('a[href*="sign_in"]')
    }

    getSignUp(){
        return cy.get('a[href*="sign_up"]')
    }

    getExplore(){
        return cy.get('a[href*="explore"]')
    }
    

}

export default HomePage