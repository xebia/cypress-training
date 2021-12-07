/// <reference types="Cypress" />
describe('Exercise 5: Visual Testing', () => {
  it('does some visual magic', () => {
    cy.visit('/')
    cy.matchImageSnapshot()
  })
})
