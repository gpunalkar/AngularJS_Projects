var ObjKeys= require('./KeyData.js');
var FlipkartHomepage = {
  
  SearchKey: "q1",
  //PasswordKey:"",
  SearchValue: "mobile",
  //PasswordValue:"",
  SearchButtonKey: "//*[@id='container']/div/div/header/div[2]/div/div[2]/div/form/input[1]",
    
  LaunchFlipkart: function(){
  // browser.get("http://www.flipkart.com/");
   
	  for( var i in ObjKeys.Keys)
	   {
	   	console.log(ObjKeys.Keys[i])
	   }
   
  },
  Search: function(){
	  
	  var e =null;
	  try
	  {
		  e =element(by.name(this.SearchKey));
		  e.then(function(arg0) {
			  e.sendKeys(this.SearchValue);
			  e = element(by.xpath(this.SearchButtonKey));
			   e.click();
		  })
		    
	  }
	  catch(ex)
	  {
		  console.log("Button not found");
	  }
	  
  
	 
 
  
  },
 
}


module.exports.FlipkartHomepage = FlipkartHomepage