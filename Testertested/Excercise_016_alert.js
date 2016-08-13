	browser.get("http://localhost/BootStrap/Example01/alert.html");
	var obj = browser.findElement(By.id("btnsubmit"));
	obj.click();
	 var alert = browser.driver.switchTo().alert();
	 browser.sleep(10000)
	alert.getText().then(function(text)
	{
		console.log(text);
	})
	
	alert.accept(); 
	browser.sleep(2000)