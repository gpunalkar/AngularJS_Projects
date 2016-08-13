describe("Check toBe Greater then", function() {
  it("check for number 12 > 3", function() {
	  expect(12).toBeGreaterThan(3); //true
  });
  
  it("check for number 3 > 12?", function() {
	  expect(3).toBeGreaterThan(12); //false
  });
  
  it("check for number 'a' > 'b'?", function() {
	  expect("a").toBeGreaterThan("b"); //false
  });
  
  
  it("check for number 'b' > 'a'?", function() {
	  expect("b").toBeGreaterThan("a"); //true
  });
  
  
  it("check for number 'abc12' > 'abc'?", function() {
	  expect("abc12").toBeGreaterThan("abc1"); //false
  });
  
  
});
  
 