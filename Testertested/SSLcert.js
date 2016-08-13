	
describe("ssl",function(){
	it("ssl",function(){
		 driver.manage().window().maximize();
			browser.get("https://www.seleniummonster.com/eventfiringwebdriver-and-event-listeners-in-selenium/");
			browser.navigate().to("javascript:document.getElementById('overridelink').click()");
	})
	
});
