Feature: Login/Logout Functionality

  Scenario: Successful Login and Logout
    Given I navigate to "https://www.sefamerve.com/"
    When I log in with "valid" credentials
    Then I should see the account page
    And I logout successfully

  Scenario: Unsuccessful Login
    Given I navigate to "https://www.sefamerve.com/"
    When I log in with "invalid" credentials
    Then I should see an error message
    And I log the error message to loginerror.txt



