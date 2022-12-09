describe("All the scenarios for Login", () => {

    beforeEach(() => {
        cy.viewport(1920, 1200)
        cy.visit("https://meropadhai.com/")
        cy.get('[href="/auth/signin"] > .chakra-button').should('exist').contains('Login').click()
        cy.location('pathname').should('eq', '/auth/signin')
    })
    
    it("When user tries to login without filling any form", () => {
        
        cy.get('.chakra-button').click()
        // cy.get(':nth-child(1) > .css-15hpn1y > .chakra-text').should('have.text', 'This field is required.')
        cy.get(':nth-child(2) > .css-15hpn1y > .chakra-text').should('have.text', 'Password is required.')
        cy.get('#field-1').click()
    })

    it("When user doesn't type full email for login", () => {
        cy.get('#field-1').type('test')
        cy.get('#field-2').click()
        cy.get(':nth-child(1) > .css-15hpn1y > .chakra-text').should('have.text', 'Email is invalid')
    })

    it("When user doesn't type full email and less than 8 characters password for login", () => {
        cy.get('#field-1').type('test')
        cy.get('#field-2').type('1234567')
        cy.get('.chakra-button').click()
        cy.get(':nth-child(1) > .css-15hpn1y > .chakra-text').should('have.text', 'Email is invalid')
        cy.get(':nth-child(2) > .css-15hpn1y > .chakra-text').should('have.text', 'Password should be at least 8 characters.')
    })

    it("When the user type less than 8 characters in password", () => {
        cy.get('#field-1').type('litime4584@3mkz.com')
        cy.get('#field-2').type('1234567')
        cy.get('.chakra-button').click()
        cy.get(':nth-child(2) > .css-15hpn1y > .chakra-text').should('have.text', 'Password should be at least 8 characters.')
    })

    it.only("When the user type wrong email and password", () => {
        cy.get('#field-1').as('email')
        cy.get('@email').type('kjdbc@jdb.com')
        cy.get('#field-2').type('12345678')
        cy.get('.chakra-button').click().then(() => {
            cy.get('div.ct-text').should('have.text', 'User doesn\'t exist')
        })
        cy.log('test') // it works as console.log in javascript

        /*
            cy.get('#checkbox1).check().should('be.checked').and('have.value', 'option1')
            cy.get('#checkbox1).uncheck().should('not.be.checked').and('have.value', 'option1')
            cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')
        */

        /*
            //static dropdown
            cy.get('#dropdown').select('option2').should('have.value', 'option2')

            //dynamic dropdown
            cy.get('#autocomplete').type('ind').each(($el, index, $list) => {
                const countryName = $el.find('ui-menu-item').text()
                if(countryName === 'India') {
                    $el.click()
                }
            })

        */
    })


})