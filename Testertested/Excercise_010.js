describe('Should login with HR Admin',function()
		{
	it("Should login with HR Admin ", function()
			{
		browser.get("http://localhost/hrm/Example26.html");
		 element(by.name("userID")).sendKeys("Abhay");
		 element(by.name("userPassword")).sendKeys("Abcd@123");
		 element(by.model("UserID")).$("[value='3']").click();
		element(by.buttonText("Login")).click();
			});
	it("Fetch element from Table ", function()
			{
		var headers = element.all(by.css('table.table th'))
		.map(function(elm) {
		    return elm.getText();
		});

		expect(headers).toEqual(
				[ 
				  'Employee List', 
				  'Add', 
				  'Emp ID', 
				  'Name',
				  'Salary', 
				  'Edit', 
				  ''             
		          ] );
		 var list = element.all(by.css('table.table th'));
		 expect(list.count()).toBe(7);
		});


});