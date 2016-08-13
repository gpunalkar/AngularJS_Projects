 var clickMe33= function()
        {
            var txt = document.getElementById("Id1");
            txt.value = "Ramiz2";
        }

describe("object Get from Java script", function() {
  it("get object", function() {
	  
	  browser.get("http://localhost/HtmlPage_getObject_javaScript.html");
	
	 // var elem = browser.findElements(by.tagName('div'));
 
	  var elem2 = browser.findElements(by.xpath("//div/div"));

	  elem2.then(function(list){
		  console.log(list.length)
	  });
	  
	  elem2.then(function(list){
		  for(var i=0;i<list.length;i++){
			  list[i].getText().then(function(text)
                      {
				  			console.log(text);

                      });
		   
		  }
	  });
      browser.sleep(2000);
	  
	  /* var a =$("#Id1");
		a.sendKeys("Ramiz");*/ 
	  
	 browser.executeScript('window.clickMe()');
		browser.sleep(3000)
	 /* browser.executeScript('return window.a').then( function(a){
	        console.log(a);
	    });*/
  });
});

