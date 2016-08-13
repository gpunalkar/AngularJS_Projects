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
	
	it("Should Add Customer ", function()
			{
		
		element(by.buttonText("Add")).click();
		
			
			});
		});