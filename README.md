# AutomationBootcamp-Cypress-Assignment
Davina Scott
Quality Works Automation Bootcamp Cypress assignment week 8


To run projects:
    1. Clone the project and open it in a code editor
    2. Run the command 'npm install'
    3. Alternately, the command 'npm run test' or 'npm run test --headed' can be used to run all the tests at once. To run specific tests, the command 'npm run test:spec cypress/e2e/test/*insertnameofspecfilehere*.cy.js' can be run by substituting the highlighted section for the specific test fies under the test folder.
    4. Alternately, the command 'npx cypress open' could be used. Select e2e and Chrome respectively. Once you are taken to the test runner you can select specific tests to run.


NB:
- The negative test scenarios can be found in the login portion as well as the customer information portion of the checkout scenario.
- For the add to cart tests, to add different items to cart, you can substitute/increment the firstIndex and secondIndex variables with numbers between 0 and 5 inclusive. This feature was not implemented in the checkout tests. Please note that each item can only be added to cart once. 
- When running the 'npx cypress open' command, the browser tends to freeze on the first run. Close the browser and run the command again.
