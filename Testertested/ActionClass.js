

//it('should display the popover-content on mouseover', function() {
     browser.get('http://localhost/orangehrm/symfony/web/index.php/pim/viewEmployeeList');
     browser.waitForAngular();
     var e = browser.findElement(by.id("txtUsername"));
     e.sendKeys("admin");
     e= browser.findElement(by.id("txtPassword"));
     e.sendKeys("admin");
     e= browser.findElement(By.name("Submit"));
     e.click();
    browser.actions()
    .mouseMove(
    		element(
    				by.xpath(".//*[@id='menu_pim_addEmployee']")
    				)
    				).click().perform();
    
    
    browser.sleep(5000)
     //expect(element(by.xpath('.popover-content')).isDisplayed()).toBeTruthy();
 //});





		//mouseMove(browser.findElement(browser.By.xpath('by.xpath("//*[@id='menu_pim_Configuration']")))).perform();

		 /*browser.actions().mouseMove(toclick)
		.build().perform();
		//toclick.click();
		 
		 browser.sleep(10000)*/
		