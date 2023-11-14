// Browser initiation, read site url from ENV variables
const env = require('./env');

class BaseTest {
  constructor() {
    // Initializing test setup
  }

  async run() {
    console.log(`Running test on site: ${env.SITE_URL}`);
    // 
  }
}

module.exports = BaseTest;
