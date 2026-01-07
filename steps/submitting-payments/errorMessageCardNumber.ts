import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";
import { faker } from "@faker-js/faker";

When("user enters wrong card number", async function () {
  await reviewPaymentPage.cardNumberInput.fill(faker.string.numeric(16));
  // await page.waitForTimeout(5000);
});

When("user enters short card number", async function () {
  await reviewPaymentPage.cardNumberInput.fill(faker.string.numeric(10));

  //await page.waitForTimeout(5000);
});

When("user clicks terms and conditions checkbox", async function () {
  await reviewPaymentPage.termsAndConditionsCheckbox.click();
});

Then("the card error message {string} is displayed", async function (string) {
  await expect(reviewPaymentPage.cardNumberErrorMessage).toHaveText(string);
});
