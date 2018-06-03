describe('Check Input, Update, Remove', () => {
  it('clicks the link "type"', () => {
    cy.visit('http://localhost:8081');
    cy.get(':nth-child(1) > [type="text"]').type('Bulldog Food');
    cy.get('[type="number"]').type('100');
    cy.get('button').click();
    cy.get('.section > .section-form > [type="text"]').clear().type('Cat Food');
    cy.get('.section > .section-form > [type="number"]').clear().type('50');
    cy.get('.section > .section-form > button').click(); 
    cy.get(':nth-child(1) > [type="text"]').type('Bulldog Food');
    cy.get(':nth-child(1) > [type="number"]').type('100');
    cy.get(':nth-child(1) > button').click();
  });
});
