@sep16
Feature: Click on the next button on payment plans page   #! Test Only

    As a customer, I should be able to click on the next button on step 2 when I select a plan.

    #* AC1: Clicking on any plan should activate the next button
    #* AC2: When the customer clicks on the next button, the Step 3 page should be displayed.
    #* AC3: In the stepper, steps 1 and 2 should be green, and step 3 should be blue.
    #* AC4: The payment component should be displayed.
    #* AC5: A price summary should be displayed.
    #* AC6: The back button should be displayed.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user already completed the start application page

    @sep16-1
    Scenario: Verify that clicking on any plan should activates the next button
        Then the next button is disabled by default
        When user selects upfront payment plan
        Then the next button is enabled

    @sep16-2
    Scenario: Verify that after clicking next button, step3 stepper color is blue, but step1 and step2 stepper are green
        Then the step1 stepper circle is green
        And the step2 stepper circle is blue
        When user selects upfront payment plan
        And user clicks the next button on payment pale page
        Then the step3 stepper circle is blue
        And the step1 stepper circle is green
        And the step2 stepper circle is green

    @sep16-3
    Scenario: Verify that the payment summary is displayed after payment paln is selected
        When user selects upfront payment plan
        Then the upfront payment summary is displayed
        When user selects instalment payment  paln
        Then the instalment payment summary is displayed

    @sep16-4
    Scenario: Verify that the back button is displayed and navigates back to step1
        Then the back button is displayed
        And the step1 stepper circle is green
        When user clicks the back button on payment plan page
        And the step1 stepper circle is blue



