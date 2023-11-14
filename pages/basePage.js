class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }

  // Common page methods will be added here
}

module.exports = BasePage;
