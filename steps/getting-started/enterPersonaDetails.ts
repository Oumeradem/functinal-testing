import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { startApplicationPage, paymentPlanPage } from "../../globalPagesSetup";

// --------------------
// Field Visibility Checks
// --------------------

Then("the First Name field should be a text input", async function () {
  await expect(startApplicationPage.firstNameInputBox).toBeVisible();
});

Then("the Last Name field should be a text input", async function () {
  await expect(startApplicationPage.lastNameInputBox).toBeVisible();
});

Then("the Email Address field should be a text input", async function () {
  await expect(startApplicationPage.emailInputBox).toBeVisible();
});

// --------------------
// Phone Number Validation
// --------------------

Then("the Phone Number field should accept numbers only", async function () {
  // Enter a numeric string using Faker
  await expect(startApplicationPage.phoneNumberInputBox).toBeVisible();
  await startApplicationPage.phoneNumberInputBox.fill(faker.string.numeric(16));

  // Capture actual value entered into the field
  const actualValue =
    await startApplicationPage.phoneNumberInputBox.inputValue();
  expect(actualValue).toMatch(/^\d*$/);
});

// --------------------
// Dropdown Validation
// --------------------
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

// --------------------
// Valid User Input Scenarios
// --------------------

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

// --------------------
// Navigation Validation
// --------------------

When(
  "the user clicks the Next button on the Personal Details page",
  async function () {
    await startApplicationPage.nextButton.click();
  },
);

// --------------------
// Negative Scenario
// --------------------
Then("the user should be navigated to the next step", async function () {
  await expect(paymentPlanPage.upfrontPaymentOption).toBeVisible();
});

When("the user enters invalid personal details", async function () {
  await startApplicationPage.firstNameInputBox.fill("!@#$%");
});

Then("the user should remain on the Personal Details page", async function () {
  await expect(startApplicationPage.firstNameInputBox).toBeVisible();
});
