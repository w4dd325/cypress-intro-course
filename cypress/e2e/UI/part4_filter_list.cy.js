describe('part 4 - filter list', () => {

  beforeEach(() => {
    //Note:
    // Has to be before each test because cypress clears local storage
    // before each test, and the app uses local storage to store the todos

    // Visit the todo page


    // Add a new todo item into the input field and submit


    // Assert that the new todo appears in the list


    // Mark the todo item as completed


  });

  it('should show all todos by default', () => {
    // Assert that all todos are shown

  });

  it('should filter to show only active todos', () => {
    // Select the 'active' filter

    // Assert that only active todos are shown

  });

  it('should filter to show only completed todos', () => {
    // Select the 'completed' filter

    // Assert that only completed todos are shown

  });

});