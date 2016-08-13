describe("Login Test for Upwork",function()
		{
	
	it("Executing login test", function()
			{
		browser.get("https://www.upwork.com/Login");
		element(by.model("username")).sendKeys("smitachopadekar@gmail.com");
		element(by.model("password")).sendKeys("smita123456");
		element(by.buttonText('Log In'));
		expect(browser.getTitle()).toContain("Log In - Upwork");
	
			
	
	
	
});
	
});