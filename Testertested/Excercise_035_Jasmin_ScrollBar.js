describe("OrangeHRM-login", function() {
	
	it("login - check Title", function() {
		
browser.get("http://localhost/orangehrm/symfony/web/index.php/pim/viewEmployeeList");

browser.getTitle().then(function(value) {
	 expect(value).toBe("OrangeHRM1");
}, function(reason) {
	
})
		
	})
	
	it("login", function() {
		browser.get("http://localhost/orangehrm/symfony/web/index.php/pim/viewEmployeeList");
		var e = browser.findElement(by.id("txtUsername"));
		e.sendKeys("admin");
		e= browser.findElement(by.id("txtPassword"));
		e.sendKeys("admin");
		e= browser.findElement(By.name("Submit"));
		e.click();
		browser.sleep(10000);
	})
	
	it("Scroll", function() {
		browser.executeScript('window.scrollTo(0,200);')
		//browser.executeScript('ControllerName.$scope.Login()')
		browser.sleep(10000)
	})
})



 

		