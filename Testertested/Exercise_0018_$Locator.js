browser.get("http://localhost/orangehrm/symfony/web/index.php/pim/viewEmployeeList");
var e = $("#txtUsername");
e.sendKeys("admin");
e= browser.findElement(by.id("txtPassword"));
e.sendKeys("admin");
e= browser.findElement(By.name("Submit"));
e.click();
browser.sleep(10000);
browser.executeScript('window.scrollTo(0,200);')
//browser.executeScript('ControllerName.$scope.Login()')
browser.sleep(10000)
		