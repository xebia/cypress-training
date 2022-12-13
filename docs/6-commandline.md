# COMMANDLINE & CONFIGURATION

You have reached the point to have a chat about the commandline and configuration.

## The Commandline

Within Software Development / Testautomation the 'default' is to use the commandline for starting up
processes, applications, running scripts, etc. When your tests run in a pipeline, that pipeline consists of one or many docker containers with a small operatating system, the application, etc).

To understand Cypress and its environment a bit more, and to have a good startingpoint when you want to
add Cypress to a pipeline, lets do some exercises to get to know it's environment a bit.

## Exercise: run Cypress (headless) from your commandline (terminal)

Cypress has the option to run 'headless' from your commandline. This means that it will not start a visual runner (which you use when you use `npx cypress open`) but that it will run all the tests and reports in your terminal.

1. From your client folder, run `npx cypress run` . What feedback do you get from the runner? do you understand what it returns?
2. Applications that can be started from the commandline (like Cypress) often use `--help` or `-h` to output information on how to use the application from the commandline. If you run `npx cypress run --help` , you can explore all your options. Often an option has a new 'help' function, which gives you information on how to use that sub-command. Compare the output from these commands: `npx cypress run --help` and `npx cypress --help`
3. Challenge: run cypress from your commandline with Chrome as browser in headless state.
4. Challenge: create a failing test, run it from your commandline and find its screenshot in your project.


## Exercise: add the BaseURL in your Cypress Configuration File

- Add the baseUrl to your cypress config file and use this baseURL within your tests
- Overwrite your baseurl when you run Cypress in headless Mode

## Exercise: automate the starting of the Client **before** you start your Cypress Tests from CLI

One of the challenges of setting up your tests is to start the client **before** you start your tests.
When you start the Client, and the Client is not ready (yet) to accept calls (ie. via a browser), the Cypress tests can fail.
So how does Cypress know the Client is ready to accept requests (via the browser)?

NPM package start-server-and-test to the resque (https://www.npmjs.com/package/start-server-and-test)

When configured within your Client repository, it can handle starting the client **after which** it will start the `npx cypress run` - command.

The same setup can be made for starting up the Client **after which** you run `npx cypress open`.
When the `npx cypress open` command is called before the baseUrl is ready, Cypress will alert that it cannot find a running server (in our case: a running client)

1. install start-server-and-test
2. configure start-server-and-test within your package.json


## Bonus: use Cypress Greb plugin

1. use the [Cypress Greb plugin](https://github.com/cypress-io/cypress/tree/develop/npm/grep) to filter the tests you want to run in an Headless Test Run (ie. to use as smoke test)
2. configure your start-server-and-test command to **only** run the frontend-tests from CLI
