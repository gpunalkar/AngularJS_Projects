//Check Defined 
describe("Check for Defined", function() {
  it("check Data", function() {
	  expect("Hello!").toBeDefined();                  // true
	  expect(1).toBeDefined(); 
	  expect(true).toBeDefined(); 
  });
  
  it("check variable", function() {
	  var valUndefined;
	 expect(valUndefined).toBeDefined();   // false
});
  
  it("check null", function() {
	  expect(null).toBeDefined(); 
});
  
});
