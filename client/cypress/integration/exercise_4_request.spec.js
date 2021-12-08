let rnd = Math.random().toString(36).substr(2, 5)
describe('request_issue', () => {
  it('tests the request 🦄', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:8081/register',
      form: true,
      body: {
        email: `${rnd}xjoelxyz@example.com`,
        password: 'testtesttest',
      },
    })
    cy.wait(1000)
    cy.visit('/')
    cy.login(`${rnd}xjoelxyz@example.com`, 'testtesttest')
  })
})
