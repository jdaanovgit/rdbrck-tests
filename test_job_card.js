const puppeteer = require('puppeteer');
const CommonPage = require('./pageObjects');

class CareersPage extends CommonPage {
  async jobCardExists() {
    return await this.page.$eval('.job-card', (card) => card !== null); // need to adjust selector as per the actual job card class
  }
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 }); set full size window
  const commonPage = new CommonPage(page);
  const careersPage = new CareersPage(page);

  try {
    // Test 3: Validate that the "Lead QA Automation Developer" job card exists on the careers page.
    await commonPage.navigateTo('https://www.rdbrck.com/careers');
    const jobCardExists = await careersPage.jobCardExists();
    if (jobCardExists) {
      console.log('Test 3 Passed: "Lead QA Automation Developer" job card exists');
    } else {
      console.error('Test 3 Failed: "Lead QA Automation Developer" job card not found');
    }
  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    await browser.close();
  }
})();
