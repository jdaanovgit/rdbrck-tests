
const puppeteer = require('puppeteer');
const careersLocator = require('./locators/careersPageLocators'); 

async function getOpenPositionTitles(page) {
  // Wait for the open positions to load
  await page.waitForSelector(careersLocator.OPEN_POSITION_TITLES);

  // Extract text content from open position elements
  const openPositionTitles = await page.evaluate(() => {
    const positionElements = document.querySelectorAll(careersLocator.OPEN_POSITION_TITLES);
    return Array.from(positionElements, (element) => element.textContent.trim());
  });

  return openPositionTitles;
}

module.exports = getOpenPositionTitles;
