package com.stepdef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import com.baseclass.BaseClass;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class HooksClass extends BaseClass {
	
	public static WebDriver driver;
	@Before
	public void BeforeExecutions() {
		
		Browserlaunch();
		LaunchUrl("https://www.ourshopee.com/");
			
			
			
	}

@After
public void AfterExecution() {
 
quit();
}
}
