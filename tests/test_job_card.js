const assert = require('assert');
const getOpenPositionTitles = require('../getOpenPositionTitles');
const setupBrowser = require('../setupBrowser');

// Define the test function
const runTest = async () => {
  const { browser, page } = await setupBrowser();

  try {
    // Navigate directly using the page object
    await page.goto('https://www.rdbrck.com/careers');

    // Use the getOpenPositionTitles method to get a list of open positions
    const openPositionTitles = await getOpenPositionTitles(page);

    // Validation: Check if "Lead QA Automation Developer" is in the list of open positions
    const positionToFind = 'Lead QA Automation Developer';
    assert(openPositionTitles.includes(positionToFind), `${positionToFind} - does not appear in the list`);

    console.log(`${positionToFind} - found in the list`);

    // If the position is found = test passed
    console.log('Test Passed!');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
};

// Run the test
runTest();
