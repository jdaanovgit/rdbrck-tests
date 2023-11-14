const assert = require('assert');
const getOpenPositionTitles = require('../getOpenPositionTitles');
const { setupBrowser } = require('../setupBrowser');

(async () => {
  const { browser, page } = await setupBrowser();

  try {
    console.log('Navigating to the Careers page...');
    await page.goto('https://www.rdbrck.com/careers');
    console.log('Navigation successful.');

    console.log('Fetching open position titles...');
    const openPositionTitles = await getOpenPositionTitles(page);
    console.log('Open position titles:', openPositionTitles);

    // Validation: Check if "Lead QA Automation Developer" is in the list of open positions
    const positionToFind = 'Lead QA Automation Developer';
    assert(openPositionTitles.includes(positionToFind), `${positionToFind} - does not appear in the list`);
    console.log(`${positionToFind} - found in the list`);

    // If the position is found = test passed
    console.log('Test Passed!');
  } catch (error) {
    console.error('Error during test:', error.message);
  } finally {
    console.log('Closing the browser...');
    await browser.close();
    console.log('Browser closed.');
  }
})();
