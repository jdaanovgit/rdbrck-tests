const puppeteer = require('puppeteer');
const { OPEN_POSITION_TITLES } = require('./locators/careersPageLocators');
const careersLocator = require('./locators/careersPageLocators');


async function getOpenPositionTitles(page) {
  const { OPEN_POSITION_TITLES } = careersLocator;
  // Wait for the open positions to load
  await page.waitForSelector(OPEN_POSITION_TITLES);

  // Extract text content from open position elements
  const openPositionTitles = await page.evaluate(() => {
    const positionElements = document.querySelectorAll(OPEN_POSITION_TITLES);
    return Array.from(positionElements, (element) => element.textContent.trim());
  });

  return openPositionTitles;
}

module.exports = getOpenPositionTitles;
