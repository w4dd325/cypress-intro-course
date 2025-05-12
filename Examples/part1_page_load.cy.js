describe('part 1 - page load', () => {

  it('should load the todo page with expected elements', () => {
    // Visit the todo page
    cy.visit('/todo');

    // Check that the main heading or title has the text 'todos'
    cy.get('h1').should('have.text', 'todos');

    // Check an input field exists
    cy.get('[data-test="new-todo"]').should('be.visible');

  });

});
