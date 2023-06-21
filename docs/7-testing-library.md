# Testing Library

> The more your tests resemble the way your software is used, the more confidence they can give you.
> [Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)

You want to write maintainable tests that give you high confidence that your components are working for your users. As a part of this goal, you want your tests to avoid including implementation details so refactors of your components (changes to implementation but not functionality) don't break your tests and slow you and your team down. Testing Library will give us utilities to query the DOM in a way that is similair to how our users uses it. As another benefit it will enable your team to drive testability by building accessibile user interfaces.

## Install Testing Library to your project

### Exercise 1.Setup testing library commands

In this exercise we're going to have a look on how we can setup Testing Library for Cypress.

Because Cypress version 12 is just a couple days old; we will run into a incompaitability issue between Testing Library and Cypress. When you try to follow the installation instruction using NPM it will throw an error:

```bash
Could not resolve dependency:
npm ERR! peer cypress@"^2.1.0 || ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0 || ^9.0.0 || ^10.0.0 || ^11.0.0" from @testing-library/cypress@8.0.7
npm ERR! node_modules/@testing-library/cypress
npm ERR!   dev @testing-library/cypress@"*" from the root project
```

[For more information about this issue checkout the Github PR](https://github.com/testing-library/cypress-testing-library/pull/238)

We can work around this by using Yarn as a package manager (yarn is a bit less strict then NPM) and manually putting the dependency inside our package.json file or downgrading Cypress to version 11. For now we're going to take the easy route and just downgrade the version (if you're living on the edge and want to experiment; you could also try to update using Yarn manually).

1. Open package.json inside your `/client` folder
2. Change the version of cypress from `12.0.2` to `11.2.0`
3. run `npm install` inside of your `/client` folder

   > Now you should have version 11 of Cypress

4. Install testing library: `npm install --save-dev @testing-library/cypress`
5. Import all new Testing library commands in your commands.js file by adding this import `import '@testing-library/cypress/add-commands'`

### Exercise 2. Test the sign-up form using queries from Testing Library

[If you like to have an overview of all available queries checkout the docs!](https://testing-library.com/docs/queries/about)

1. Write a test which visits `/register` and registers an new user
2. check if the new user can login as well

### Bonus: refactor the test from exercise 3
