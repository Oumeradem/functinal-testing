import { Given, Then, When } from "@cucumber/cucumber";
import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  leftMainPage,
  paymentPlanPage,
  reviewPaymentPage,
  page,
} from "../globalPagesSetup";


Given('user is on the enrollment page', async function () {
    await startApplicationPage.login();
    
});

Given(
  "user already completed the start application page",
  async function () {
    await startApplicationPage.firstNameInputBox.fill(faker.person.firstName());
    await startApplicationPage.lastNameInputBox.fill(faker.person.lastName());
    await startApplicationPage.emailInputBox.fill(faker.internet.email());
    await startApplicationPage.phoneNumberInputBox.fill(
      faker.string.numeric(10));

     // await page.waitForTimeout(5000);
      
      await startApplicationPage.nextButton.click();
  }
);

Given("user already completed the payment plans page", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();

  //await page.waitForTimeout(5000);

  await paymentPlanPage.activeNextButton.click();
})