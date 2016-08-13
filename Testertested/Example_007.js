browser.get("http://localhost/orangehrm/symfony/web/index.php/auth/login");
browser.manage().window().maximize();

var e = browser.findElement(by.xpath("//*[@id='logInPanelHeading']"));
e.getText().then(function(title) {
	console.log("Title is present" + title);
});



