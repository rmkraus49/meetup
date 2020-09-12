Feature: show and hide event details

  Scenario: By default, when an event element loads, the event details are collapsed
    Given an event has loaded
    When the user does not take any action
    Then the event details should be collapsed

  Scenario: A user can expand an event item to see its details
    Given an event element is collapsed
    When a user clicks the expand button
    Then then the event details should expand

  Scenario: A user can collapse an event to hide its details
    Given an event element is expanded
    When a user clicks the collapse button
    Then the event details should collapse

