const assert = require('assert');
const getOpenPositionTitles = require('../getOpenPositionTitles');
const setupBrowser = require('../setupBrowser');

(async () => {
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

    // Add a delay to observe the results before closing the browser
    await new Promise(resolve => setTimeout(resolve, 5000)); // Adjust the delay time as needed
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
