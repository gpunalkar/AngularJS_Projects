
var DataDriven= function(command,key,value)
{
	switch(command)
	{
	
	case "byNameSendKey":
		element(by.name(key)).then(function(textbox) {
			textbox.sendKeys(value)
		})
		break;
		
	
	}
}


describe("URL Should Open",function()
		{
	
	it("Should Open URL", function()
			{
		function ReadMyExcel(){
			var Rs= require('./ExcelRead.js')
			 
		}
		browser.get("http://localhost/hrm/Example26.html");
		
		for(var d : Rs.DataDriven)
			{
			if(d.Runnable=="Y")
				{
				DataDriven(d.Command,d.key,d.value);
				}
			
			}
		
		//var username = element(by.name("userID"))
		var password = element(by.name("userPassword"));
		var button =	element(by.buttonText("Login"));
		
		
		
			});
		});

