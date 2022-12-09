/// <reference types="Cypress" /> // This is for intellisense

import HomePage from "../pageObjects/HomePage"

describe('Mero Padhai HomePage and all a step more pages', () => {

  beforeEach(() => {
    cy.visit('https://meropadhai.com')
  })

  it('Visit the homepage.', () => {
    const homePage = new HomePage()
    cy.get('.container > p')
      .should('have.text', 'Learn all courses at home.')
    // Cypress supports CSS selectors only.
    /*
      If it is id, then it #idname and if it is tag with id then it is tagname#idname
        and with attribute it is tagname[attribute='value']
      If it is class, then it is .classname and if it is tag with class then it is tagname.classname
    */
  })

  it('Visit explore page', () => {
    cy.get('.css-8p37wn > [href="/explore"]')
      .should('have.text', 'Explore')
      .click()
    cy.location('pathname').should('eq', '/explore')
    cy.get('h1.css-1my4u9n')
      .should('exist')
      .contains('Explore courses, topics and skills')
  })

  it('Visit the about page', () => {
    cy.get('.css-8p37wn > [href="/about-us"]')
      .should('have.text', 'About Us')
      .click()
    cy.location('pathname').should('eq', '/about-us')
    cy.get('.css-6f1k84 > .chakra-heading')
      .should('exist')
      .contains('Know about Mero Padhai')
  })

  it.only('Visit the contact page', () => {
    cy.get('.css-8p37wn > [href="/contact"]')
      .should('have.text', 'Contact')
      .click()
    cy.location('pathname').should('eq', '/contact')
    cy.get('.css-1xftii8')
      .should('exist')
      .contains('Contact Us')
  })

})