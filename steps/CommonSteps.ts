import { Given, Then, When } from "@cucumber/cucumber";
import { faker } from "@faker-js/faker";
import { expect } from "@playwright/test";
import { startApplicationPage} from "../globalPagesSetup";

Given("user is on the enrollment page", async function () {
  await startApplicationPage.login();
});


