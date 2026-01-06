import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import {
  paymentPlanPage,
  page,
  startApplicationPage,
} from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then("the next button is disabled by default", async function () {
  await expect(paymentPlanPage.inactiveNextButton).toBeDisabled();
});

When("user selects upfront payment plan", async function () {
  await paymentPlanPage.upfrontPaymentOption.click();
});

Then("the next button is enabled", async function () {
  await expect(paymentPlanPage.inactiveNextButton).toBeEnabled();

  await page.waitForTimeout(5000);
});

Then("the step1 stepper circle is green", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)"
  );
});

Then("the step2 stepper circle is blue", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)"
  );
});

When("user clicks the next button on payment pale page", async function () {
  await paymentPlanPage.activeNextButton.click();
});

Then("the step3 stepper circle is blue", async function () {
  await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)"
  );
});

Then("the step2 stepper circle is green", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)"
  );
});

Then("the upfront payment summary is displayed", async function () {
  await expect(paymentPlanPage.basePriceAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.upfrontDiscountAmountUnderUpfront).toBeVisible();
  await expect(paymentPlanPage.subtotalAmountUnderUpfront).toBeVisible();
});

When("user selects instalment payment  paln", async function () {
  await paymentPlanPage.installmentsPaymentFrame.click();
});

Then("the instalment payment summary is displayed", async function () {
  await expect(paymentPlanPage.basePriceAmountUnderInstallments).toBeVisible();
  await expect(
    paymentPlanPage.installmentsNumberUnderInstallments
  ).toBeVisible();
  await expect(
    paymentPlanPage.pricePerInstallmentsAmountUnderInstallments
  ).toBeVisible();
  await expect(
    paymentPlanPage.firstMonthPaymentAmountUnderInstallments
  ).toBeVisible();
});

Then("the back button is displayed", async function () {
  await expect(paymentPlanPage.backButton).toBeVisible();
});

When("user clicks the back button on payment plan page", async function () {
  await paymentPlanPage.backButton.click();
});

When("the step1 stepper circle is blue", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)"
  );
});
