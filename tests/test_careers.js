const puppeteer = require('puppeteer');
const CommonPage = require('../pageObjects');
const { CAREERS_BUTTON_HEADER } = require('../locators');

class CareersPage extends CommonPage {
  async navigateToCareers() {
    await this.page.click('li a[href*="careers"]'); // careers selector
  }
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 }); // Set to full HD resolution
  const commonPage = new CommonPage(page);
  const careersPage = new CareersPage(page);

  try {
    // Test 2: Validate that clicking the "Careers" button navigates to "https://www.rdbrck.com/careers".
    await commonPage.navigateTo('https://www.rdbrck.com');
    await careersPage.navigateToCareers();
    const currentUrl = page.url();
    if (currentUrl === 'https://www.rdbrck.com/careers') {
      console.log('Test 2 Passed: Navigation to Careers successful');
    } else {
      console.error(`Test 2 Failed: Expected navigation to https://www.rdbrck.com/careers, but got ${currentUrl}`);
    }
  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    await browser.close();
  }
})();
