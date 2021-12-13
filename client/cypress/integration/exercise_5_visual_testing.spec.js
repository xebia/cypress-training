/// <reference types="Cypress" />

/*
    in the isolation exercise, we where checking for the presence of an image. we only checked the URL. not how the image is presented well.
*/

describe('Exercise 5: Visual Testing', () => {
  before(() => {
    cy.log('👇 for the sake of this exercise I delete All snapshots present.')
    cy.log(
      'when folder does not exists, it will **not** fail the before / tests'
    )
    cy.log(
      'via the Cypress.env(<key>), I can use environment variables from the { .. env { key } } in my cypress.json'
    )
    cy.log(
      'lets call  the task "deletAllSnapshots" with the snapshotFolder value as extra parameter'
    )
    cy.task('deleteAllSnapshots', Cypress.env('snapshotFolder'))
  })
  it('does a first snapshot (because snapshot folder is empty)', () => {
    cy.visit('/')
    cy.matchImageSnapshot('default')
  })

  it('should take a picture of the first image', () => {
    cy.log(
      'because of the deleteAllSnapshots in the before (and not in a beforeEach) the snapshotfolder has a new snapshot from the first test.'
    )

    cy.intercept('GET', 'http://localhost:8081/songs', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: `messed up Nirvana`,
          artist: 'Nirvana',
          genre: 'Alternative Rock',
          album: 'Nevermind',
          albumImageUrl:
            'https://images.genius.com/a64eea0c361b6b02f4b7423adf80bb6e.1000x992x1.jpg',
          youtubeId: 'm-ofL_3EZyE',
          lyrics: '',
          tab: '',
          createdAt: '2018-02-13T12:56:24.432Z',
          updatedAt: '2018-02-13T12:56:24.432Z',
        },
      ],
    }).as('getSongs')

    cy.visit('/')
    cy.log(
      'if you want to see what happens when a screenshot test fails, use cy.matchImageSnapshot("default") instead of cy.matchImageSnapshot().'
    )
    // cy.matchImageSnapshot("default")
    cy.matchImageSnapshot()

    // TODO: browserstack code
  })
})
