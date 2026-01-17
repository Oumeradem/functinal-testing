import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  startApplicationPage,
  paymentPlanPage,
} from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";
import { faker } from "@faker-js/faker";

Then("the First Name field should be a text input", async function () {
  await expect(startApplicationPage.firstNameInputBox).toBeVisible();
});

Then("the Last Name field should be a text input", async function () {
  await expect(startApplicationPage.lastNameInputBox).toBeVisible();
});

Then("the Email Address field should be a text input", async function () {
  await expect(startApplicationPage.emailInputBox).toBeVisible();
});

Then("the Phone Number field should accept numbers only", async function () {
  // 1) Make sure the field is visible
  await expect(startApplicationPage.phoneNumberInputBox).toBeVisible();

  await startApplicationPage.phoneNumberInputBox.fill(faker.string.numeric(16));

  // 3) Read what the input actually contains
  const actualValue =
    await startApplicationPage.phoneNumberInputBox.inputValue();

  // 4) Assert: it should contain digits only (or you can assert exact expected digits)
  expect(actualValue).toMatch(/^\d*$/);
});

Then("the {string} dropdown should be displayed", async function (string) {
  await expect(startApplicationPage.howDidYouHearAboutUsDropDown).toBeVisible(
    string,
  );
});

Then("the dropdown should contain selectable options", async function () {
  await expect(startApplicationPage.howDidYouHearAboutUsDropDown).toBeVisible();
  await startApplicationPage.howDidYouHearAboutUsDropDown.click();
  await expect(startApplicationPage.emailOptionFromDropDown).toBeVisible();
  await startApplicationPage.emailOptionFromDropDown.click();
});

When("the user enters a valid first name", async function () {
  await startApplicationPage.firstNameInputBox.fill(faker.person.firstName());

});

When("the user enters a valid last name", async function () {
  await startApplicationPage.lastNameInputBox.fill(faker.person.lastName());
  
});
When("the user enters a valid email address", async function () {
  await startApplicationPage.emailInputBox.fill(faker.internet.email());
  
});

When("the user enters a valid phone number", async function () {
  await startApplicationPage.phoneNumberInputBox.fill(faker.string.numeric(16));

});

When(
  "the user clicks the Next button on the Personal Details page",
  async function () {
    await startApplicationPage.nextButton.click();

    
  },
);

Then("the user should be navigated to the next step", async function () {
  await expect(paymentPlanPage.upfrontPaymentOption).toBeVisible();
});

When("the user enters invalid personal details", async function () {
  await startApplicationPage.firstNameInputBox.fill("!@#$%");
});

Then("the user should remain on the Personal Details page", async function () {
  await expect(startApplicationPage.firstNameInputBox).toBeVisible();
});


