const puppeteer = require('puppeteer');

async function getOpenPositionTitles(page) {
  // Wait for the open positions to load
  await page.waitForSelector('.pinion.pinion-openPositions h5');

  // Extract text content from the open position elements
  const openPositionTitles = await page.evaluate(() => {
    const positionElements = document.querySelectorAll('.pinion.pinion-openPositions h5');
    return Array.from(positionElements, (element) => element.textContent.trim());
  });

  return openPositionTitles;
}

module.exports = getOpenPositionTitles;
