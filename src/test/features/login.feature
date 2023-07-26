Feature: login

    Scenario: Sucessful login to portal
        Given I go to the login page
        And I enter valid credentials
        Then I am sucessfully logged in


    Scenario: Sucessful login to portal2
        Given I go to the login page
        And I enter username "standard_user" and password "secret_sauce"
        Then I am sucessfully logged in

    #Following test should fail
    
    Scenario: Sucessful login to portal3
        Given I go to the login page
        And I enter username "standard_user" and password "secret_sauce1"
        Then I am sucessfully logged in
