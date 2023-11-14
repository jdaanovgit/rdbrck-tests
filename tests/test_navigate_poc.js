const BaseTest = require('./baseTest');
const CommonPage = require('../pageObjects');

const runTest = async () => {
  let browser;

  try {
    // Setup browser and page
    const { browser: testBrowser, page } = await BaseTest.setup();
    browser = testBrowser;

    // Test logic
    const commonPage = new CommonPage(page);
    await commonPage.navigateTo('https://rdbrck.com');
    const currentUrl = page.url();

    // Validation
    if (currentUrl === 'https://www.rdbrck.com/') {
      console.log('Test Passed: Redirect successful');
    } else {
      console.error(`Test Failed: Expected redirection to https://www.rdbrck.com, but got ${currentUrl}`);
    }
  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    // Close browser
    if (browser) {
      await BaseTest.close({ browser });
    }
  }
};

// Run the test
runTest();
