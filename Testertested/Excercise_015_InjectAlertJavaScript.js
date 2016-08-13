browser.get("http://localhost/orangehrm/symfony/web/index.php/pim/viewEmployeeList");
var e = browser.findElement(by.id("txtUsername"));
e.sendKeys("admin");
e= browser.findElement(by.id("txtPassword"));
e.sendKeys("admin");
e= browser.findElement(By.name("Submit"));
e.click();
browser.sleep(10000);
browser.executeScript('window.scrollTo(0,200);')
browser.executeScript('alert("a")')
browser.sleep(10000)
		