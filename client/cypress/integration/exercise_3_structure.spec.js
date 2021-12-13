/// <reference types="Cypress" />

/*  🚨 Pattern detected 🚨

    👇 with this Cypress._.times() command I can extend the lodash functionalities on the Cypress object and therefore use the Lodash time function to re-run the complete Describe block a couple of times.
    pattern: rerun the tests 10 times before committing it (for the first time) to remove flakyness.
    downside: remove the Cypress._.times() command before committing, because else it will slow down your CI.
    with using cypress-grep you can run a test (based on filtering a substring) from the commandline:
    npx cypress run --env grep='more searches'
*/

Cypress._.times(10, (k) => {
  describe(`Search actions #${k + 1} / 10`, function () {
    before(() => {
      cy.log('👇 keeping the database clean.')
      cy.request('GET', 'http://localhost:8081/reset')

      cy.log(
        '**I created a "rnd" variable that has a random string so every time I signup as a new user, I use the rnd var.**'
      )
      cy.log(
        'the unique rnd variable was created within the Cypress._.times function, so that every iteration a new value is assigned to "rnd")'
      )
      cy.log(
        'and did you know you can use some [markdown](https://docs.cypress.io/api/commands/log#Syntax) in your cy.log?'
      )
    })
  })
})
describe('more searches', () => {
  let rnd = Math.random().toString(36).substr(2, 5)

  it('should search on song title', function () {
    cy.visit('http://localhost:8080/')
    cy.search('Drop it')
    cy.log('using the classname 👇')
    cy.get('.song-title').should('contain', 'Drop it')
  })

  it('should search on song title - doing it different', () => {
    cy.visit('/')
    cy.search('Drop it')
    cy.log('👇 making the contains case insensitive ')
    cy.get('.song-title').contains(/Drop it/i)
  })

  it('should signup via custom command', () => {
    cy.visit('/')
    cy.signup(`${rnd}@qxperts.io`, `myPassword`)
    cy.contains('Log Out')
  })

  it('should login via custom command', () => {
    cy.visit('/')

    cy.login(`${rnd}@qxperts.io`, `myPassword`)

    cy.log(
      '👇 and another way to circumvent the case sensitivity using [regular expressions](https://docs.cypress.io/api/commands/contains#Regular-Expression)'
    )
    cy.contains(/log out/i)
  })
})
