it("should pass the audits", function () {
    cy.visit('https://www.google.com');

    const customSettings = {
      performance: 50,
      accessibility: 70,
      "best-practices": 60,
      seo: 70,
      pwa: 50,
    }
    cy.lighthouse(customSettings);
    // cy.pa11y();
  });