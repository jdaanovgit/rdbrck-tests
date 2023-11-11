const puppeteer = require('puppeteer');

async function runTests() {
  const browser = await puppeteer.launch({
    headless: false, // Run Chromium with a GUI (visible browser window), as required
    defaultViewport: null, // Adjust viewport settings
  });

  try {
    const page = await browser.newPage();

    // First test: Navigating to “https://rdbrck.com” will redirect to “https://www.rdbrck.com”.
    await testRedirectTo(page);

    // Second test: Once on “https://www.rdbrck.com”, validate that clicking the “Careers” button in the top header will navigate to “https://www.rdbrck.com/careers”
    await testNavToCareers(page);

    // Third test: Validate that the “Lead QA Automation Developer” job card exists on the careers page.
    await testJobCardExist(page);

  } finally {
    await browser.close();
  }
}
// First test functionality
async function testRedirectTo(page) {
  await page.goto('https://rdbrck.com');
  // Wait for any potential redirects
  await page.waitForTimeout(2000);
  const currentUrlAfterRedirect = page.url();
  console.log(`Test 1: Current URL after redirect: ${currentUrlAfterRedirect}`);

  if (currentUrlAfterRedirect === 'https://www.rdbrck.com') {
    console.log('Test 1 passed: Redirect to "https://www.rdbrck.com" successful.');
  } else {
    console.error('Test 1 failed: Redirect did not happen as expected.');
  }
}
// Second test functionality
async function testNavToCareers(page) {
  await page.goto('https://www.rdbrck.com');
  await page.click('a[href="/careers"]');
  // Wait for any potential navigation
  await page.waitForTimeout(2000);
  const urlAfterCareersClick = page.url();
  console.log(`Test 2: Current URL after clicking "Careers": ${urlAfterCareersClick}`);

  if (urlAfterCareersClick === 'https://www.rdbrck.com/careers') {
    console.log('Test 2 passed: Navigation to "https://www.rdbrck.com/careers" successful.');
  } else {
    console.error('Test 2 failed: Navigation to "https://www.rdbrck.com/careers" did not happen as expected.');
  }
}
// Third test functionality
async function testJobCardExist(page) {
  await page.goto('https://www.rdbrck.com/careers');
  const jobCardExist = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.job-card')).some(card => card.innerText.includes('Lead QA Automation Developer'));
  });
  console.log(`Test 3: Lead QA Automation Developer job card exists: ${jobCardExist}`);

  if (jobCardExist) {
    console.log('Test 3 passed: "Lead QA Automation Developer" job card exists on the careers page.');
  } else {
    console.error('Test 3 failed: "Lead QA Automation Developer" job card not found.');
  }
}
//Tests executor
runTests();
