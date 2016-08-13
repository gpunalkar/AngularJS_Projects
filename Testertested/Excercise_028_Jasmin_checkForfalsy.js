describe("Check toBeFalsy", function() {
  it("check for false", function() {
	  expect(false).toBeFalsy(); //true
  });
  
  it("check for null", function() {
	  expect(null).toBeFalsy(); //true 
  });  
  
  it("check for blank", function() {
	  expect("").toBeFalsy(); //true
  }); 
  
  it("check for undefined", function() {
	var a;
	  expect(a).toBeFalsy(); //true
  }); 
  
  
  it("check for value", function() {
		var a=1;
		  expect(a).toBeFalsy(); //false
	  });
  
  it("check for value 0", function() {
		var a=0;
		  expect(a).toBeFalsy(); //true
	  });

});
  
 