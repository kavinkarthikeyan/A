package com.testrunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources",glue="com.stepdef",monochrome=true,plugin= {"html:target","json:target\\out.json"})
public class TestRunner {

}
