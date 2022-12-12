# Describe It

To complete this exercise have a look at the following commands:

- [describe](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
- [it](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
- [beforeEach](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
- [before](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
- [afterEach](https://docs.cypress.io/guides/references/best-practices#Using-after-or-afterEach-hooks)
- [after](https://docs.cypress.io/guides/references/best-practices#Using-after-or-afterEach-hooks)
- [cy.log()](https://docs.cypress.io/api/commands/log)

## Exercise: Create a describe block with 3 tests

This exercise is going to teach us how to setup a spec file.
You will learn to work with describe, it, etc.

- create a new spec file with the name `describe-it.spec.cy`
- create in your freshly created spec file a describe block
- and create 2 empty tests within the describe block.

  hint: add ```expect(1).to.equal(1)``` somewhere in your code ;)

- sometimes you want to focus on just one test. Use `.only` somewhere to focus.
- and sometimes you want to skip just one test. Use `.skip` somewhere to ... yes. skip 😅

## Exercise: Work with before and beforeEach

- use both before and beforeEach hooks in your spec file.

## Exercise: Work with after and afterEach

- Run both After and AfterEach hooks.

## Bonus: apply test configuration to your `it` or `describe`

You can apply so called test configuration to your it or describe - block.
A `describe` or `it` - block is implemented like this:
```describe(name, config, fn)```

- use the epic search function on the documentation page to figure out how to add config to your it - block.
- then add default timeout command for your commands
- add a test that will validate your configuration
