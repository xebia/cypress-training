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
6. Commit, Push and run your tests on Gitub.com

> Follow these steps for Gitlab CI
1. Go to <https://about.gitlab.com/free-trial/>
1. Login to your account or create a (free) account
1. Create a new project/repository
1. Clone repo on your machine
1. Run `npm init –y` 
1. Install Cypress in your project
1. Create a test
1. Create a `.gitlab-ci.yml` file
1. Run your tests on Gitlab.com