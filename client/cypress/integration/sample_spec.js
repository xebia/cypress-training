/// <reference types="Cypress" />

describe('I am Bigger', () => {
  it('is true', function () {
    expect(false).to.eql(false);
  });
});

describe('I am God', function () {
  it('is true', () => {
    expect(true).to.equal(true);
  });
});

describe('testing with baseURL', () => {
  it('grabs the baseURL', () => {
    cy.visit('/');
  });
});

describe('testing with baseURL', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it.only('does a think', () => {
    expect(true).to.not.equal(false);
    /* ==== Generated with Cypress Studio ==== */
    cy.get('input').clear();
    cy.get('input').type('Nevermind');
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('input').clear();
    cy.get('input').type('Nevermind{enter}');
    cy.get('.mt-2 > .toolbar > .toolbar__content > .toolbar__title').click();
    cy.get('.song-title').should('be.visible');
    cy.get('.layout > :nth-child(1) > .cyan > .btn__content').should('be.visible');
    cy.get('.album-image').should('be.visible');
    /* ==== End Cypress Studio ==== */
  });
});

describe('a real test', () => {
  it('visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io');
    cy.contains('type').click();
    cy.url().should('include', '/commands/actions');

    cy.get('.action-email').type('joel@joel.com').should('have.value', 'joel@joel.com');
  });

  // it.only('visits the RWA', () => {
  //   cy.visit('http://localhost:3000')
  //     .get('#username')
  //     .type('Tavares_Barrows')
  //     .get('#password')
  //     .type('s3cret')
  //     .get('.MuiButton-label')
  //     .click();
  //   cy.contains('Arely K');
  // });
  it.only('visits the TabTracker', () => {
    cy.server();
    cy.route();
  });
});

describe('testing something big', () => {
  it('test ok', () => {
    cy.visit('www.google.nl');
    cy.get('#hplogo').should('be.visible');
  });
});

describe('localhost', () => {
  it('test', () => {
    cy.visit('localhost:8080');
  });
});

/// <reference types="cypress" />

describe('testing something big', () => {
  it('test ok', () => {
    cy.visit('www.google.nl');
    cy.get('#hplogo').should('be.visible');
  });
});

describe('localhost', () => {
  it('test', () => {
    cy.visit('localhost:8080');
  });
});

// cy.login('some_email','some_password')

Cypress.Commands.add('login', (email, pw) => {
  cy.get('a[href="#/login"').click();
  cy.get('input[name="email"').type(email);
  cy.get('input[name="password"').type(pw);
  cy.get('button[class="cyan btn btn--raised theme--dark"]').click();
});

describe('Isolation exercises', function () {
  it('should retrieve songs', function () {
    cy.server()
      .route('GET', '/songs', [shelter])
      .visit('http://localhost:8080')
      .get('[class=song-artist]')
      .contains('Nirvana')
      .should('be.visible')
      .get('[class=song-title]')
      .contains('Nevermind')
      .should('be.visible');
  });
});

describe('basic tests: Practicing with assertions', () => {
  it('1. assert that there is no focus on the search field', () => {
    cy.visit('localhost:8080');
    cy.get('input[aria-label="Search by song title, artist, album, or genre"]')
      .should('not.be.focused')
      .click()
      .should('be.focused');
  });

  it('2. assert that the correct default text is shown in the field', () => {
    cy.visit('localhost:8080');
    cy.get('div[class="input-group input-group--text-field"]')
      .get('label')
      .contains('Search by song title, artist, album, or genre');
  });
});

describe('basic test: register yourself', () => {
  it.only('registers', () => {
    cy.visit('/');
    cy.get('div[class="toolbar__title mr-4"').should('be.visible');
    cy.contains('Nevermind');
    cy.get('a[href="#/register"').click();
    cy.get('input[name="email"]').type('jgrimberg1@xebia.com');
    cy.get('input[name="password"]').type('password');
    cy.get('button[class="cyan btn btn--raised theme--dark"]').click();
    cy.get('button[class="btn btn--flat theme--dark"]').should('be.visible');
  });
});
