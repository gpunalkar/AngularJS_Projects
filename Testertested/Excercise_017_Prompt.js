browser.get("http://localhost/BootStrap/Example01/alert.html");
//browser.manage().window().maximize();;
//getprompt(browser);

var obj = browser.findElement(By.id("btnprompt"));
obj.click();
var alert = browser.switchTo().alert();
 alert.getText().then(function(text){
	 console.log(text);
 })
alert.sendKeys("Testing");
 browser.sleep(10000)
alert.dismiss();

