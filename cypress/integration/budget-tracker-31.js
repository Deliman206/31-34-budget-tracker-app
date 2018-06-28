describe('Check Input, Update, Remove', () => {
  it('clicks the link "type"', () => {
    cy.visit('http://localhost:8080');
    cy.get('input.newForm').type('Bulldog Stuff');
    cy.contains('+ Category').click();
    cy.get('input.createForm').type('Dog Food');
    cy.get('input.createFormPrice').type('75');
    cy.contains('Submit').click();
    cy.get('input.newForm').type('Cat Stuff');
    cy.contains('+ Category').click();
    cy.get(':nth-child(3) > .expense-form > .createForm').type('Cat Food');
    cy.get(':nth-child(3) > .expense-form > .createFormPrice').type('50');
    cy.get(':nth-child(3) > .expense-form > button').click();
    cy.get(':nth-child(3) > .expense-form > .createForm').type('Cat Tower');
    cy.get(':nth-child(3) > .expense-form > .createFormPrice').type('75');
    cy.get(':nth-child(3) > .expense-form > button').click();
  });
});
