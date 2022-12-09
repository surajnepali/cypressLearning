// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//

Cypress.Commands.add('selectCourse', (courseName) => {
    cy.get('.css-1dy38l').find('.css-bc2ghm').each(($el, index, $list) => {

        const courseName = $el.find('h2.css-108nr98').text()
        
        if (courseName.includes('Fundamentals of Financial Management')) {
            cy.scrollTo('right') // Scrolls 'footer' into view
            cy.wrap($el).find('.css-6y3qij').click()
        }
    })
})

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })