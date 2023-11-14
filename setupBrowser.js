const puppeteer = require('puppeteer');

async function setupBrowser() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  return { browser, page };
}

module.exports = {
  setupBrowser,
};
