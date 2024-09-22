describe('Page Load', () => {
  it('should display form input text forms with cta button on page load', () => {
    cy.visit('/');
    cy.get('#input-text-field-first-name').should('be.visible')
    cy.get('#input-text-field-last-name').should('be.visible')
    cy.get('.cta-button').should('be.visible')
  })
})

describe('User Interactions - Success', () => {
  it('should show the second step when a first plus last name is entered and cta button is invoked', () => {
    cy.visit('/');
    cy.get('#input-text-field-first-name').type('Colin')
    cy.get('#input-text-field-last-name').type('Johnson')
    cy.get('.cta-button').click()
    cy.contains('Step 2')
  })
})

describe('User Interactions - Failure', () => {
  it('should halt entry to step 2 if name details are not completed', () => {
    cy.visit('/');
    cy.get('#input-text-field-last-name').type('Doe')
    cy.get('.cta-button').should('be.disabled')
  })
})