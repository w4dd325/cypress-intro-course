describe('part 5 - clear completed items', () => {

  it('should clear completed todos when clicking "Clear Completed"', () => {

    // Visit the todo page
    cy.visit('/todo');

    // Add a new todo item into the input field and submit
    cy.get('[data-test="new-todo"]').type('Example completed todo{enter}');

    //Add another todo item and submit
    cy.get('.todo-list').should('contain.text', 'Example completed todo');

    // Mark the first todo item as completed
    cy.contains('.todo-list li', 'Example completed todo')
      .find('input[type="checkbox"]')
      .check();

    // Click the "Clear Completed" button;
    cy.get('.footer > .clear-completed').click();

    // Check that only the active todo items remains
    cy.get('.todo-list li').should('have.length', 2);

    // Verify the completed task is gone
    cy.get('.todo-list li').should('not.contain.text', 'Example completed todo');
  });

});