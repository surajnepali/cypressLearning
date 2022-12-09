/// <reference types="Cypress" /> // This is for intellisense

describe("Explore Courses Without Login", () => {

    beforeEach(() => {
        cy.viewport(1920, 1200)
        cy.visit("https://meropadhai.com/")
        cy.get('.css-8p37wn > [href="/explore"]')
            .should('have.text', 'Explore')
            .click()
        cy.location('pathname').should('eq', '/explore')
        cy.get('h1.css-1my4u9n')
            .should('exist')
            .contains('Explore courses, topics and skills')
    })

    // it("Verify there are altogether 6 courses", () => {
    //     cy.location('pathname').should('eq', '/explore')
    //     cy.get('h1.css-1my4u9n')
    //         .should('exist')
    //         .contains('Explore courses, topics and skills')
    // })

    it("Verify the second course is 'Micro-Economics'", () => {

        // parent child chaining
        cy.get('.css-1dy38l').find('.css-hmybd3').should('have.length', 6)
        cy.get('.css-1dy38l').find('.css-bc2ghm').eq(0).click()
    })

    it("Verify that selected course is 'Fundamentals of Financial Management'", () => {

        //parent child chaining
        cy.selectCourse('Fundamentals of Financial Management')
        cy.location('pathname')
            .should('eq', '/course/fundamentals-of-financial-management-padhai-6384901e721f354c584f0181')
        cy.get('h1.css-d36phq').should('exist').contains('Fundamentals of Financial Management')
    })

    it.only("Try to buy verified course", () => {
        cy.get('.css-1dy38l').find('.css-bc2ghm').each(($el, index, $list) => {

            const courseName = $el.find('h2.css-108nr98').text()
            
            if (courseName.includes('Fundamentals of Financial Management')) {
                cy.scrollTo('right') // Scrolls 'footer' into view
                cy.wrap($el).find('.css-6y3qij').click()
            }
        })
        cy.location('pathname')
            .should('eq', '/course/fundamentals-of-financial-management-padhai-6384901e721f354c584f0181')
        cy.get('h1.css-d36phq').should('exist').contains('Fundamentals of Financial Management')
        cy.get('button').should('exist').contains('Login to buy').click({ force: true })

    })

})
