describe("Search functionality",function()
		{
	
	it("Should Open URL", function()
			{
		browser.get("https://weather.com/en-IN");
			});
	
	it("Search",function()
	
	{
		var element = browser.findElement(by.name("search"))
		element.sendKeys("Pune");
	
		
	
	});
		});

