describe("Browser Back Functionality",function()
		{
	
	it("Should navigate to browser back", function()
			{
		browser.get("https://www.upwork.com/");
		browser.sleep(10000);
		
		browser.get("https://www.google.com")
		
		var navigateBack = function() {
			  browser.waitForAngular();
			  browser.navigate().back();
			}
		
		var navigateForward = function() {
			  browser.waitForAngular();
			  browser.navigate().forward();
			}
		
		navigateBack();
		navigateForward();
		
			});
		});