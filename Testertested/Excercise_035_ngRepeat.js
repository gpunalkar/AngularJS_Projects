describe("get Angular version", function() {
  it("get Angular version", function() {
	  
	  browser.get("http://localhost/Angular/HtmlPage_list.html");
	  
	  var items = element.all(by.repeater('obj in list')).map(function(elm, index) {
		 
		  console.log(index)
		  return {
		    index: index,
		    text: elm.getText(),
		    class: elm.getAttribute('id')
		  };
		});
	  console.log(items.length)
	   
		  
		 
	  
  });
});


