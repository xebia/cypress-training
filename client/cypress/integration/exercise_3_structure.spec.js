/// <reference types="Cypress" />

describe('Search actions', function () {
  it('should search on song title', function () {
    cy.visit('http://localhost:8080/')
    cy.search('Drop it')
    cy.get('.song-title').should('contain', 'Drop it') // class
  })

  it('should login via custom command', () => {
    let rnd = Math.random().toString(36).substr(2, 5)
    cy.visit('/')
    cy.login(`${rnd}@qxperts.io`, `myPassword`)
    cy.contains('Log Out')
  })
})
