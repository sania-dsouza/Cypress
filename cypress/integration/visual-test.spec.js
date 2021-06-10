it('Should display the Google page', () => {
    cy.visit('https://www.google.com');
    cy.compareSnapshot('Google', {
      capture: 'fullPage',
      errorThreshold: 0.1
    });
  });