# Visual Testing

Cypress is a Test Runner that focusses on functionality. It does not see what a user sees on the
other side of the screen (or browser as you will). \n
Even with it's browser compatability, it checks the functionality of object within each browser, not the
presentation of it. Therefore Cypress has the option to extend the Cypress functionality with [3rd party plugins](https://docs.cypress.io/plugins/).

There are several plugins to use, of which we are going to pick one, and explore how it can be used within
your tests.

## Exercise: Visual Testing Locally

In this excercise you will learn to set up visual testing using a Cypress plugin.
The plugin repo (and information about how to install and use) can be found here:
<https://github.com/palmerhq/cypress-image-snapshot>

Steps to be taken are:

- first we install the required snapshop plugin

  ```bash
  npm install --save-dev cypress-image-snapshot
  ```

  then, we add the following snippets. It is up to you to figure out where
  to put this code ;)

  ```nodejs
  const {
    addMatchImageSnapshotPlugin,
  } = require("cypress-image-snapshot/plugin");

  module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  }
  ```

  ```nodejs
  import { addMatchImageSnapshotCommand } from "cypress-image-snapshot/command";

  addMatchImageSnapshotCommand({
    failureThreshold: 0.03, // threshold for entire image
    failureThresholdType: "percent", // percent of image or number of pixels
    customDiffConfig: { threshold: 0.1 }, // threshold for each pixel
    capture: "viewport", // capture viewport in screenshot
  });
  ```

  now we are all set to start screenshotting and diffing

## Exercise: Setting a baseline for the visual test

Find out how to use the command-function in your test and run your visual test.
A suggestion on how to run a specific test-file from the commandline:

```bash
npx cypress run -s ./cypress/integration/test.js
```

## Setup a new test which compares the outcome with the baseline

write your test and share it with the group

## Visual Testing with Browserstack

Browserstack uses their own 'runners' to run setup the requested environments (operating systems and browsers) so that your test can run on top of that. You can use the 'free tier' which has some 'limitations'.

! a warning: the free plan of Browserstack has some usage limitations on the dashboard / runners.

1. create a free tier Browserstack account
   <https://www.browserstack.com/users/sign_up>

2. install browserstack cli:
   `npm install -g browserstack-cypress-cli`
3. initialize browserstack in your project in your project folder (client-folder)
   `browserstack-cypress init`
4. Fill in the auth, browsers, run_settings values in the browserstack.json file to be able to run your tests. Refer to the configuration options to learn more about all the options you can use in browserstack.json and the possible values that you can mention.
   you can find your auth key here:
   <https://www.browserstack.com/accounts/settings>

5. run `browserstack-cypress run` to run your test
