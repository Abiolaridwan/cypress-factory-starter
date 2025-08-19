<<<<<<< HEAD
# Cypress Factory Starter

A **starter project** that delivers a clean, scalable, and maintainable setup for **Cypress end-to-end testing,** leveraging **factories, fixtures, and modular support utilities.**

It illustrates how to structure tests using a **factory-driven approach,** ensuring test data is reusable, consistent, and easily extendable across multiple scenarios.

This static project is designed for practicing **Cypress end-to-end testing** and runs locally using a static server ```(serve)```, with test coverage across multiple components.


## Project Structure

cypress-factory-starter/
│
├── cypress/
│ ├── e2e/ # End-to-end tests
│ │ └── sampleTest.cy.js
│ │
│ ├── factories/ # Test data factories
│ │ └── userFactory.js
│ │
│ ├── fixtures/ # Static test data
│ │ └── user.json
│ │ └── ridwan.cv.pdf
│ │
│ ├── public/ # App UI/UX
│ │ └── index.html
│ │ └── style.css
│ │ └── app.js
│ │ └── errorBoundary.html
│ │ 
│ ├── plugins/ # Cypress plugins
│ │ └── index.js
│ │
│ └── support/ # Custom Cypress commands/utilities
│ ├── commands.js
│
├── cypress.config.js # Cypress configuration
├── package.json # Project dependencies
└── README.md # Documentation

##  Features

- **Factory-driven test data** (e.g., `userFactory.js`)  
- **Reusable fixtures** for static data (e.g., `user.json`)  
- **Clear separation of concerns** (tests, factories, plugins, support)  
- **Scalable configuration** via `cypress.config.js`  
- **Sample test included** to kickstart development  

## Features tested
- ✅ Theme toggle
- ✅ Counter component
- ✅ Modal / Popup
- ✅ Tabs / Navigation
- ✅ File upload input
- ✅ Mock API request
- ✅ Error Boundary / 404 page
- ✅ Search bar
- ✅ User registration form
- ✅ Login form

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/your-username/cypress-factory-starter.git
cd cypress-factory-starter

npm install #Install dependencies

npx serve   #Run the static server

npx cypress open #Open Cypress Test Runner

npx cypress run #Run tests in headless mode

---

Explore the test app
=======
# cypress-factory-starter
A starter project for learning Cypress end-to-end testing with factories, fixtures, and modular utilities. Built on a static HTML app served locally, it demonstrates best practices for reusable, maintainable, and scalable Cypress tests across multiple scenarios.
>>>>>>> 83b7d4cae79bed6c5282c193ba4f44cbafebf28e
