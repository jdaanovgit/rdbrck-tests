const { setupBrowser } = require('../setupBrowser');
const CommonPage = require('../pageObjects');

(async () => {
  let browser, page;

  try {
    ({ browser, page } = await setupBrowser());
    const commonPage = new CommonPage(page);
    // Test 1: Navigating to "https://rdbrck.com" will redirect to "https://www.rdbrck.com".
    await commonPage.navigateTo('https://rdbrck.com');
    const currentUrl = page.url();
    if (currentUrl === 'https://www.rdbrck.com/') { //can add another assert by home page text, to be sure that url doesn't includes some query params.
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
