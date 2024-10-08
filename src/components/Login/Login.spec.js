// Login.spec.js (Cypress example)
describe('Login Page', () => {
  it('should allow a user to log in', () => {
    cy.visit('/login');
    cy.get('input#loginId').type('admin');
    cy.get('input#passwordField').type('password123');
    cy.get('select#userRole').select('1');
    cy.get('button.btn-success').click();
    cy.url().should('include', '/admin-dashboard');
  });
});
