var CheckTiltle=function(){
			browser.get("http://localhost/orangehrm/symfony/web/index.php/auth/login");
			browser.driver.manage().window().maximize();
			
			 var e= browser.driver.findElement($('#txtUsername').locator());
			 
			 e.sendKeys("admin");
			 e=browser.driver.findElement($('#txtPassword').locator());
			//	 $('#txtPassword').locator()
			 e.sendKeys("admin");
			// e= $('#btnLogin').locator()
			  e=browser.driver.findElement($('#btnLogin').locator());
			
			 e.click();
			
}

CheckTiltle();

