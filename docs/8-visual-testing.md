# Visual Testing

Cypress is a Test Runner that focusses on functionality. It does not see what a user sees on the
other side of the screen (or browser as you will). \n
Even with it's browser compatability, it checks the functionality of object within each browser, not the
presentation of it. \n Therefore Cypress has the option to extend the Cypress functionality with [3rd party plugins](https://docs.cypress.io/plugins/).

There are several plugins to use, of which we are going to pick one, and explore how it can be used within
your tests.

## Exercise: Visual Testing Locally

In this excercise you will learn to set up visual testing using a Cypress plugin.
The plugin repo (and information about how to install and use) can be found here:
<https://github.com/FRSOURCE/cypress-plugin-visual-regression-diff>

Steps to be taken are:

- first we install the required cypress-plugin-visual-regression-diff package

  ```bash
  npm install --save-dev cypress-plugin-visual-regression-diff
  ```

  then, we add the following snippets to our commands.js

  ```nodejs
  require("@frsource/cypress-plugin-visual-regression-diff");
  ```

And then add merge the following configuration in your cypress.config.js

```nodejs
// typescript / ES6
const { defineConfig } = require('cypress');
const { initPlugin } = require('@frsource/cypress-plugin-visual-regression-diff/plugins');
export default defineConfig({
  // initPlugin must be called in the section where it is used: e2e or component
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },
  },
});

```

now we are all set to start screenshotting and diffing

## Exercise 1: Setting a baseline for the visual test

Find out how to use the command-function in your test and run your visual test. Make sure it has a certain threshold to make sure your tests are not getting really flaky.

## Exercise 2: Add dynamic content to a page

- Add the following code on line `12` of the file `Index.vue`:

```html
<img
  alt="random-movie-poster"
  src="https://api.lorem.space/image/movie?w=150&h=220"
/>
```

- Save the file and look what happens in the browser.
- Refresh a couple of times. You'll see that each time a different image is shown.
- Run your visual regression test again.
  No matter how often you run it, it will continue to fail, because there is a different visual each time.

1. Find a way how to fix the test
2. let's discuss different ways to address this
