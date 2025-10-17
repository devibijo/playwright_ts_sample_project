# Playwright TypeScript Project

A basic testing framework built with **Playwright** and **TypeScript** for automated testing of the SauceDemo e-commerce application.

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

# Run tests with headed mode
yarn playwright test --headed          

## Test Data Management
### Centralized Test Data (`Utils/test-data.ts`)