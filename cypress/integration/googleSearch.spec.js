describe('sample test', function () {
  it('opens google and search for text', function () {
    cy.visit('/')
    cy.fixture('searchTerms').then((searchTerms) => {
      cy.get('input[name="q"]').type(searchTerms.searchTerm1)
    })
    cy.get('input[name="btnK"]', { timeout: 1000 }).first().click({ force: true })
  })
})
