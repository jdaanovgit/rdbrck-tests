
const BaseTest = require('./baseTest');
const CommonPage = require('../pageObjects');

class TestNavigate extends BaseTest {
  async runTest() {
    let browser, page;

    try {
      // Setup browser and page
      ({ browser, page } = await this.setup());

      // Test logic
      const commonPage = new CommonPage(page);
      await commonPage.navigateTo('https://rdbrck.com');
      const currentUrl = page.url();

      // Validation section
      if (currentUrl === 'https://www.rdbrck.com/') {
        console.log('Test Passed: Redirect successful');
      } else {
        console.error(`Test Failed: Expected redirection to https://www.rdbrck.com, but got ${currentUrl}`);
      }
    } catch (error) {
      console.error('Error during test:', error);
    } finally {
      // Close browser
      await this.close();
    }
  }
}

// Run the test
const testNavigate = new TestNavigate();
testNavigate.runTest();
