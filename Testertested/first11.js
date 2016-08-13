describe("Example 002",function()
			{
		
		it("Login test Case", function()
				{
		browser.get("https://www.upwork.com/Login");
		element(by.model("username")).sendKeys("smitachopadekar@gmail.com");
			element(by.model("password")).sendKeys("smita123456");
			element(by.buttonText('Log In'));
		
		
		
	});

	it("mouse movement ", function()
				{
	browser.actions().
	mouseMove(browser.findElement(browser.By.xpath("//*[@id='skinny-nav']/ul[2]/li[4]/ul/li[4]/a"))).perform(); 

	});
	});
