$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "to validate login functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Th verify the login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Fun1"
    }
  ]
});
formatter.step({
  "name": "the user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the user clicks the loginin button",
  "keyword": "And "
});
formatter.step({
  "name": "the user navigate to the login attempr page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "kk@gmail.com",
        "12345"
      ]
    },
    {
      "cells": [
        "kkavin@gmail.com",
        "78945"
      ]
    },
    {
      "cells": [
        "krthikeyan@gmail.com",
        "7asdf"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user should be in Ourshopee webpage page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_should_be_in_Ourshopee_webpage_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_clicks_the_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Th verify the login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Fun1"
    }
  ]
});
formatter.step({
  "name": "the user enters \"kk@gmail.com\" and \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the loginin button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_clicks_the_loginin_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidElementStateException: invalid element state: Element must be user-editable in order to clear it.\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GOWTHAMS-PC\u0027, ip: \u0027192.168.0.114\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Kavin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50109}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 98406f8c634b518a0573f877ad206bfb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:124)\r\n\tat com.stepdef.StepDefinition.the_user_clicks_the_loginin_button(StepDefinition.java:38)\r\n\tat ✽.the user clicks the loginin button(src/test/resources/Features/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user navigate to the login attempr page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_navigate_to_the_login_attempr_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user should be in Ourshopee webpage page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_should_be_in_Ourshopee_webpage_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_clicks_the_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Th verify the login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Fun1"
    }
  ]
});
formatter.step({
  "name": "the user enters \"kkavin@gmail.com\" and \"78945\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the loginin button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_clicks_the_loginin_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.InvalidElementStateException: invalid element state: Element must be user-editable in order to clear it.\n  (Session info: chrome\u003d79.0.3945.130)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GOWTHAMS-PC\u0027, ip: \u0027192.168.0.114\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Kavin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50147}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f567547ceba292121927c30bccabae74\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.clear(RemoteWebElement.java:124)\r\n\tat com.stepdef.StepDefinition.the_user_clicks_the_loginin_button(StepDefinition.java:38)\r\n\tat ✽.the user clicks the loginin button(src/test/resources/Features/Login.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user navigate to the login attempr page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_navigate_to_the_login_attempr_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user should be in Ourshopee webpage page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_should_be_in_Ourshopee_webpage_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_clicks_the_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Th verify the login with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Fun1"
    }
  ]
});
formatter.step({
  "name": "the user enters \"krthikeyan@gmail.com\" and \"7asdf\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_enters_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#login_email\"}\n  (Session info: chrome\u003d79.0.3945.130)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027GOWTHAMS-PC\u0027, ip: \u0027192.168.0.114\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_162\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 79.0.3945.130, chrome: {chromedriverVersion: 78.0.3904.105 (60e2d8774a81..., userDataDir: C:\\Users\\Kavin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50183}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 25491b42affb2f4fd48caff2fe6b5c66\n*** Element info: {Using\u003did, value\u003dlogin_email}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.stepdef.StepDefinition.the_user_enters_and(StepDefinition.java:31)\r\n\tat ✽.the user enters \"krthikeyan@gmail.com\" and \"7asdf\"(src/test/resources/Features/Login.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks the loginin button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_clicks_the_loginin_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user navigate to the login attempr page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_navigate_to_the_login_attempr_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user should be in Ourshopee webpage page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.the_user_should_be_in_Ourshopee_webpage_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the signin button",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_clicks_the_signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "to verify login with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Fun2"
    }
  ]
});
formatter.step({
  "name": "the user enters the username and password",
  "rows": [
    {
      "cells": [
        "karthikeyan.kavin@gmail.com",
        "12345678"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.the_user_enters_the_username_and_password(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks the loggin button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.the_user_clicks_the_loggin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.the_user_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});