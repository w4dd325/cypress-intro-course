# cypress-intro-course
Learn Cypress by testing the real-world example to-do app on [example.cypress.io/todo](https://example.cypress.io/todo)!

## Getting started
1. Fork the repo
2. Open the project in VS Code
3. Run ```npm i``` to install all the dependencies

## Guide
Once you have completed the 'getting started' section, you should see a folder structure on the left hand side in VS Code.

Start with the scenario for each part, the fill in the spec file with your actions and assertions.

Scenarios for each spec file can be found in the ```scenarios``` folder.
You will find the spec files for each test under the ```e2e/UI``` folder.
And you will find examples of working scripts in the ```Examples``` folder.
All other folders are part of the default setup.

Once you have read the scenario file, you can launch the test suite UI using ```npx cypress open```.

### Cypress Studio:
Cypress Studio has been added to the config file so that you can use the record reply feature for recording your actions and assertions. 

To use this feature, simply add a cy.visit and run the script via the dashboard. Once the script successfully navigates to that page, you can then clickt he magic wand icon to start recording.

More information can be read here: 
https://www.cypress.io/blog/cypress-studio-a-beginners-guide

