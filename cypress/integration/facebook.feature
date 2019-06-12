Feature: The Facebook Page
I want to open a social network Page

Scenario: Opening a social network page
    Given I open the url "https://www.facebook.com"
    Then  I expect the url to contain "facebook.com"
    And   I expect that the title is "Facebook – log in or sign up"
    And   I expect that the title  contains "Facebook"

