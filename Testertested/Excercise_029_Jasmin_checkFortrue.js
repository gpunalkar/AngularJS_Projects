describe("Check toBe true", function() {
  it("check for true", function() {
	  expect(true).toBeTruthy();  //true
  });
  
  it("check for value", function() {
	 var a=12;
	  expect(a).toBeTruthy(); //true 
  });  
  
  it("check for object", function() {
	  var obj={}
	  expect(obj).toBeTruthy(); //true
  }); 
  
  it("check for undefined", function() {
	 var a;
	  expect(a).toBeTruthy(); //false
  }); 
  
  
  it("check for value", function() {
		var a=1;
		  expect(a).toBeTruthy(); //true
	  });
  
  it("check for value 0", function() {
		var a=0;
		  expect(a).toBeTruthy(); //false
	  });

});
  
 