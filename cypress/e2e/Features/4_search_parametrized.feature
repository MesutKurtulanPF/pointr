Feature: Search functionality with Parametrized Inputs

  Scenario: Search with results
    Given I navigate to "https://www.sefamerve.com/"
    When I search for a "valid" search term
    Then I should see search results
    And I save the results to results.txt
    And I take a screenshot

  Scenario: Search without results
    Given I navigate to "https://www.sefamerve.com/"
    When I search for a "invalid" search term
    Then I should see a no results message
    And I save the message to results.txt
    And I take a screenshot