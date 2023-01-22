Feature: Login Test

Scenario: As a user I attempt to login with incorrect login details
  Given I am on the studentbeans homepage
  And I open the login page
  When I enter "test@test.com" into email and "testingStuff" into password
  Then I should trigger the user and password error messages
