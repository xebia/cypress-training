# DRY - using the Cypress Session

> Do not repeat yourself

Testautomation does not only mean you can automate your tests, but also that you can automate your tests in a way that you can reuse parts of your test. This is called DRY (Don't Repeat Yourself).

Much has been written about DRY and how to implement it in your tests. In this exercise we're going to have a look at how we can use the Cypress Session to make our tests more DRY.

To complete this exercise have a look at the following command:

- [cy.session()](https://docs.cypress.io/api/commands/session.html)

It can be quite a time consuming exercise to play the login-script in your spec file on each test (so, on each 'it'). The Cypress Session can help you with this by only logging in once for all your testcases, store the session or cookies, and reuse that session for all your tests. This is what we are trying to achieve in this exercise.

## Exercise 1. Using the Cypress Session

The next exercise can be a challenge. You will need to use the Cypress Session to make your tests more DRY. Create a new spec file with a minimum of 2 tests inside that spec file. Then use the cy.session() to only login once for all your testcases.
