 
// This example will show how to use alert in Protractor

browser.get("http://localhost/orangehrm/symfony/web/index.php/pim/viewEmployeeList");
var e = browser.findElement(by.id("txtUsername"));
e.sendKeys("admin");
e= browser.findElement(by.id("txtPassword"));
e.sendKeys("admin");
e= browser.findElement(By.name("Submit"));
e.click();
var element = browser.findElement(by.xpath("//*[@id='menu_pim_viewPimModule']"));
var tohover = browser.findElement(by.xpath("//*[@id='menu_pim_Configuration']"));
var toclick = browser.findElement(by.xpath("//*[@id='menu_pim_configurePim']"));
browser.executeScript('window.scrollTo(0,200);')
browser.sleep(10000)
browser.executeScript('window.scrollTo(0,0);')
browser.sleep(10000)
		