class CommonPage {
  constructor(page) {
    this.page = page;
  }

  async navigateTo(url) {
    await this.page.goto(url);
  }
}

module.exports = CommonPage;
