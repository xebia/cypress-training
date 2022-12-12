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

## Bonus: use Cypress Grab plugin

- use the Cypress Grab plugin to filter the tests you want to run in an Headless Test Run (ie. to use as smoke test)
