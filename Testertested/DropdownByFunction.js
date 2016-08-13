

var Search=function()
{
	 var rs=require("./ScreenCapure.js");
	element(by.model("search")).sendKeys("Abhay");
	 browser.waitForAngular();
	 rs.ScreenImage("a.png");
}

var GetWebSite= function()
{
	browser.get("http://localhost/HRM/Example26.html#/");
	
	}

var LogOut =function()
{
	var p=	element(by.xpath("html/body/div[1]/div/div/div/ul/li"));
    // var i= element(by.xpath("html/body/div[2]/div/form/div/input"));

	
     browser.actions().
     
     mouseMove(p).
    
     perform();
	
}
var Login= function()
{
	element(by.model("UserID")).sendKeys("Abhay");
	element(by.model("Password")).sendKeys("Abcd@123");
	element(by.id("btnLogin")).click();
	
}

var GotEditPage= function()
{
	browser.get("http://localhost/HRM/Example26.html#/Edit/101");
}

var PrintDropDown=function(items)
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
}

var SelectDropDown= function()
{
	element.all(by.css("#ddEmployee option"))
	.then(PrintDropDown);
}

describe("Login Test for Dropdown",function()
		{
	
	it("Open Site",GetWebSite);
	it("Login to Site",Login);//search
	it("Login to Site",LogOut);
	/*it("Login to new",Search);	
	it("Go to Edit Page",GotEditPage);
	it("Select and Print Dropdown",SelectDropDown);
	*/ 
});