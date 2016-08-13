//Decimal position Compare
describe("To be ", function() {
  it("Decimal position Compare", function() {
	  expect(12.34).toBeCloseTo(12.32, 1);  // true
	  expect(12.34).toBeCloseTo(12, 0);  // true
  });
  
  it("Decimal position Compare - diff", function() {
	  expect(12.34).toBeCloseTo(12.3, 2);  // true
	  });
});
