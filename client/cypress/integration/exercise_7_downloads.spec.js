/// <reference types="Cypress" />
/// <reference types="cypress-downloadfile"/>

describe('Exercise 7: downloading files', () => {
    it('downloads a file', () => {
        cy.downloadFile(
            'https://qxperts.io/wp-content/uploads/2021/01/Joel-Grimberg-800x555.jpg',
            'mydownloads',
            'joelgrimberg.jpg'
        )
    })
})
