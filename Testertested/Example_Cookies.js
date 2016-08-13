describe("Add Cookie",function(){
	it("add Cookie", function(){

		browser.get("http://www.facebook.com");
		beforeEach(function(){
		ptor = protractor.getInstance();
		ptor.manage().addCookie("test", "Bentley" );
		});
		it('should have cookie named test', function () {
		ptor.manage().getCookie("test").then(function (data) {
	        console.log(data);
	    });
		});

		
	});
	
	
});