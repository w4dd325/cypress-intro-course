describe('part 7 - all completed', () => {

  it('should handle "Completed" filter with no todos', () => {

    // Visit the app


    // There is a bug that prevents intereaction with the second todo item.
    // For the sake of this test, we will remove the second todo item.
    // ----
    // Use .click({ force: true }) to bypass visibility
    // This is because the delete button is not visible unless the mouse is over the todo item


    // Check that the remaining todo item and confirm it has been checked


    // Check that the todo item is marked as completed


    // Select the active filter


    // Check that the list is empty


    // Select the completed filter
 

    // Check that the list is not empty


  });

});