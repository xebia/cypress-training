# COMMANDLINE & CONFIGURATION

You have reached the point to have a chat about the commandline and configuration.

## The Commandline

Within Software Development / Testautomation the 'default' is to use the commandline for starting up
processes, applications, running scripts, etc. When your tests run in a pipeline, that pipeline consists of one or many docker containers with a small operatating system, the application, etc).

To understand Cypress and its environment a bit more, and to have a good startingpoint when you want to
add Cypress to a pipeline, lets do some exercises to get to know it's environment a bit.

### Exercise: in a seperate folder, install an older version of Cypress

1. Setup a seperate folder outside of your project folder
2. Initialize a new NPM project (`npm init -y`) <-- explore what npm init -y does
3. Explore `npm init` without `-y`. What is the difference?
4. Install an older version of Cypress: `npm install cypress@3 --save-dev`. Now explore your package.json
5. Question: what are the 2 ways of updating cypress in this new project? try out both ways! (newest version is 5.2.0)
6. delete this temporary project folder and return to our training-folder (where your /client and /server folders reside)

---

## Exercise: run Cypress (headless) from your commandline (terminal)

Cypress has the option to run 'headless' from your commandline. This means that it will not start a visual runner (which you use when you use `npx cypress open`) but that it will run all the tests and reports in your terminal.

1. From your client folder, run `npx cypress run` . What feedback do you get from the runner? do you understand what it returns?
2. Applications that can be started from the commandline (like Cypress) often use `--help` or `-h` to output information on how to use the application from the commandline. If you run `npx cypress run --help` , you can explore all your options. Often an option has a new 'help' function, which gives you information on how to use that sub-command. Compare the output from these commands: `npx cypress run --help` and `npx cypress --help`
3. Challenge: run cypress from your commandline with Chrome as browser in headless state.
4. Challenge: create a failing test, run it from your commandline and find its screenshot in your project.
