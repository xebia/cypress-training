/// <reference types="Cypress" />

describe('exercise 1: navigation', () => {
  it('basic commands: should open the main page', () => {
    cy.visit('/')
    cy.get('div[class="toolbar__title mr-4"').should('be.visible')
  })
})
