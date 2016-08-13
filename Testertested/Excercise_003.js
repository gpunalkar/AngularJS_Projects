describe("Browser Window Maximize",function()
		{
	
	it("Should set desired dimension", function()
			{
		browser.get("http://localhost/hrm/Example26.html");
		var x = 150;
		var y = 100;
		browser.driver.manage().window().setPosition(x, y);
		browser.driver.manage().window().maximize();
			
			});
		});