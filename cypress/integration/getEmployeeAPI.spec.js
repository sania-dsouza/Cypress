describe('get created employee data', function () {
  it('reads employee data based on the id', function () {
    cy.fixture('employeeData.json').then((employeeData) => {
      cy.request({
        method: 'GET',
        url: 'http://dummy.restapiexample.com/api/v1/employee/' + employeeData.data.id
      }).then((resp) => {
        expect(employeeData.data.name).eq('Peter Parker')
      })
    })
  })
})
