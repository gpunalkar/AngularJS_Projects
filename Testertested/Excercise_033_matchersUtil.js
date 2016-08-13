describe("object compare", function() {
  it("Check Object compare ", function() {
      var a = { t: 1 };
      var b = {foo: a};
      var c = {foo: a};
      
    jasmine.matchersUtil.equals(b,c);
  });
});

