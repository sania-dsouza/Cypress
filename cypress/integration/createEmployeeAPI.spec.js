describe('create an employee', function () {
  it('creates an employee with given test data using POST method', function () {
    cy.request({
      method: 'POST',
      url: 'http://dummy.restapiexample.com/api/v1/create',
      body: {
        name: 'Peter Parker',
        salary: '100,000',
        age: '38'
      },
      failOnStatusCode: false
    }).then((resp) => {
      cy.writeFile('cypress/fixtures/employeeData.json', resp.body)
    })
  })
})
