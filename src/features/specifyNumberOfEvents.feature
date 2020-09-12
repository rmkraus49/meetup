Feature: specify number of events

  Scenario: By default, show 30 events
    Given the events list has loaded
    And the number of events input has loaded
    When the user has not specified a number of events
    Then 30 events should be shown

  Scenario: A user can change the number of events shown
    Given the events list has loaded
    And the number of events input has loaded
    When the user changes the number of events input
    Then the events will be updated using the input as the page number
