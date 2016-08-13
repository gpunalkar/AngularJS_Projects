describe("Auto Suggestion", function(){
	
	
	it("Automate WebLink", function(){
		browser.get("https://www.sprint.com/search/?INTNAV=LeftNav:Search#!/?category=all&page=1");
	});
	
	it("should give me autosuggest list", function(){
		var autosearch = element(by.name("search")).sendKeys("Company");
		this.selectFirstElement = function(autosearch){
		    browser.sleep(3500);
		    var element1 = element(by.xpath(".//*[@id='top']/div[4]/div[1]/form/div[1]/div[1]/span/div/div/div[2]"))
		    
		    browser.driver.actions().mouseMove(element1);
		    element1.sendKeys(protractor.Key.ARROW_DOWN);
		    element1.sendKeys(protractor.Key.TAB);
		}
		 
	});
	var fs = require('fs');
	var path = require('path');

	var saveScreenshot = function(pathname) {
	  browser.takeScreenshot().then(function(png) {
	    var file = path.resolve("C:\SeleniumClass\Testertested\b.png");
	    fs.writeFileSync(file, png, { encoding: 'base64' }, console.log);
	  });
	};

	

	

	


});