describe("HRM Dropdown",function(){

	it("validate customer login test",function(){

		browser.get("http://localhost/HRM/Example26.html#/");
		element(by.model("UserID")).sendKeys("Abhay");
		element(by.model("Password")).sendKeys("Abcd@123");
		element(by.id("btnLogin")).click();
		browser.get("http://localhost/HRM/Example26.html#/Edit/101");
		element.all(by.css("#ddEmployee option"))
		.then(function(items)
				{

			console.log("-----printing values from dropdown list-----");
			console.log("Total values in dropdown are : "+items.length);

			for(i=0; i<items.length; i++)
			{

			items[i].getText()
			.then(function(text)
			{

					console.log(text);

				});
			}
				});
	});
		

			

		});






