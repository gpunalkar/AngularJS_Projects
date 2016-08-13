describe('Should login with HR Admin',function()
		{
	it("Should login with HR Admin ", function()
			{
		browser.get("http://localhost/hrm/Example26.html");
		 element(by.name("userID")).sendKeys("Abhay");
		 element(by.name("userPassword")).sendKeys("Abcd@123");
        //element(by.model("UserID")).$("[value='3']").click();
		element(by.buttonText("Login")).click();
		
			
			});
	it("Fetch element from Table ", function()
			{
		/*
*/
		
		var tabledata =element.all(by.css("./table"));

		  //Get Rows 

		  var rows =tabledata.all(by.tagName("tr"));

		  //Get cells values

		  var cells = rows.all(by.tagName("td"));

		expect(cells.get(0).getText()).toEqual("Abhishek");
		
		     	
		});
		});


});