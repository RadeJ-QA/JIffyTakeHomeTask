# TakeHome Task - PrestaShop E-commerce Test Automation

This project contains end-to-end test automation for a PrestaShop demo e-commerce store using Playwright and TypeScript. The tests cover critical e-commerce workflows including adding products to cart and completing checkout processes.

## Features

- ✅ Cross-browser testing (Chrome, Firefox, Safari/WebKit)
- ✅ Mobile device testing (iPhone 15 Pro)
- ✅ Page Object Model pattern for maintainable code
- ✅ Automated checkout flow testing
- ✅ Screenshot capture on test execution
- ✅ HTML test reports
- ✅ Video recording on test failures
- ✅ Test data generation using Faker.js

## Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd "TakeHome task"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers** (if not already installed):
   ```bash
   npx playwright install
   ```

   Or install specific browsers:
   ```bash
   npx playwright install chromium
   npx playwright install firefox
   npx playwright install webkit
   ```

## Configuration

### Environment Variables

Create a `.env` file in the root directory with the following variable:

```env
BASE_URL=https://demo.prestashop.com
```

**Note:** Replace the URL above with the actual PrestaShop demo store URL you want to test.

### Playwright Configuration

The project uses `playwright.config.ts` for test configuration. Key settings:

- **Test Directory**: `./tests`
- **Reporters**: HTML reporter
- **Retries**: 2 retries on CI, 0 locally
- **Video**: Recorded on all tests
- **Trace**: Collected on first retry of failed tests

## Running Tests

### Desktop Tests

#### Chrome (Headless Mode)
```bash
npm run appDesktopTestHeadless-chrome
```

#### Firefox (Headless Mode)
```bash
npm run appDesktopTestHeadless-firefox
```

#### Safari/WebKit (Headless Mode)
```bash
npm run appDesktopTestHeadless-safari
```

#### All Desktop Browsers (Headless Mode)
```bash
npm run appDesktopTestHeadless-all
```

### Desktop Tests (UI Mode - Interactive)

#### Chrome (UI Mode)
```bash
npm run appDesktopTestUI-chrome
```

#### Firefox (UI Mode)
```bash
npm run appDesktopTestUI-firefox
```

#### Safari/WebKit (UI Mode)
```bash
npm run appDesktopTestUI-safari
```

#### All Desktop Browsers (UI Mode)
```bash
npm run appDesktopTestUI-all
```

### Mobile Tests

#### Mobile (Headless Mode)
```bash
npm run appMobileTestHeadless
```

#### Mobile (UI Mode - Interactive)
```bash
npm run appMobileTestUI
```

### Running Specific Tests

You can also run specific test files directly:

```bash
npx playwright test prestashopTest.spec.ts --project=chromium
npx playwright test prestashopTestMobile.spec.ts --project=mobile
```

## Test Scenarios

### Desktop Tests (`prestashopTest.spec.ts`)

1. **Add Multiple Products to Cart**
   - Navigates to different product categories
   - Adds random products from multiple categories to the cart
   - Verifies correct products are added
   - Validates cart item count
   - Captures screenshot of cart

2. **Place Order from Cart**
   - Adds a product to cart
   - Proceeds through complete checkout flow
   - Fills personal information with generated test data
   - Provides shipping address
   - Completes payment process

### Mobile Tests (`prestashopTestMobile.spec.ts`)

1. **Add Multiple Products to Cart (Mobile)**
   - Same as desktop test but optimized for mobile navigation
   - Uses mobile-specific navigation methods

2. **Place Order from Cart (Mobile)**
   - Complete checkout flow on mobile device viewport

## Project Structure

```
TakeHome task/
├── page-object/
│   └── dashboardPage.ts          # Page Object Model with all page elements and actions
├── tests/
│   ├── prestashopTest.spec.ts    # Desktop browser tests
│   └── prestashopTestMobile.spec.ts  # Mobile device tests
├── screenshots/                   # Test execution screenshots
├── test-results/                 # Test execution results and artifacts
├── playwright-report/            # HTML test reports (generated after test runs)
├── playwright.config.ts          # Playwright configuration
├── package.json                  # Project dependencies and scripts
└── README.md                     # This file
```

## Dependencies

- **@playwright/test**: ^1.56.1 - Playwright test framework
- **@faker-js/faker**: ^10.1.0 - Test data generation
- **dotenv**: ^17.2.3 - Environment variable management
- **@types/node**: ^24.9.2 - TypeScript types for Node.js

## Viewing Test Reports

After running tests, an HTML report is automatically generated. To view it:

```bash
npx playwright show-report
```

This will open the HTML report in your default browser, showing:
- Test execution summary
- Passed/failed tests
- Screenshots and videos
- Execution traces

## Screenshots and Artifacts

- **Screenshots**: Stored in `screenshots/` directory
- **Test Results**: Stored in `test-results/` directory
- **HTML Reports**: Stored in `playwright-report/` directory

## Troubleshooting

### Common Issues

1. **Tests fail with timeout errors**
   - Check your `BASE_URL` in `.env` file is correct
   - Verify network connectivity
   - Increase timeout values in `playwright.config.ts` if needed

2. **Browsers not found**
   - Run `npx playwright install` to install required browsers

3. **Environment variables not loading**
   - Ensure `.env` file exists in the root directory
   - Verify the file contains `BASE_URL=your-url-here`

4. **TypeScript errors**
   - Run `npm install` to ensure all dependencies are installed
   - Verify Node.js version is compatible (v18+)

## CI/CD Integration

The project is configured for CI/CD environments:
- Retries are enabled (2 retries) when `CI` environment variable is set
- Workers are set to 1 in CI mode for stability
- Test-only mode is enforced on CI (`forbidOnly`)

## Contributing

When adding new tests:
1. Follow the Page Object Model pattern used in `dashboardPage.ts`
2. Add appropriate wait conditions for element visibility
3. Use Faker.js for generating test data
4. Add meaningful test descriptions
5. Include assertions for validation

## License

ISC

