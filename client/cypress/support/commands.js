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
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command'

addMatchImageSnapshotCommand({
    failureThreshold: 0.03, // threshold for entire image
    failureThresholdType: 'percent', // percent of image or number of pixels
    customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
    // capture: 'viewport', // capture viewport in screenshot
})

Cypress.Commands.add('search', (searchString) => {
    cy.log(searchString)
    cy.get(
        'input[aria-label="Search by song title, artist, album, or genre"]'
    ).type(`${searchString}{enter}`)
})

Cypress.Commands.add('login', (email, password) => {
    cy.contains('Sign Up').click()
    cy.get('input[name="email"]').type(email)
    cy.get('input[name="password"]').type(password)
    cy.get('button[name="registerBtn"]').click()
})
