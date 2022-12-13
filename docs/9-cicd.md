# Setup Cypress tests in CICD

# Running in Pipeline in Gitlab CI

One of the most powerful ways to run Cypress tests is as part of your CICD process. Get quick feedback running a subset of your tests using mocks during your CI and run sets of E2E tests or Synthetic tests during your CD process.

The picture below shows a typical setup of a CICD pipeline setup.
![Exercise1specfile](./images/cicd.png "CICD overview")

## Exercise: Setup and create a CI/CD workflow using Github Actions or Gitlab CI
> Follow these steps for Github Github Actions
1. Go to [Github](https://www.github.com) Login to your account or create a (free) account
2. Create a new (public or private, does not really mattter) repository for the training
3. Create a .github/workflows directory in the root of project
4. In the .github/workflows directory, create a file named e2e-tests.yml
5. Make a workflow using the official [Cypress Github Action]https://github.com/cypress-io/github-action#examples)
6. Make sure at least one of your tests has stubbed API requests/responses (see `cy.intercept()`)
6. Commit, Push and run your tests on Github.com

## Exercise 2 Setup Cypress Cloud for your project
1. Create new key in Cypress

## (bonus) exercise 2 Save Cypress artifacts (videos)