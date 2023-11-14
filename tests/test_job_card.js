const assert = require('assert');
const getOpenPositionTitles = require('../getOpenPositionTitles');
const setupBrowser = require('../setupBrowser');

describe('Careers Page Tests', () => {
  let browser, page;

  before(async () => {
    // Setup the browser before running the tests
    ({ browser, page } = await setupBrowser());
  });

  after(async () => {
    // Close the browser after all tests have run
    await browser.close();
  });

  it('test should navigate to Careers page and find "Lead QA Automation Developer"', async () => {
    try {
      // Navigate directly using the page object
      await page.goto('https://www.rdbrck.com/careers');

      // Use the getOpenPositionTitles method to get a list of open positions
      const openPositionTitles = await getOpenPositionTitles(page);

      // Validation: Check if "Lead QA Automation Developer" is in the list of open positions
      const positionToFind = 'Lead QA Automation Developer';
      assert(openPositionTitles.includes(positionToFind), `${positionToFind} - does not appear in the list`);

      console.log(`${positionToFind} - found in the list`);

      // If the position is found, mark the test as passed!
      console.log('Test Passed!');
    } catch (error) {
      console.error('Error:', error.message);
      throw error; // Ensure that test fails in case of an exception
    }
  });
});
