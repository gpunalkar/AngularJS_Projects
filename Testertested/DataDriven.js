var OrangeHRM_DataDriven = {
		
		unameKey: "#txtUsername",
		PasswordKey:"#txtPassword",
		unameValue: "admin",
		PasswordValue:"admin",
		LoginButtonKey: ".//*[@id='btnLogin']",
				
		Login: function(){
			var usrName = 
this.unameKey);
			usrName.sendKeys(this.unameValue);
			var pwd = $(this.PasswordKey);
			pwd.sendKeys(this.PasswordValue);
			
			var LogBtn = browser.findElement(by.xpath(this.LoginButtonKey));
			LogBtn.click();
			
			//this is for the same page of code
			//CheckPageTitle("Login")
			
			CommanFunctions.CommanFunction.CheckTitle("OrangeHRM")
		},
		
}


module.exports.OrangeHRM_DataDriven = OrangeHRM_DataDriven;