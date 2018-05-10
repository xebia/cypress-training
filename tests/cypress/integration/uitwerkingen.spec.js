/// <reference types="Cypress" />

describe('uitwerkingen', function() {
  beforeEach('befoor', function() {
    cy.server()
  })

  it('should visit the local website', function() {
    cy.visit('http://localhost:8080');
  })

  it('should contain the TabTracker Button', function() {
    cy.get('.home.router-link-active').should('contain', 'TabTracker')
  })

  it('should contain the songtitle Nevermind', function() {
    cy.get('.song-title').contains('Nevermind')
  })

  it('should click the Sign Up button', function () {
    cy
    .route({
        method: "GET",
        url: "/songs",
        status: 200,
        delay: 1000
    }).as("login");

    cy
    .route({
        method: "GET",
        url: "/register",
        status: 200,
        delay: 1000
    }).as("login");


    cy.get('.btn.btn--flat.theme--dark').contains('Sign Up').click();

  })

  it('should type email and password', function() {

    cy.get('input[name=password]').type('fubar');
    cy.get('input[name=email]').type('fubar');
  })

  it('should click the submit button', function() {

  })

})
