describe('sample test', /* {
  // Customizing retry attempts for a suite of tests
  retries: {
    runMode: 2,
    openMode: 1
  }
}, */ function () {
    it('opens google and search for text', /* {
    // Customize retry attempts for an individual test
    retries: {
      runMode: 2,
      openMode: 1
    }
  }, */
      function () {
        cy.visit('/')
        cy.fixture('searchTerms').then((searchTerms) => {
          cy.get('input[nae="q"]').type(searchTerms.searchTerm1)
        })
        cy.get('input[name="btnK"]', { timeout: 1000 }).first().click({ force: true })
        cy.percySnapshot()
      })
  })
