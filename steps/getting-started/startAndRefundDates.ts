import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { startApplicationPage } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then("the displayed start date for the program is correct", async function () {
    await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then("the displayed refund date for the program is correct", async function () {
    await expect(startApplicationPage.refundEndDate).toBeVisible();
});

Then("the program start date is displayed", async function () {
    const ACTUAL_START_DATE =
    await startApplicationPage.programStartDate.innerHTML();
    const EXPECTED_START_DATE = productInfo.startDate;
    expect(ACTUAL_START_DATE).toBe(EXPECTED_START_DATE);
});

Then("the program refund date is displayed", async function () {
    const ACTUAL_REFUND_DATE =
    await startApplicationPage.refundEndDate.innerHTML();
    const EXPECTED_REFUND_DATE = productInfo.refundDate;
    expect(ACTUAL_REFUND_DATE).toBe(EXPECTED_REFUND_DATE);
});
