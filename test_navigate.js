const puppeteer = require('puppeteer');
const CommonPage = require('./pageObjects');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  const commonPage = new CommonPage(page);

  try {
    // Test 1: Navigating to "https://rdbrck.com" will redirect to "https://www.rdbrck.com".
    await commonPage.navigateTo('https://rdbrck.com');
    const currentUrl = page.url();
    if (currentUrl === 'https://www.rdbrck.com') {
      console.log('Test 1 Passed: Redirect successful');
    } else {
      console.error(`Test 1 Failed: Expected redirection to https://www.rdbrck.com, but got ${currentUrl}`);
    }
  } catch (error) {
    console.error('Error during test:', error);
  } finally {
    await browser.close();
  }
})
();
