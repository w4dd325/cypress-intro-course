describe('part 2 - add todo', () => {

  it('should allow a user to add a new todo item', () => {
    // Visit the todo page
    cy.visit('/todo');

    // Add a new todo item into the input field and submit
    cy.get('[data-test="new-todo"]').type('Buy milk{enter}');

    // Assert that the new todo appears in the list
    cy.get('.todo-list').should('contain.text', 'Buy milk');
  });

});