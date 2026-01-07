@sep25
Feature: Error message for the invalid card number

    As a user, I want to be informed when my card info has failed.

    #* AC1: An immediate error message should be thrown if the card number is wrong or too short:
    #*              Your card number is incomplete.
    #*              Your card number is invalid.


    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user already completed the start application page
        And user already completed the payment plans page

    @sep25-1
    Scenario: Verify that an  error message is displayed when the enterd card number is invalid.
        When user enters wrong card number
        And user clicks terms and conditions checkbox
        Then the card error message "Your card number is invalid." is displayed

    @sep25-2
    Scenario: Verify that an  error message is displayed when the enterd card number is too short.
        When user enters short card number
        And user clicks terms and conditions checkbox
        Then the card error message "Your card number is incomplete." is displayed