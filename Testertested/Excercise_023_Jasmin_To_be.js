//Strict Compare
describe("To be ", function() {
  it("Check Number to Number", function() {
    expect(true).toBe(true); // true
    expect(181).toBe(181); // true
  });
  
  it("Check Number to string", function() {
	   expect("182").toBe(182); //false
	  });
});
