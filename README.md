# Clara Mid QA Engineer – Tech Challenge

## Table of Contents

1. [Project Overview](#project-overview)
2. [Assignment Requirements](#assignment-requirements)
3. [Project Structure](#project-structure)
4. [Prerequisites](#prerequisites)
5. [Installation & Setup](#installation--setup)
6. [Running the Tests](#running-the-tests)
7. [Test Suites](#test-suites)

   * [API Tests](#api-tests)
   * [E2E Tests](#e2e-tests)
8. [Continuous Integration (CI)](#continuous-integration-ci)
9. [Deliverables](#deliverables)

---

##  Project Overview

This repository contains the solution to the Clara **Mid QA Engineer** technical test, including:

* Automated test suites (API and end-to-end) implemented with Cypress.

All code and configuration needed to evaluate functionality and code style are included.

---

## Assignment Requirements

* **Deadline:** Deliver within **1 week** of assignment receipt.
* **Repository:** Submit via **GitHub**.
* **Documentation:** Provide clear instructions in this README on how to:

  1. Set up the development environment.
  2. Execute automated tests.

---

## Project Structure

```plaintext
├── .github/
│   └── workflows/
│       └── run-cypress-tests.yml     # CI pipeline configuration
├── cypress/
│   ├── e2e/                          
│   │   ├── loginTest.cy.js           # E2E: User login flow
│   │   ├── purchaseWorkflowTest.cy.js# E2E: Purchase checkout flow
│   │   └── APITests/
│   │       └── apiTest.cy.js         # API: CRUD operations on Petstore
│   ├── requests/
│   │   └── PetsApi.js                # HTTP client wrapper for API calls
│   ├── support/
│   │   └── commands.js               # Custom Cypress commands (cy.*)
│   └── testData/                     # Test data used by tests
│       ├── APITestData/
│       │   └── apiTestData.js        # Static data for API tests
│       ├── credentials.js            # Login credentials for E2E tests
│       ├── customerInfo.js           # Customer information for E2E flows
│       └── urls.js                   # URL endpoints used in tests
├── cypress.config.js                 # Cypress configuration (baseUrl, timeouts)
├── package.json                      # npm dependencies & scripts
├── package-lock.json                 # npm lockfile
├── .eslintrc.json                    # ESLint configuration
├── .gitignore                        # Files/folders ignored by Git
└── README.md                         # This file
```

---

## Prerequisites

* **Node.js** v18.x or higher
* **npm** (comes with Node.js)
* **Git** (for version control and CI)

---

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone git@github.com:belenfrancoc/codingChallenge.git
   cd codingChallenge
   ```
2. **Install dependencies**

   ```bash
   npm ci
   ```

---

## Running the Tests

Open the Cypress Test Runner UI and run all specs interactively:

```bash
npx cypress open
```

To run tests headlessly in the terminal:

```bash
npx cypress run --spec "cypress/e2e/**/*.cy.js"
```

---

## Test Suites

### API Tests

* **Location:** `cypress/e2e/APITests/apiTest.cy.js`
* **Purpose:** Automates CRUD operations against the public Swagger Petstore sandbox to validate API behavior and ensure endpoints respond correctly under different scenarios.
* **Implemented using:** Direct `cy.request()` calls wrapped in custom commands (`cy.addNewPet()`, `cy.getPetByID()`, etc.) defined in `cypress/support/commands.js` which leverage the `PetsApi.js` HTTP client wrapper.

### E2E Tests

* **Location:**

  * `cypress/e2e/loginTest.cy.js`
  * `cypress/e2e/purchaseWorkflowTest.cy.js`
* **Purpose:** Simulate real user workflows on the application UI:

  1. **Login flow:** Verifies correct handling of valid and invalid credentials.
  2. **Purchase checkout flow:** Adds items to cart, completes checkout steps, and verifies order confirmation.

#### Page Object Model (POM) Implementation

The tests follow the **Page Object Model** pattern to improve maintainability and readability:

* **`cypress/pages/`**: Contains page objects, one per screen (e.g., `LoginPage.js`, `CartPage.js`, `CheckoutPage.js`). Each page object exposes high-level methods (e.g., `login(username, password)`, `addItemToCart(itemName)`).
* **`cypress/selectors/`**: Stores locator definitions grouped by page (e.g., `loginPageSelectors.js`, `cartPageSelector.js`).
* **`cypress/support/commands.js`**: Defines custom Cypress commands that wrap common flows using page object methods.
* **`cypress/testData/`**: Provides input data for E2E tests (e.g., `credentials.js`, `customerInfo.js`, `urls.js`).

Tests reference page objects instead of hard-coding selectors, e.g.:

```js
import LoginPage from '../pages/LoginPage';

it('Login with valid credentials', () => {

    loginPage.login(loginUsers.valid.username, loginUsers.valid.password)

});

```

---

## Continuous Integration (CI)

Configured in `.github/workflows/run-cypress-tests.yml`:

* **Triggers:** `push` to `main` branch
* **Steps:**

  1. Checkout code
  2. Setup Node.js v18
  3. `npm ci`
  4. Run Cypress tests via official action (`cypress-io/github-action`)
  5. Upload videos & screenshots as artifacts

---

## Deliverables

* GitHub repository containing:

  * Cypress test suites.
  * This **README.md** with full documentation.

---
