const BaseTest = require('./baseTest'); 
const CommonPage = require('../pageObjects');

const runTest = async () => {
  try {
    // Setup browser and page
    const { browser, page } = await BaseTest.setup();

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
    await BaseTest.close({ browser });
  }
};

// Run the test
runTest();
