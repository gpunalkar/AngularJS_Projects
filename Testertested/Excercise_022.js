describe("Example 001", function() {
  it("Check Expect ", function() {
    //expect(true).not.toBe(false);
	  var a = { t: 1 };
      var b = {foo: a};
      var c = {foo: a};
      
      expect(c).to(b);
  });
});

