const puppeteer = require('puppeteer');
const { setupBrowser } = require('../setupBrowser');
const CommonPage = require('../pageObjects');
const { CAREERS_BUTTON_HEADER } = require('../locators');

class CareersPage extends CommonPage {
    async navigateToCareers() {
        await this.page.click(CAREERS_BUTTON_HEADER); // Careers selector
    }
}

(async () => {
    let browser, page;

    try {
        ({ browser, page } = await setupBrowser());
        const commonPage = new CommonPage(page);
        const careersPage = new CareersPage(page);

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
