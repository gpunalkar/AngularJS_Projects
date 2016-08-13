var SelectWrapper = require('C:\SeleniumClass\Testertested\Utils\SelectWrapper.js');
var mySelect = new SelectWrapper(by.id("userSelect"));
var currency = new SelectWrapper(by.id("currency"));


var mySelect = new SelectWrapper(by.id("userSelect"));

describe("Banking Application", function(){
	it("Login", function(){
		
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
		element(by.buttonText("Bank Manager Login")).click();
        browser.sleep(2000);
		
	});
	
	it("Should Add Customers", function(){
		
		return;
		element(by.buttonText("Add Customer")).click();
		 element(by.model("fName")).sendKeys("James");
			element(by.model("lName")).sendKeys("Bonds")
			element(by.model("postCd")).sendKeys("SWI56");
			element(by.xpath("html/body/div[3]/div/div[2]/div/div[2]/div/div/form/button")).click();
			
			//browser.waitForAngular()
			browser.sleep(5000);
			var alertDialog = browser.switchTo().alert();
	        alertDialog.getText()
	        .then(function(text){

	            console.log(text);
	        })

	        alertDialog.accept();
	        browser.sleep(2000);

	        
	        
	        
	});
	
	it("Open Account",function(){
		element(by.ngClick("openAccount()")).click();
        mySelect.selectByText("Raman Arora");
        currency.selectByText("Rupee");
        element(by.buttonText("Process")).click();


        browser.sleep(2000);

        var alertDialog = browser.switchTo().alert();
        alertDialog.getText().then(function(text){

            console.log(text);
        })

        alertDialog.accept();
        browser.sleep(2000);

    }) ;



	
});