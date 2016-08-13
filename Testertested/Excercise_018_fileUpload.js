//npm install --save autoit	
var exec = require('child_process').execFile;
browser.get("http://localhost/Test.HTml");
browser.manage().window().maximize();
var we=	browser.findElement(By.id("a1"));
we.click();		
we.sendKeys("C:/AutoIT/Tester2.exe");
browser.sleep(10000)
		