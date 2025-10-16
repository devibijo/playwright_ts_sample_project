# 🎭 Playwright TypeScript Sample Project

A basic testing framework built with **Playwright** and **TypeScript** for automated testing of the SauceDemo e-commerce application.

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Test Data Management](#-test-data-management)
- [Page Object Model](#-page-object-model)
- [Running Tests](#-running-tests)
- [Test Reports](#-test-reports)
- [Configuration](#-configuration)
- [Contributing](#-contributing)

## ✨ Features

- **Modern TypeScript** implementation with full type safety
- **Playwright** for cross-browser testing (Chromium, Firefox, Safari)
- **Page Object Model** (POM) design pattern
- **Data-driven testing** with centralized test data management
- **Test steps** organization for better readability and debugging
- **Robust element handling** with proper waits and error handling
- **Comprehensive reporting** with built-in HTML reports

## 🗂️ Project Structure

```
playwright_ts_sample_project/
├── 📁 page/                    # Page Object Model classes
│   ├── base.page.ts           # Base page with common functionality
│   ├── login.page.ts          # Login page interactions
│   ├── product.page.ts        # Product page interactions
│   └── cart.page.ts           # Cart page interactions
├── 📁 tests/                  # Test specifications
│   ├── test.spec.ts           # Main test suite
│   └── data-driven.spec.ts    # Data-driven test examples
├── 📁 Utils/                  # Test utilities and data
│   ├── test-data.ts           # Centralized test data
├── 📁 playwright-report/      # Generated test reports
├── 📁 test-results/           # Test execution artifacts
├── playwright.config.ts       # Playwright configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🔧 Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd playwright_ts_sample_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install Playwright browsers**
   ```bash
   npx playwright install
   ```

## Usage

### Running Tests

```bash
# Run all tests in all browsers
npm test:

# Run tests in Chromium only
yarn test:chromium

# Run tests with specific options
yarn playwright test --headed          # Run with browser UI

## Test Data Management
### Centralized Test Data (`Utils/test-data.ts`)

```typescript
export const testData = {
  users: {
    standardUser: {
      username: 'standard_user',
      password: 'secret_sauce'
    }
  },
  urls: {
    baseUrl: 'https://www.saucedemo.com/'
  }
};
```
