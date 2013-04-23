describe("jasmineSharedExamples", function(){
  beforeEach(function(){
    this.specFun = function(){};
    spyOn(this, "specFun")
    sharedExampleFor("foo", this.specFun)
  });
  
  it("sharedExampleFor registers the function to the right label", function(){
    expect(sharedExamples["foo"]).toBe(this.specFun);
  });

  it("itBehavesLike calls the right spec function", function(){
    itBehavesLike("foo");
    expect(this.specFun).toHaveBeenCalled();
  });
});