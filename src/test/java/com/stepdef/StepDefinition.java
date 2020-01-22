package com.stepdef;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.baseclass.BaseClass;

import cucumber.api.java.en.*;
import junit.framework.Assert;

public class StepDefinition extends BaseClass {

	@Given("the user should be in Ourshopee webpage page")
	public void the_user_should_be_in_Ourshopee_webpage_page() {

	}

	@When("the user clicks the signin button")
	public void the_user_clicks_the_signin_button() {

		driver.findElement(By.xpath("//span[text()=' Sign In / Sign Up ']")).click();
		driver.findElement(By.xpath("//a[text()='Log In ']")).click();

	}

	@When("the user enters {string} and {string}")
	public void the_user_enters_and(String s1, String s2) {
		driver.findElement(By.id("login_email")).sendKeys(s1);
		driver.findElement(By.id("login_password")).sendKeys(s2);

	}

	@When("the user clicks the loginin button")
	public void the_user_clicks_the_loginin_button() {
		driver.findElement(By.xpath("//input[@type='submit']")).clear();
	}

	@Then("the user navigate to the login attempr page")
	public void the_user_navigate_to_the_login_attempr_page() {
		Assert.assertEquals("https://www.ourshopee.com/sign-in/?er_log=EmP", driver.getCurrentUrl());
	}

	@When("the user enters the username and password")
	public void the_user_enters_the_username_and_password(io.cucumber.datatable.DataTable d) {
		List<String> li = d.asList();
		String s1 = li.get(0);
		String s2 = li.get(1);
		driver.findElement(By.id("login_email")).sendKeys(s1);
		driver.findElement(By.id("login_password")).sendKeys(s2);

	}

	@When("the user clicks the loggin button")
	public void the_user_clicks_the_loggin_button() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@Then("the user logged in successfully")
	public void the_user_logged_in_successfully() {
		Assert.assertEquals("https://www.ourshopee.com/my-account/", driver.getCurrentUrl());
	}

}
