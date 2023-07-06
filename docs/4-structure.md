# STRUCTURE

## Structure your test with Custom Commands

Custom commands work well when you need to describe behavior that is desirable across **all of your tests**. These are **reusable functions** that you can execute multiple times in your test without rewriting the steps, but by feeding different data to it.
Examples in the context of our Tab Tracker application are: 'Login', 'Adding a Song', or using the 'Search' functionality.

Cypress Custom Commands live by default in the cypress/support/commands.js file. You can create several custom commands in one file, but it is also possible to create separate files to group logical commands together. If you do this, you need to add these files to the cypress/support/e2e.js file. This file is loaded before any of the tests are run, ensuring your reusable functions are available for all your tests.

While Custom Commands are stored by default in the cypress/support/commands.js file, it is also possible to just add the command within your spec file. This is useful when you want to create a custom command that is only used in one spec file, and can be a nice way to don't clutter your custom commands file with commands that are only used in one spec file. However, if you want to use the same custom command in multiple spec files, you need to add it to the cypress/support/commands.js file.

## Creating a Custom Command

<!-- div:title-panel -->
<!-- div:left-panel -->

Let's create a Custom Command for the search functionality.

In your cypress/e2e folder create a new spec file called `structure.cy.js` and copy in the code below.

<!-- panels:start -->
<!-- tabs:start -->
<!-- tab: code -->

```javascript
describe('Search actions', function () {
  it('should search on song title', function () {
    cy.visit('http://localhost:8080/');
    cy.search('Drop it');
    cy.get('.song-title').should('contain', 'Drop it');
  });
});
```

<!-- tabs:end -->
<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

Notice that we are calling a custom search function cy.search here. This function can be called as any other command in Cypress. Like `cy.get()` we can now simply invoke (or call) the Custom Command by typing `cy.<custom command>` from within your test file (also called spec-file). In this case our Custom Command is called 'search' and it takes a string to search on as an argument.

Now create a new custom command **within** your spec file

<!-- panels:start -->
<!-- tabs:start -->
<!-- tab: Example of a Custom Command -->

```javascript
Cypress.Commands.add('search', function (input) {
  cy.get('input[aria-label="Search by song title, artist, album, or genre"]')
    .type(input)
    .type('{enter}');
});
```

<!-- tabs:end -->
<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

This command gets the text field on the songs page, selects the text field for input and types in the input that you define when you call this function.
Within the Cypress Documentation the 'output' of a Cypress function is called 'yielding': the yield is the output of a Cypress Command which then can be passed to the next command.
In the example above, the `cy.get()` yields the input field, which is then passed to the `.type()` function.

Save all the changes you've made and (if you haven't already) open the Cypress UI (`npx cypress open`). You should now see your newly created spec file.
Now run the test and see if it works!

![Exercise1specfile](./images/cc_exercise1_screenshot1.png 'Exercise 1: Cypress UI')

## Exercise: Now create a variation and store it in your commands file

<!-- div:title-panel -->
<!-- div:left-panel -->

Within the example, we created a Cypress Command within the spec file itself, so this Cypress Command will not be known to other spec files.
Cypress will search (by default) for Cypress Commands in the cypress/support/commands.js file. So let's create a new Cypress Command in this file.

It's up to you to create a new test in your `structure.cy.js` spec file that: 1. Searches on a artist name in your database 2. Asserts that the artist has been found

<!-- panels:start -->
<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "The Custom Command" tab to open the answer

<!-- tab:Custom Command Login -->

```javascript
//cypress/support/commands.js
Cypress.Commands.add('search', function (input) {
  cy.get('input[aria-label="Search by song title, artist, album, or genre"]')
    .type(input)
    .type('{enter}');
});
```

<!-- tabs:end -->
<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

## Exercise: Now create a variation within a different commands file and import it.

Add another test in your `structure.cy.js` spec file that: 1. Searches on an unknown artist 2. Asserts that the correct error message is shown<br>
Create for this search functionality a Cypress Command in a separate file and import it in your `structure.cy.js` spec file.

Note: For step 4 and 5 you need to reuse the custom command you've just created and only add a new test function.

<!-- panels:start -->
<!-- tabs:start -->
<!-- tab: open variation 👉 -->

- click on the "cypress/support/commands.js" tab to show the Cypress Command <br><br>
- click on the "cypress/support/e2e.js' tab to show how to import the command from another file<br><br>
- click on "cypress/e2e/structure.cy.js" tab to show the test

<!-- tab:Custom Command -->

```javascript
Cypress.Commands.add('search', function (input) {
  cy.get('input[aria-label="Search by song title, artist, album, or genre"]')
    .type(input)
    .type('{enter}');
});
```

<!-- tab:cypress/support/e2e.js -->

```javascript
import './search';
```

<!-- tab:cypress/e2e/structure.cy.js -->

```javascript
it('should show an error message when searching for an unknown artist', function () {
  cy.visit('http://localhost:8080/');
  cy.search('Unknown Artist');
  cy.get('.error-message').should('contain', 'No results found');
});
```

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

## Exercise: Create a Custom Command for logging in

<!-- div:title-panel -->
<!-- div:left-panel -->

Create a new Custom Command for the Login functionality.
You need to cover the following criteria:

1. Your starting position should be from the baseurl of the application.

2. Create a custom command that performs a successful login.

3. Create a minimum of one assertion to verify that you are indeed logged in.

4. Add this reusable function to each test you've created thus far in this workshop. (hint: use the beforeEach step functionality).

5. Re-use this function with different data, including a failed login scenario.

<!-- panels:start -->
<!-- tabs:start -->
<!-- tab: answer -->

- click the Custom Command Login tab to show the Custom Command
- click the test tab to show the Custom Command being used

<!-- tab: Custom Command Login -->

```javascript
Cypress.Commands.add('login', (username, password) => {
  cy.get('input[name="email"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.contains('button', 'Login').click();
  cy.contains('Log Out');
});
```

<!-- tab: the test -->

```javascript
it('should login successfully', function () {
  cy.visit('/');
  cy.contains('Log Out').should('not.exist');
  cy.login('joel@joelgrimberg.nl', 'my_epic_password');
  cy.contains('Log Out');
});
```

<!-- tab: failed scenario -->

```javascript
it('should show failed login error', function () {
  cy.visit('/');
  cy.contains('Log Out').should('not.exist');
  cy.login('wrong username', 'my_epic_password');
  cy.contains('wrong username').should('be.visible');
  cy.contains('Log Out').should('not.exist');
});
```

<!-- tabs:end -->
<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

### If you get stuck

You can find more examples [here](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax) to help you.
