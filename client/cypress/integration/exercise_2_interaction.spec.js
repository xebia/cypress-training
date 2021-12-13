/// <reference types="Cypress" />

/*  🚨 Pattern detected 🚨
  We normally do not 'chain' tests.
  Every test (every 'it') should be possible to pass without being dependent on the outcome of other tests.

  (in our examples we did chain the tests, but this is just because of making it easier to do all the exercises)

*/
describe('exercise 2: Interaction', () => {
  before(() => {
    cy.log(
      '👇 resetting the database via the server reset url. this will break the test when the server is down.'
    )
    cy.request('GET', 'http://localhost:8081/reset')
  })
  it('should add a new song', () => {
    cy.visit('/')

    cy.log(
      '👇 I can select the element via the a[href=..] or [href=..]. which one do you prefer? are there other options?'
    )
    cy.get('[href="#/songs/create"]').click()
    cy.log('👇 using the id of the element')
    cy.get('#sngTitle').click().type('Quiet Germain Girls')
    cy.get('#sngArtist').click().type('Blaudzun')
    cy.get('#sngGenre').click().type('Singer Songwriter')
    cy.get('#sngAlbum').click().type('Seadrift Soundmachine')
    cy.get('#sngAlbumImg')
      .click()
      .type(
        'https://img.discogs.com/iePAoXaU55YxRWFEfuIJ4gyt85s=/fit-in/500x489/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3552356-1335016354.jpeg.jpg'
      )
    cy.get('#sngYoutube').click().type('http://y2u.be/8EEYwA665Jk')
    cy.get('#sngTab').click().type('tabs')
    cy.get('#sngLyrics').click().type('lyrics')
    cy.log(
      'cy.contains searches the DOM for an element containing the text. Use contains("<your-string>", { matchCase: false }) for using case insensitive search'
    )
    cy.contains('create song', { matchCase: false }).click()
  })

  it('should edit the song you just create', () => {
    cy.visit('/')
    cy.wait(2000)

    cy.log(
      'because I know that the song that just was added is ordered last, I can use the last() function to get only the last edit-button to use for the click '
    )
    cy.get('.btn__content').last().click()
    cy.wait(2000)
    cy.get('#edit').click()
    cy.wait(2000)
    cy.get('[aria-label="Title"]').click().clear().type('Quiet Germain Boys')
    cy.get('[aria-label="Tab"]').click().clear().type('Quiet Germain Tabs')
    cy.get('[aria-label="Lyrics"]').click().clear().type('Quiet Germain Tabs')
    cy.contains('save song', { matchCase: false }).click()
    cy.contains('Quiet Germain Boys')
  })

  it('should assert some more', () => {
    cy.visit('/')
    cy.get(
      '[aria-label="Search by song title, artist, album, or genre"]'
    ).should('not.have.focus')
    cy.get('[aria-label="Search by song title, artist, album, or genre"]')
      .click()
      .should('be.visible')
      .should('have.focus')
  })
})
