/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)

  on('task', { downloadFile }),
    on('task', {
      hello_world() {
        console.log('\x1b[36m%s\x1b[0m', 'hello world')

        return null
      },
    }),
    on('before:browser:launch', (browser = {}, launchOptions) => {
      // `args` is an array of all the arguments that will
      // be passed to browsers when it launches
      console.log(launchOptions.args) // print all current args

      if (browser.family === 'chromium' && browser.name !== 'electron') {
        // auto open devtools
        launchOptions.args.push('--auto-open-devtools-for-tabs')
      }

      if (browser.family === 'firefox') {
        // auto open devtools
        launchOptions.args.push('-devtools')
      }

      if (browser.name === 'electron') {
        // auto open devtools
        launchOptions.preferences.devTools = true
      }

      // whatever you return here becomes the launchOptions
      return launchOptions
    })
}
