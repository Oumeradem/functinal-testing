@sep10
Feature: Enter my Personal details

    As a customer, I should be able to enter my Personal details.

    #* AC1: Default field types and values should be as follows:
    #*          a. First Name: Text field is present.
    #*          b. Last Name: Text field is present.
    #*          c. Email Address: Text field is present and validates for email format.
    #*          d. Phone: The field allows numbers only.

    #* AC2: "How did you hear about us?" A standard dropdown list is present.
    #* AC3: The 'Next' button should be disabled if any required data is missing or invalid.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page


    @sep10-1
    Scenario: Personal detail fields are displayed with correct input types
        Then the First Name field should be a text input
        And the Last Name field should be a text input
        And the Email Address field should be a text input
        And the Phone Number field should accept numbers only


    @sep10-2
    Scenario: "How did you hear about us?" dropdown is displayed with options
        Then the "How did you hear about us?" dropdown should be displayed
        And the dropdown should contain selectable options



    @sep10-3
    Scenario: User successfully proceeds when all required personal details are valid
        When the user enters a valid first name
        And the user enters a valid last name
        And the user enters a valid email address
        And the user enters a valid phone number
        And the user clicks the Next button on the Personal Details page
        Then the user should be navigated to the next step


    @sep10-4
    Scenario: Next button does not proceed when required data is invalid
        When the user enters invalid personal details
        And the user clicks the Next button on the Personal Details page
        Then the user should remain on the Personal Details page
        

