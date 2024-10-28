// mainPage.js
import { expect } from "@playwright/test";

class MainPage {
  constructor(page) {
    this.page = page;
    this.homeButton = page.locator("#menu-item-9359");
    this.solutions = page.locator("#menu-item-8285");
    this.industries = page.locator("#menu-item-8709");
    this.successStories = page.locator("#menu-item-6863");
    this.resources = page.locator("#menu-item-6915");
    this.aboutUs = page.locator("#menu-item-6809");
    this.careers = page.locator("#menu-item-6807");
    this.contactUsButton = page.locator(
      'a.button.header-button:has-text("CONTACT US")'
    );
  }

  async goto() {
    await this.page.goto("https://aquivalabs.com/");
  }

  async clickHomeButton() {
    await this.homeButton.click();
  }

  async hoverSolutions() {
    await this.solutions.hover();
  }

  async clickIndustries() {
    await this.industries.click();
  }

  async clickSuccessStories() {
    await this.successStories.click();
  }

  async clickResources() {
    await this.resources.click();
  }

  async clickAboutUs() {
    await this.aboutUs.click();
  }

  async clickCareers() {
    await this.careers.click();
  }

  async clickContactUsButton() {
    await this.contactUsButton.click();
  }

  async expectHeaderVisible(headerText) {
    const header = this.page.locator(`h1:has-text("${headerText}")`);
    await expect(header).toBeVisible();
  }

  async expectHeader2Visible(headerText) {
    const header = this.page.locator(`h2:has-text("${headerText}")`);
    await expect(header).toBeVisible();
  }

  async expectFormVisible() {
    const form = this.page.locator("#last_name");
    await expect(form).toBeVisible();
  }
}

export default MainPage;
