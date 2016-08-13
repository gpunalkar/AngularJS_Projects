//Strict Compare
describe("To be ", function() {
  it("Check Number to Number", function() {
    expect(true).not.toBe(true); // false
    expect(181).not.toBe(181); // false
  });
  
  it("Check Number to string", function() {
	   expect("182").not.toBe(182); //true
	  });
});
