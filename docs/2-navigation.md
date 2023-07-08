# NAVIGATION

For our first test we are going to perform some basic actions with Cypress. We are going to open our application and make sure that we've landed on the correct page.

Cypress works with `Commands`. These let you interact with your application as a user normally would using a browser. You can perform navigation actions, type in text and create assertions.

To complete this exercise you will need to use at least the following commands:

- [cy.visit()](https://docs.cypress.io/api/commands/visit.html)
- [cy.get()](https://docs.cypress.io/api/commands/get.html)
- [cy.should()](https://docs.cypress.io/api/commands/should.html)

## If you get stuck

You can find the three Commands used in this exercise in the Cypress API documentation. Use this documentation to complete your exercise.
<https://docs.cypress.io/api/table-of-contents>

## Exercise 1: navigate to the of the TabTracker

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

Navigate to the main page by using `cy.visit()` to open our Tab Tracker application.

<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript" tab to open the answer

<!-- tab:javascript 1 -->

```js
describe('a nice description', () => {
  it('should visit the TabTracker', () => {
    cy.visit('http://localhost:8080');
  });
});
```

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

## Exercise 2: assert that the search bar is visible

Get a (unique) element on the page and assert that it is vissible.
Use `cy.get()` to select an element on the page.

<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript" tab to open the answer

<!-- tab:javascript 2 -->

```js
describe('a nice description', () => {
  it('should visit the TabTracker', () => {
    cy.visit('http://localhost:8080');
    cy.get(
      'input[aria-label="Search by song title, artist, album, or genre"]',
    ).should('be.visible');
  });
});
```

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

## Exercise 3: Assert that the search bar contains certain attributes

Use `cy.should()` to assert that the element is represented according to your expectations.

<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript" tab to open the answer

<!-- tab:javascript 3 -->

```js
describe('a nice description', () => {
  it('should assert a search bar attribute', () => {
    cy.visit('/');
    cy.get('input')
      .should('be.visible')
      .should(
        'have.attr',
        'aria-label',
        'Search by song title, artist, album, or genre',
      );
  });
});
```

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->
