# INTERACTION

To complete this exercise have a look at the following commands:

- [cy.get()](https://docs.cypress.io/api/commands/get.html)
- [cy.click()](https://docs.cypress.io/api/commands/click.html)
- [cy.type()](https://docs.cypress.io/api/commands/type.html)
- [cy.last()](https://docs.cypress.io/api/commands/last.html)
- [cy.should()](https://docs.cypress.io/api/commands/should.html)
- [cy.contains()](https://docs.cypress.io/api/commands/contains.html)
- [cy.parent()](https://docs.cypress.io/api/commands/parent.html)
- [cy.scrollIntoView()](https://docs.cypress.io/api/commands/scrollIntoView)
- [cy.find()](https://docs.cypress.io/api/commands/find.html)
- [cy.siblings()](https://docs.cypress.io/api/commands/siblings.html)

## Exercise 1: Adding a new song

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

**Let's create our first Song and validate it is shown on the first page.**

- On the Songs page click the + button to create a new Song
- First thing you should do is validate that you are on the right page, do this by checking if the button is visible
- Create a song by filling in all the fields, they are all mandatory, click the button and validate that the song is created on the first page.
- Tip: use the `last` command because your song will be the last one in the list

<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript" tab to open the answer

<!-- tab:javascript 1 -->

```js
it('should create a new song', () => {
  cy.get('a[href="#/songs/create"]').click();
  cy.url().should('include', '/songs/create');
  cy.get('#sngTitle').type('My Song');
  cy.get('#sngArtist').type('My Artist');
  cy.get('#sngAlbum').type('My Song Album');
  cy.get('#sngGenre').type('My Song Genre');
  cy.get('#sngAlbumImg').type('My Album Image');
  cy.get('#sngYoutube').type('My youtube link');
  cy.get('#sngTab').type('My Tab Music');
  cy.get('#sngLyrics').type('My Lyrics');

  cy.contains('Create Song').click();

  cy.contains('My Song').should('be.visible');

  cy.visit('/');
});
```

<!-- tabs:end -->
<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

## Exercise 2: Editing a song

Let's try to open the edit page for the song we've just added.

- Given that we know the song name, we should be able to locate the title on the page. To limit the results to a specific type of elements we can use the `contains`-function. Try to limit your search to `div`-elements where the `class`-attribute has the value `song-title`.
- The `contains`-function will return the element that contains our song name. However, we want to select the button to open the song details. Figure out how to find the link to the details page of the correct song.
- Once we have the song details page open, click the edit button
- Update the details of the song and save your changes

<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript" tab to open the answer

<!-- tab:javascript 2 -->

```js
it('edits a song', () => {
  cy.get('.song').first().contains('View').click();
  cy.get('a').contains('Edit').click();

  cy.get('[aria-label=Title]').clear().type('My edited Title');
  cy.get('[aria-label=Artist]').clear().type('My edited Artist');
  cy.get('[aria-label=Album]').clear().type('My edited Song Album');
  cy.get('[aria-label=Genre]').clear().type('My edited Song Genre');
  cy.get('[aria-label="Album Image Url"]')
    .clear()
    .type('My Album Image Edited');
  cy.get('[aria-label="YouTube ID"]').clear().type('My edited youtube link');
  cy.get('[aria-label=Tab]').clear().type('My edited Tab Music');
  cy.get('[aria-label=Lyrics]').clear().type('My edited Lyrics');
  cy.contains('Save Song').click();

  cy.contains('My edited Title').should('be.visible');
});
```

<!-- tabs:end -->
<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

### Deleting your testdata

If you want to get your database to it's initial state, go to
<http://localhost:8081/reset> .

## Exercise 3: Practicing with more assertions

<!-- div:title-panel -->
<!-- div:left-panel -->

Cypress bundles a well-known Javascript assertion library, [Chai](https://docs.cypress.io/guides/references/assertions.html), to use in your tests. Try to create a test that does the following assertions:

- Assert that there is no focus on the search field
- Assert that the correct default text is shown in the field
- Assert that the field gets focus when clicked

⚠️ A discussion can be held on weather assertions like these 3 👆 should be part of component tests or unit tests. For the sake of learning Cypress we
add them to this training.

<!-- panels:start -->
<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript" tab to open the answer

<!-- tab:javascript 3 -->

```js
it('asserts Search', () => {
  cy.get('input[aria-label="Search by song title, artist, album, or genre"]')
    .should('not.be.focused')
    .should('contain.text', '')
    .click();
  cy.get(
    'input[aria-label="Search by song title, artist, album, or genre"]',
  ).should('be.focused');
});

it('asserts Search', () => {
  cy.contains('View').invoke('text').should('include', 'View');
  cy.screenshot();
});
```

<!-- tabs:end -->
<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

### If you get stuck

On the create page almost every element has an id, try to use the CSS-selector id and you will find this exercise a walk in the park
Have a look at this page if you want to refer to all the possible [css selectors](https://www.w3schools.com/cssref/css_selectors.asp).

## Bonus assignment

<!-- div:title-panel -->
<!-- div:left-panel -->

Install [faker](https://fakerjs.dev/) and use it when editing an existing song.

<!-- panels:start -->
<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "bonus" tab to open the answer

<!-- tab:installing faker  -->

```bash
npm install @faker-js/faker
```

<!-- tab:using faker  -->

```js
import { faker } from '@faker-js/faker';

it('should edit a song using faker', () => {
  const song = faker.music.songName();

  cy.get('.song').first().contains('View').click();
  cy.get('a').contains('Edit').click();

  cy.get('[aria-label=Title]').clear().type(song);
  cy.get('[aria-label=Artist]').clear().type('My Artist Edited');
  cy.get('[aria-label=Album]').clear().type('My Song Album Edited');
  cy.get('[aria-label=Genre]').clear().type('My Song Genre Edited');
  cy.get('[aria-label="Album Image Url"]')
    .clear()
    .type('My Album Image Edited');
  cy.get('[aria-label="YouTube ID"]').clear().type('My youtube link Edited');
  cy.get('[aria-label=Tab]').clear().type('My Tab Music Edited');
  cy.get('[aria-label=Lyrics]').clear().type('My Lyrics Edited');
  cy.contains('Save Song').click();

  cy.contains(song).should('be.visible');
});
```

<!-- tabs:end -->
