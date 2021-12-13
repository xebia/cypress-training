/// <reference types="Cypress" />

describe('exercise 4: Isolation', () => {
  it('Replace basic response data', () => {
    // !! Important! intercept BEFORE visit

    // !! with the delay set, and without the assert (the contains), the test passes. so the fixture is served AFTER the delay
    cy.intercept('GET', 'http://localhost:8081/songs', {
      fixture: 'one_song.json',
      statusCode: 200,
      delay: 10000,
    }).as('one_song')
    cy.visit('/')
    cy.wait('@one_song')
    cy.contains('Bangerang')
  })

  it('tests retreiving albums', () => {
    cy.log(
      '👇 by using the rnd variable in the body I can create unique song-titles and can later on assert on that rnd value '
    )
    let rnd = Math.random().toString(36).substr(2, 5)

    cy.log('creating an intercept **before** doing a cy.visit')
    cy.intercept('GET', 'http://localhost:8081/songs', {
      statusCode: 200,
      body: [
        {
          id: 1,
          title: `${rnd}`,
          artist: 'Nirvana',
          genre: 'Alternative Rock',
          album: 'Nevermind',
          albumImageUrl:
            'https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg',
          youtubeId: 'm-ofL_3EZyE',
          lyrics: '',
          tab: '',
          createdAt: '2018-02-13T12:56:24.432Z',
          updatedAt: '2018-02-13T12:56:24.432Z',
        },
        {
          id: 2,
          title: 'In the blood',
          artist: 'John Mayer',
          genre: 'Acoustic Rock',
          album: 'The Search for Everything',
          albumImageUrl:
            'https://images.genius.com/a64eea0c361b6b02f4b7423adf80bb6e.1000x992x1.jpg',
          youtubeId: 'ob-jS7bqYgI',
          lyrics: '',
          tab: '',
          createdAt: '2018-02-13T12:56:24.432Z',
          updatedAt: '2018-02-13T12:56:24.432Z',
        },
      ],
    }).as('getSongs')

    cy.visit('/')
    cy.log('👇 now we should assert that all fields show the right information')
    cy.contains(`${rnd}`).should('be.visible')
    cy.contains(`Nirvana`).should('be.visible')
    cy.contains('Alternative Rock').should('be.visible')

    cy.log(
      '👇 because the url is parsed into a visual image, you cannot use contain to check the existence of the image.'
    )
    cy.contains(
      'https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg'
    ).should('not.exist')

    cy.log('👇 therefore I check the source of the image to be visible')
    cy.get(
      'img[src="https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/268x0w.jpg"]'
    ).should('be.visible')

    cy.log('👇 counting the number of songs showing in the UI')
    cy.get('.song').should('have.length', 2).should('be.visible')
  })
})
