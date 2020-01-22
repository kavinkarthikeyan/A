package com.baseclass;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
public static WebDriver driver;

public void Browserlaunch() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\Kavin\\My Workspace\\OurShopee\\Driver\\chromedriver.exe");
	 driver=new ChromeDriver();

}
public void LaunchUrl(String value) {
	driver.get(value);
}
public void quit() {
driver.quit();
}
}
