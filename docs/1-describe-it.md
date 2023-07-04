# Describe It

To complete this exercise have a look at the following commands:

- [describe](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
- [it](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
- [beforeEach](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
- [before](https://docs.cypress.io/guides/references/bundled-libraries#Mocha)
- [afterEach](https://docs.cypress.io/guides/references/best-practices#Using-after-or-afterEach-hooks)
- [after](https://docs.cypress.io/guides/references/best-practices#Using-after-or-afterEach-hooks)
- [cy.log()](https://docs.cypress.io/api/commands/log)

This exercise is going to teach us how to structure your tests.
You will learn to work with the 'components' that create the skelleton for your tests.

When you have opened Cypress for the first time, cypress created some files and folders for you.
From within the location where your opened the Cypress GUI, you can find the following files and folders:

- cypress.config.js (cypress configuration file)
- cypress/e2e (default folder containing your e2e tests)
- cypress/support (default folder containing your support files)
- cypress/plugins (default folder containing your plugins)
- cypress/commands (default folder containing your custom commands)
- cypress/fixtures (default folder containing your fixtures, data for your tests)

## Exercise 1: Create a describe block with 3 tests

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

- create a new e2e spec file with the name `describe-it.spec.cy`
- create in your freshly created spec file a describe block
- and create 2 empty tests within the describe block.

  hint: add `expect(1).to.equal(1)` somewhere in your code ;)

- sometimes you want to focus on just one test. Use `.only` somewhere to focus.
- and sometimes you want to skip just one test. Use `.skip` somewhere to ... yes. skip 😅

<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript" tab to open the answer

<!-- tab:javascript -->

```js
describe('a nice description', () => {
  it('should do an assert', () => {
    expect(1).to.equal(1);
  });

  it.only('should be the only test to run', () => {
    expect(true).not.to.equal(false);
  });

  it.skip('should be skipped', () => {
    expect(true).not.to.equal(false);
  });
});
```

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

## Exercise 2: Work with before and beforeEach

- use both before and beforeEach hooks in your spec file.

<!-- div:right-panel -->
<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript ex2" tab to open the answer

<!-- tab:javascript ex2 -->

```js
describe('a nice description', () => {
  before(() => {
    cy.log('this command runs once before all tests within the describe-block');
  });

  beforeEach(() => {
    cy.log('this command runs before each test within the describe-block');
  });
});
```

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

## Exercise 3: use a global before and beforeEach

Within Cypress you can use a global before and beforeEach hook, which will then be executed within all your test files.
It can be done by adding a before() or beforeEach hook to the support/e2e.js file.

It is your job to figure out how to do this.

<!-- div:right-panel -->
<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript ex3" tab to open the answer

<!-- tab:javascript ex3 -->

```js
// e2e.js
before(() => {
  cy.log('🚶‍♂️ from before in e2e.js');
});

beforeEach(() => {
  cy.log('🚶‍♂️ from beforeEach in e2e.js');
});
```

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

## Exercise 4: Work with after and afterEach

- Run both After and AfterEach hooks.

<!-- div:right-panel -->
<!-- tabs:start -->
<!-- tab: open answer 👉 -->
<!-- tab:javascript ex4 -->

```js
describe('a nice description', () => {
  it('should do an assert', () => {
    expect(1).to.equal(1);
  });

  afterEach(() => {
    cy.log('this command runs after each test within the describe-block');
  });

  after(() => {
    cy.log('this command runs once after all tests within the describe-block');
  });
});
```

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->

## Bonus: apply test configuration to your `it` or `describe`

You can apply so called test configuration to your it or describe - block.
A `describe` or `it` - block is implemented like this:
`describe(name, config, fn)`

- use the epic search function on the documentation page to figure out how to add config to your it - block.
  you can find the documentation page [here](https://docs.cypress.io/api/table-of-contents)
- then add default command timeout configuration (defaultCommandTimeout)
- add a test that will validate your configuration

<!-- div:right-panel -->
<!-- tabs:start -->
<!-- tab: open answer 👉 -->

click on the "javascript bonus" tab to open the answer

<!-- tab:javascript bonus -->

```js
describe('a nice description', { defaultCommandTimeout: 10000 }, () => {
  it('should do an assert', { defaultCommandTimeout: 10000 }, () => {
    expect(1).to.equal(1);
  });
});
```

<!-- tabs:end -->

<!-- panels:start -->
<!-- div:title-panel -->
<!-- div:left-panel -->
