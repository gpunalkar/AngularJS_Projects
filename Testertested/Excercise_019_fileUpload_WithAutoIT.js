//npm install -g node-gyp
//npm install --save autoit
var exec = require('child_process').execFile;
browser.get("http://localhost/Test.HTml");
browser.manage().window().maximize();
var we=	browser.findElement(By.id("a1"));
we.click();
exec("C:/AutoIT/Tester2.exe", function(err, data) {  
		       // console.log(err)
		       // console.log(data.toString());                       
		    });   
browser.sleep(30000)