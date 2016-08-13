describe("Browser Back Functionality",function()
		{
	
	it("Should navigate to browser back", function()
			{
		browser.get("https://www.google.com");
	 
		browser.manage().timeouts().implicitlyWait(10000);
		var link =	element(by.linkText("Gmail"));
		//waitForAngular() called here
		 var navigateBack = function() {
			  browser.waitForAngular();
			  browser.navigate().back()
			}
		 link.click();
		//browser.manage().timeouts().implicitlyWait(10000);
		navigateBack(); //No waitForAngular() */
		//here 
			});
		});