describe("Add Cookie",function(){
	it("add Cookie", function(){

		browser.get("http://www.facebook.com");
		beforeEach(function(){
		ptor = protractor.getInstance();
		ptor.manage().addCookie("test", "Bentley" );
		});
		it('should have delete cookie ', function () {
		ptor.manage().deleteCookie(test).then(function (data) {
	        console.log(data);
	    });
		});

		
	});
	
	
});