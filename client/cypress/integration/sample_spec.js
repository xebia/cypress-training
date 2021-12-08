/// <reference types="Cypress" />

describe('I am Bigger', () => {
  it('is true', function () {
    expect(false).to.eql(false)
  })
})

describe('I am God', function () {
  it('is true', () => {
    expect(true).to.equal(true)
  })
})

describe('testing with baseURL', () => {
  it('grabs the baseURL', () => {
    cy.visit('/')
  })
})

describe('testing with baseURL', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('does a think', () => {
    expect(true).to.not.equal(false)
    /* ==== Generated with Cypress Studio ==== */
    cy.get('input').clear()
    cy.get('input').type('Nevermind')
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('input').clear()
    cy.get('input').type('Nevermind{enter}')
    cy.get('.mt-2 > .toolbar > .toolbar__content > .toolbar__title').click()
    cy.get('.song-title').should('be.visible')
    cy.get('.layout > :nth-child(1) > .cyan > .btn__content').should(
      'be.visible'
    )
    cy.get('.album-image').should('be.visible')
    /* ==== End Cypress Studio ==== */
  })
})

// describe('a real test', () => {
//   it('visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io');
//     cy.contains('type').click();
//     cy.url().should('include', '/commands/actions');

//     cy.get('.action-email').type('joel@joel.com').should('have.value', 'joel@joel.com');
//   });

//   // it.only('visits the RWA', () => {
//   //   cy.visit('http://localhost:3000')
//   //     .get('#username')
//   //     .type('Tavares_Barrows')
//   //     .get('#password')
//   //     .type('s3cret')
//   //     .get('.MuiButton-label')
//   //     .click();
//   //   cy.contains('Arely K');
//   // });
//   it.only('visits the TabTracker', () => {
//     cy.intercept;
//   });
// });

describe('testing something big', () => {
  it('test ok', () => {
    cy.visit('www.google.nl')
    cy.get('#hplogo').should('be.visible')
  })
})

describe('localhost', () => {
  it('test', () => {
    cy.visit('localhost:8080')
  })
})

/// <reference types="cypress" />

describe('intercepts login response', () => {
  it('test', () => {
    cy.intercept('POST', 'http://localhost:8081/login', {
      statusCode: 403,
      body: { error: 'The login information was incorrect' },
    }).as('login')
    cy.visit('#/login')

    cy.get('input[name="email"').type('joel@joelgrimberg.nl')
    cy.get('input[name="password"').type('pw')

    cy.get('button[class="cyan btn btn--raised theme--dark"]').click()
    cy.wait('@login')
    cy.contains('The login information was incorrect')
  })
})

describe('intercepts albums', () => {
  it.only('tests Intercepting one album via fixture', () => {
    cy.intercept('GET', 'http://localhost:8081/songs', {
      fixture: 'one_album.json',
    }).as('one_album')
    cy.visit('/')
    cy.wait('@one_album')
  })

  it.only('tests retreiving albums', () => {
    let rnd = Math.random().toString(36).substr(2, 5)
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
        {
          id: 3,
          title: 'Drop it',
          artist: '3 Steps Ahead',
          genre: 'Hardcore',
          album: 'Drop it',
          albumImageUrl:
            'https://img.discogs.com/H7zIgOQXI5e7yXB5---U5n1kOXc=/fit-in/303x301/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-17264-1133778698.jpeg.jpg',
          youtubeId: 'KB09paeV_aE',
          lyrics: '',
          tab: '',
          createdAt: '2018-02-13T12:56:24.432Z',
          updatedAt: '2018-02-13T12:56:24.432Z',
        },
        {
          id: 4,
          title: "I Ain't Goin' Out Like That",
          artist: 'Cypress Hill',
          genre: 'Rap',
          album: 'Black Sunday',
          albumImageUrl:
            'https://upload.wikimedia.org/wikipedia/en/b/ba/Cypress_Hill-Black_Sunday.jpg',
          youtubeId: 'q7p-ihYOG5s',
          lyrics: '',
          tab: '',
          createdAt: '2018-02-13T12:56:24.432Z',
          updatedAt: '2018-02-13T12:56:24.432Z',
        },
        {
          id: 5,
          title: 'Way of Life',
          artist: 'Cypress Spring',
          genre: 'Southern Rock',
          album: 'Denim XXL',
          albumImageUrl:
            'http://averagejoesent.com/wp-content/uploads/sites/4/2017/08/CS_DenimXXL_WOLdeluxe-FINAL-COVER.jpg',
          youtubeId: 'ZcOYhHDTO28',
          lyrics: '',
          tab: '',
          createdAt: '2018-02-13T12:56:24.432Z',
          updatedAt: '2018-02-13T12:56:24.432Z',
        },
      ],
    }).as('getSongs')
    cy.visit('/')
    cy.contains(`${rnd}`)
  })
})

// Cypress.Commands.add('login', (email, pw) => {
//   cy.get('a[href="#/login"').click();
//   cy.get('input[name="email"').type(email);
//   cy.get('input[name="password"').type(pw);
//   cy.get('button[class="cyan btn btn--raised theme--dark"]').click();
// });

// describe('Isolation exercises', function () {
//   it('should retrieve songs', function () {
//     cy.server()
//       .route('GET', '/songs', [shelter])
//       .visit('http://localhost:8080')
//       .get('[class=song-artist]')
//       .contains('Nirvana')
//       .should('be.visible')
//       .get('[class=song-title]')
//       .contains('Nevermind')
//       .should('be.visible');
//   });
// });

describe('basic test: register yourself', () => {
  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  let rnd = Math.random().toString(36).substr(2, 5)

  it.only('registers', () => {
    cy.visit('/')
    // question for group: why can't I chain cy.get.contains?
    // documentation
    // lets inspect in devtools
    cy.get('div[class="toolbar__title mr-4"').should('be.visible')
    cy.contains('Nevermind')

    cy.get('a[href="#/register"').click()
    cy.get('input[name="email"]').type(`${rnd}@xebia.com`)
    cy.get('input[name="password"]').type('password')
    cy.get('button[class="cyan btn btn--raised theme--dark"]').click()
    cy.get('button[class="btn btn--flat theme--dark"]').should('be.visible')
  })
})

describe('basic tests: Practicing with assertions', () => {
  it('1. assert that there is no focus on the search field', () => {
    cy.visit('localhost:8080')
    cy.get('input[aria-label="Search by song title, artist, album, or genre"]')
      .should('not.be.focused')
      .click()
      .should('be.focused')
  })

  it('2. assert that the correct default text is shown in the field', () => {
    cy.visit('localhost:8080')
    cy.get('div[class="input-group input-group--text-field"]')
      .get('label')
      .contains('Search by song title, artist, album, or genre')
  })
})

describe('advanced stuff', () => {
  it.only('advanced stuff', () => {
    cy.task('hello_world')
  })
})
