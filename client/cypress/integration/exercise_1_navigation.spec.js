/// <reference types="Cypress" />

/* this exercise has the purpose of becomming familiar with 'navigation'.
selecting elements can be done in many different ways. While css selectors and xpath( https://www.w3schools.com/cssref/css_selectors.asp ) where the standard for many years, setting a test-id on an element is a healthy pattern.
*/

describe('exercise 1: navigation', () => {
  it('basic commands: should open the main page', () => {
    cy.log(
      'because of my baseUrl setting in ./cypress.json, I only have to use the "/" in my cy.visit'
    )
    cy.visit('/')

    cy.log('👇 chai assertion (BDD style)')
    cy.get('div[class="toolbar__title mr-4"').should('be.visible')
    cy.log(
      'both ☝️ & 👇 check for the same element, but with a slightly different approach'
    )
    cy.get('.toolbar__title.mr-4').should('be.visible')

    cy.log(
      'the first is attaching the element type to a classname. The second is only using the classname.'
    )

    cy.log('reflection: ☝️ which do you prefer? and why?')
    cy.log(
      'suggestion: use the Testing Library for the DOM testing queries (instead of using classnames). <br> more can be found in the [Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)'
    )
  })
})
