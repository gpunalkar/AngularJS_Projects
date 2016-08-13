//Check unDefined 
describe("Check for unDefined", function() {
  it("check Data", function() {
	  expect("Hello!").toBeUndefined();                  // true
	  expect(1).toBeUndefined();
	  expect(true).toBeUndefined();
  });
  
  it("check variable", function() {
	  var valUndefined;
	 expect(valUndefined).toBeUndefined();       // false
});
  
  it("check null", function() {
	  expect(null).toBeUndefined();
});
  
});
