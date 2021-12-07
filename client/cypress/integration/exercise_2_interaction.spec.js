/// <reference types="Cypress" />

describe('exercise 2: Interaction', () => {
  it('should add a new song', () => {
    cy.visit('/')
    cy.get('a[href="#/songs/create"]').click()
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
    cy.contains('Create Song').click()
  })

  it('should edit a song', () => {
    cy.visit('/')
    cy.wait(1000)
    // cy.get('a[href="#/songs/1"]').click()
    cy.wait(1000)
    // cy.get('a[href="#/songs/1/edit"]').click()
    cy.wait(1000)
    cy.visit('/#/songs/1/edit')
    cy.get('input[aria-label="Title"]')
      .click()
      .clear()
      .type('Quiet Germain Boys')
    cy.get('textarea[aria-label="Tab"]')
      .click()
      .clear()
      .type('Quiet Germain Tabs')
    cy.get('textarea[aria-label="Lyrics"]')
      .click()
      .clear()
      .type('Quiet Germain Tabs')
    cy.contains('Save Song').click()
    cy.contains('Quiet Germain Boys')
  })

  it.only('should assert some more', () => {
    cy.visit('/')
    cy.get(
      'input[aria-label="Search by song title, artist, album, or genre"]'
    ).should('not.have.focus')
    cy.get('input[aria-label="Search by song title, artist, album, or genre"]')
      .click()
      .should('have.focus')
  })
})
