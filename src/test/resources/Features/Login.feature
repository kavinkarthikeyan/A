Feature: to validate login functionality

  Background: 
    Given the user should be in Ourshopee webpage page
    When the user clicks the signin button

  @Fun1
  Scenario Outline: Th verify the login with invalid credentials
    When the user enters "<username>" and "<password>"
    And the user clicks the loginin button
    Then the user navigate to the login attempr page

    Examples: 
      | username             | password |
      | kk@gmail.com         |    12345 |
      | kkavin@gmail.com     |    78945 |
      | krthikeyan@gmail.com | 7asdf    |

  @Fun2
  Scenario: to verify login with valid credentials
    When the user enters the username and password
      | karthikeyan.kavin@gmail.com | 12345678 |
    And the user clicks the loggin button
    Then the user logged in successfully
