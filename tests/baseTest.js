// Browser initiation, read site url from ENV variables

const puppeteer = require('puppeteer');
const env = require('../env'); 

class BaseTest {
  constructor() {
    this.browser = null;
    this.page = null;
  }

  async setup() {
    // Initialize test setup, browser, etc.
    this.browser = await puppeteer.launch({ headless: false });
    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: 1920, height: 1080 });
  }

  async close() {
    // Cleanup after the test
    await this.browser.close();
  }
}

module.exports = BaseTest;
