describe('part 3 - complete item', () => {

  it('should allow a user to mark a todo item as complete', () => {

    // Visit the todo page
    cy.visit('/todo');

    // Add a new todo item into the input field and submit
    cy.get('[data-test="new-todo"]').type('Make a cup of tea{enter}');

    // Assert that the new todo appears in the list
    cy.get('.todo-list').should('contain.text', 'Make a cup of tea');

    // Mark the todo item as completed
    cy.contains('.todo-list li', 'Make a cup of tea')
      .find('input[type="checkbox"]')
      .check();

    // Assert that the todo item is marked as completed
    cy.contains('.todo-list li', 'Make a cup of tea')
      .should('have.class', 'completed')
      .find('input.toggle')
      .should('be.checked');

    // Consider code improvement by using a variable for the todo text
    // const todoText = 'Make a cup of tea';
    // cy.get('[data-test="new-todo"]').type(`${todoText}{enter}`);

  });

});