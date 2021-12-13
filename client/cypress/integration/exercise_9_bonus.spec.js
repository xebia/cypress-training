/// <reference types="Cypress" />

import { sumAll, addFirstArgumentToRestThenSumTheRest } from '../../src/sum_all'
// here I import the 2 functions from the sum_all file

/*  🚨 Pattern detected 🚨
  only use the UI for logging in when you want to test the login. if not, use cy.request to bypass the login-ui. This will make your tests run faster.
*/

describe('bonus exercises', () => {
  it('Exercise: Skipping the login screen', () => {
    cy.log('')
    cy.request({
      method: 'POST',
      url: 'http://the-internet.herokuapp.com/authenticate',
      form: true,
      body: {
        username: 'tomsmith',
        password: 'SuperSecretPassword!',
      },
    })

    cy.visit('http://the-internet.herokuapp.com/secure')
    cy.contains(
      'Welcome to the Secure Area. When you are done click logout below.'
    )
  })

  it('Exercise: Retrieving data through an API', () => {
    cy.request('https://reqres.in/api/users?page=1').then((resp) => {
      cy.log(resp.body.data[5].first_name)
      cy.log(resp.body.data[5].email)
    })
  })

  it('Exercise: Setting up the unit tests', () => {
    expect(sumAll(1, 9)).to.equal(10)
    expect(sumAll(1, 8)).to.not.equal(10)
    expect(sumAll(1, 2, 3)).to.eq(6)
  })

  it('Exercise: Finding the bug in sum_all.js (bonus exercise)', () => {
    // als teller bij 2e positie begint (i=1), dan wordt 2 bij 4 opgeteld en krijg je 3 + 6 = 9
    expect(addFirstArgumentToRestThenSumTheRest(2, 3, 4)).to.eq(11)
  })
})
