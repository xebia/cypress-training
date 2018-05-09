/// <reference types="cypress" />

import { delay } from "bluebird";

describe('First test suite', function () {
    it('.should() - assert that <title> is correct', function () {
        
        cy.server()
        
        cy
        .route({
            url: "*",
            delay: 1000
        }).as("testje");

        cy.visit('http://localhost:8080/#/songs').title().should('contain','TabTracker');
        //cy.wait('@getSongs');
        cy.get('.song-title').should('contain', 'Nevermind');


        cy.get('.btn.btn--flat.theme--dark').contains('Sign Up').click();
        //cy.get('a[href="#/songs/create"]').click();

        cy.get('input[name=password]').type('fubar');
    cy.get('input[name=email]').type('fubar');

       
    });
});