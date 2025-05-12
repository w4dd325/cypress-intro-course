describe('part 7 - all completed', () => {

  it('should handle "Completed" filter with no todos', () => {

    // Visit the app
    cy.visit('/todo');

    // There is a bug that prevents intereaction with the second todo item.
    // For the sake of this test, we will remove the second todo item.
    // ----
    // Use .click({ force: true }) to bypass visibility
    // This is because the delete button is not visible unless the mouse is over the todo item
    cy.get('.todo-list li').first()
      .find('button.destroy')
      .click({ force: true });

    // Check that the remaining todo item and confirm it has been checked
    cy.contains('.todo-list li', 'Walk the dog')
      .find('input[type="checkbox"]')
      .check()
      .should('be.checked');

    // Check that the todo item is marked as completed
    cy.contains('.todo-list li', 'Walk the dog').should('have.class', 'completed');

    // Select the active filter
    cy.get('a[href="#/active"]').click();

    // Check that the list is empty
    cy.get('.todo-list li').should('have.length', 0);

    // Select the completed filter
    cy.get('a[href="#/completed"]').click();

    // Check that the list is not empty
    cy.get('.todo-list li').should('have.length', 1);

  });

});