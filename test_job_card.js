const puppeteer = require('puppeteer');
const assert = require('assert');
const getOpenPositionTitles = require('./getOpenPositionTitles');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 }); set full size window
  const commonPage = new CommonPage(page);
  const careersPage = new CareersPage(page);
  
  try {
    await commonPage.navigateTo('https://www.rdbrck.com/careers');
    
    // Use the getOpenPositionTitles method to get a list of open positions
    const openPositionTitles = await getOpenPositionTitles(page);

    // Validation: Check if "Lead QA Automation Developer" is in the list of open positions
    const positionToFind = 'Lead QA Automation Developer';
    assert(openPositionTitles.includes(positionToFind), `${positionToFind} - does not appear in the list`);

    console.log(`${positionToFind} - found in the list`);
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
