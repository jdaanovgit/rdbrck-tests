// Browser initiation, read site url from ENV variables

const puppeteer = require('puppeteer');

async function setup() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  return { browser, page };
}

async function close({ browser }) {
  await browser.close();
}

module.exports = {
  setup,
  close,
};
