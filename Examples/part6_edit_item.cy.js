describe('part 6 - edit item', () => {

  it('should allow editing an existing todo item', () => {

    // Visit the todo page
    cy.visit('/todo');

    // Add a new todo item into the input field and submit
    cy.get('[data-test="new-todo"]').type('Original Task{enter}');

    // Assert that the new todo appears in the list
    cy.get('.todo-list').should('contain.text', 'Original Task');

    // Double-click or use another trigger to enable editing
    cy.contains('.todo-list li', 'Original Task').dblclick();

    // Clear the input field to remove the original text
    cy.get('.edit').clear('');

    // Edit the task text
    cy.get('.edit').type('Updated Task{enter}');

    // Assert the updated text is shown
    cy.get('.todo-list li').should('contain.text', 'Updated Task');

    // Assert the original text is not shown anymore
    cy.get('.todo-list li').should('not.contain.text', 'Original Task');

  });

});