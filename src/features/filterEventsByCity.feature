Feature: filter events by city

  Scenario: By default, before a user searches for a city, show events based on their location
    Given the user hasn't searched for a city
    When they open the app
    Then the user should see a list of events for their city

  Scenario: user should see suggestions when they start searching for a city
    Given the user is on the main page
    When the user starts typing to search for a city
    Then they should receive a list of suggested cities

  Scenario: user can select a city from the suggestions list
    Given the user was typing a city into the search box
    And the list of suggestions is showing
    When the user selects a suggested city
    Then their city shoudl be changed to the selection
    And the user should be shown a list of events from that city