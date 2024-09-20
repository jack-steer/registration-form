describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('#input-text-field-first-name').type('Colin')
    cy.get('#input-text-field-last-name').type('Johnson')
    cy.get('.cta-button').click()
  })
})