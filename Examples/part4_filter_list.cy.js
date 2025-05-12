describe('part 4 - filter list', () => {

  beforeEach(() => {
    //Note:
    // Has to be before each test because cypress clears local storage
    // before each test, and the app uses local storage to store the todos

    // Visit the todo page
    cy.visit('/todo');

    // Add a new todo item into the input field and submit
    cy.get('[data-test="new-todo"]').type('Example completed todo{enter}');

    // Assert that the new todo appears in the list
    cy.get('.todo-list').should('contain.text', 'Example completed todo');

    // Mark the todo item as completed
    cy.contains('.todo-list li', 'Example completed todo')
      .find('input[type="checkbox"]')
      .check();
  });

  it('should show all todos by default', () => {
    // Assert that all todos are shown
    cy.get('.todo-list li').should('have.length', 3);
  });

  it('should filter to show only active todos', () => {
    // Select the 'active' filter
    cy.get('a[href="#/active"]').click();
    // Assert that only active todos are shown
    cy.get('.todo-list li').should('have.length', 2);
  });

  it('should filter to show only completed todos', () => {
    // Select the 'completed' filter
    cy.get('a[href="#/completed"]').click();
    // Assert that only completed todos are shown
    cy.get('.todo-list li').should('have.length', 1);
  });

});