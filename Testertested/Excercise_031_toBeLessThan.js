describe("Check toBe less then", function() {
  it("check for number 12 < 3", function() {
	  expect(12).toBeLessThan(3); //false
  });
  
  it("check for number 3 > 12?", function() {
	  expect(3).toBeLessThan(12); //false
  });
  
  it("check for number 'a' > 'b'?", function() {
	  expect("a").toBeLessThan("b"); //true
  });
  
  
  it("check for number 'b' < 'a'?", function() {
	  expect("b").toBeLessThan("a"); //false
  });
  
  
  it("check for number 'abc12' < 'abc1'?", function() {
	  expect("abc12").toBeLessThan("abc1"); //false
  });
  
  
  it("check for number 'ab' < 'abc1'?", function() {
	  expect("ab").toBeLessThan("abc1"); //false
  });
  
  
});
  
 