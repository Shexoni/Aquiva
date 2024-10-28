import { test } from "@playwright/test";
import MainPage from "../pages/MainPage.js";

test.use({
  viewport: { width: 1920, height: 1080 },
});

let mainPage;

test.beforeEach(async ({ page }) => {
  mainPage = new MainPage(page);
  await mainPage.goto();
});

test("Home", async () => {
  await mainPage.clickHomeButton();
  await mainPage.expectHeaderVisible("When you count on Salesforce, count on");
});

test("Solutions.1", async () => {
  await mainPage.hoverSolutions();
  const option1 = mainPage.page.locator("#menu-item-6715");
  await option1.click();
  await mainPage.expectHeaderVisible(
    "AppExchange App Development and Maintenance"
  );
});

test("Solutions.2", async () => {
  await mainPage.hoverSolutions();
  const option2 = mainPage.page.locator("#menu-item-6714");
  await option2.click();
  await mainPage.expectHeaderVisible(
    "Digital Transformation and Salesforce Consulting"
  );
});

test("Solutions.3", async () => {
  await mainPage.hoverSolutions();
  const option3 = mainPage.page.locator("#menu-item-6806");
  await option3.click();
  await mainPage.expectHeaderVisible("Managed Engineering");
});

test("Industries", async () => {
  await mainPage.clickIndustries();
  await mainPage.expectHeaderVisible("Serving Industries");
});

test("Success Stories", async () => {
  await mainPage.clickSuccessStories();
  await mainPage.expectHeaderVisible("How we Helped RainFocus");
});

test("Resources", async () => {
  await mainPage.clickResources();
  await mainPage.expectHeaderVisible("Our Resources");
});

test("About us", async () => {
  await mainPage.clickAboutUs();
  await mainPage.expectHeaderVisible("Brings your Business Vision to Life");
});

test("Careers", async () => {
  await mainPage.clickCareers();
  await mainPage.expectHeader2Visible(
    "Are you ready to grow your Salesforce skills?"
  );
});

test("Contact Us", async () => {
  await mainPage.clickContactUsButton();
  await mainPage.expectFormVisible();
});
